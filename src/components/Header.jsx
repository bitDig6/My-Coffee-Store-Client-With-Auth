import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/images/more/logo1.png';

const Header = () => {
    const menus = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/addCoffee'>Add Coffee</NavLink>
    </>


    return (
        <div className="navbar  text-white shadow-sm px-5 header-bg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black">
                        {menus}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-3xl font-rancho">
                    <img className='w-12' src={logo} alt="" />
                    Espresso Emporium
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <div className='flex gap-5'>
                        {menus}
                    </div>
                </ul>
            </div>
            <div className="navbar-end space-x-3">
            </div>
        </div>
    );
};

export default Header;







// {
//     user ?
//         user?.photoURL &&
//         <div className="dropdown dropdown-bottom dropdown-end">
//             <div tabIndex={0} role="button" className="avatar rounded-full border-2 border-violet-600 cursor-pointer">
//                 <div className="w-12 rounded-xl">
//                     <img className='w-full rounded-full' src={user?.photoURL} />
//                 </div>
//             </div>
//             <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
//                 <li>
//                     <button onClick={handleLogOut} className="btn btn-ghost text-violet-900">Logout</button>
//                 </li>
//             </ul>
//         </div>
//         : <Link to="/login" className="btn rounded-full text-purple-500">Login</Link>
// }
// <ToastContainer></ToastContainer>