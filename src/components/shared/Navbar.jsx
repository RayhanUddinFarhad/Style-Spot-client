import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { FaChevronCircleDown, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {


  const [cart, setCart] = useState([])
  const { user, logOut } = useContext(AuthContext)
  console.log(user);


  const handleLogOut = () => {

    logOut()
      .then(() => { })



  }


  const storedCart = localStorage.getItem('shopping-cart')

  return (
    <div>

      <div className="navbar bg-base-100 fixed z-10  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-5">
            <Link to="/">Home</Link>
            <Link to="/collections">collections</Link>

            <Link to="/cart"><div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div></Link>
              <p className='mr-5 text-red-500 font-bold lg:flex items-center '>{user?.displayName}
            <FaChevronCircleDown className='ml-2'></FaChevronCircleDown>
          </p>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-3xl font-extrabold">Style<span className='text-red-500'>Spot</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-10 text-primary font-bold">
            <Link to="/">Home</Link>
            <Link to="/collections">collections</Link>

            <Link to="/cart"><div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div></Link>




          </ul>
        </div>
        <div className="navbar-end">

          <p className='mr-5 text-red-500 font-bold lg:flex items-center hidden'>{user?.displayName}
            <FaChevronCircleDown className='ml-2'></FaChevronCircleDown>
          </p>

          {

            user ? <button onClick={handleLogOut} className='button-primary'>LogOut</button> : <Link to="/logIn" className="button-primary">Log In</Link>

          }

        </div>
      </div>

    </div>
  );
};

export default Navbar;