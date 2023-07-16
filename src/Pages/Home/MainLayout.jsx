import NavBar from '../NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const MainLayout = () => {
    return (
        <div className='bg-dark text-primary'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;