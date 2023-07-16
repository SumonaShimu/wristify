import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { Tooltip } from 'react-tooltip'
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navitems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/allwatches">All-watches</Link></li>
      <li><Link to="/add-a-watch">Add a watch</Link></li>
      {user && <li><Link to="/mywatches">My watches</Link></li>}
      <li><Link to="/blog">Blog</Link></li>
    </>

  );

  return (
    <div className="navbar bg-dark">
      <div className="navbar-start max-h-20">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navitems}
          </ul>
        </div >

        <div className='h-36 w-52 flex items-center'>
        <Link to="/"> <img src="logo.png" className="object-scale-down h-24 w-24" /></Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navitems}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? (<>
            <button onClick={logOut} className="btn btn-primary">Log out</button>
            <img
              src={user.photoURL}
              className='w-10 h-10 rounded-full'
              data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}
            />
            <Tooltip id="my-tooltip" place="top" offset = "{'bottom': 50}"/>
          </>) :
            (<Link to="/login" className="btn btn-primary">Login</Link>)
        }
      </div>
    </div>
  )
};

export default NavBar;