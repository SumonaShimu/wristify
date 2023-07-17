import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Pages/Home/MainLayout.jsx';
import Main from './Pages/Home/Main.jsx';
import Login from './Pages/Login/Login.jsx';
import Registration from './Pages/Registration/Registration.jsx';
import AddToy from './Pages/private/AddWatch';
import AuthProvider from './Pages/AuthProvider';
import PrivateRoute from './Pages/private/PrivateRoute';
import Details from './Pages/private/Details';
import MyToys from './Pages/private/MyWatches';
import Error from './Pages/Error';
import { ToastContainer } from 'react-toastify';
import Blog from './Pages/Blog';
import AllWatches from './Pages/AllWatches';
import AddWatch from './Pages/private/AddWatch';
import MyWatches from './Pages/private/MyWatches';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/allwatches",
        element: <AllWatches/>,
        loader:()=>fetch('https://wristify-server.vercel.app/allwatches')
      },
      {
        path: "/add-a-watch",
        element: <PrivateRoute><AddWatch></AddWatch></PrivateRoute>,
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader:({params})=>fetch(`https://wristify-server.vercel.app/watch/${params.id}`)
      },
      {
        path: "/mywatches",
        element: <PrivateRoute><MyWatches></MyWatches></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/reg",
        element: <Registration />,
      },
      {
        path: "/blog",
        element: <Blog />,
      }
    ]
  },
  {
    path: "*",
    element: <Error></Error>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer/>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
