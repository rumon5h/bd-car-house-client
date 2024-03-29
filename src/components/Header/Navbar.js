import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import './Navbar.css';

const Navbar = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <nav className="bg-gray-900  shadow-slate-300 sticky top-0 z-50 shadow-lg  text-slate-300 body-font">
                <div className="container justify-between mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                        <span className="ml-3 text-xl text-slate-300">Bd Car House</span>
                    </Link>
                    <nav className="md:ml-auto navbar flex flex-wrap items-center text-base justify-center">
                        <Link to='/home' className="mr-5 hover:text-white">Home</Link>
                        <Link to='/inventory' className="mr-5 hover:text-white">Inventory</Link>
                        {
                            user ? <Link to='/manage' className="mr-5 hover:text-white">Manage Items</Link> : ''
                        }
                        {
                            user ? <Link to='/addCar' className="mr-5 hover:text-white">Add Items</Link> : ''
                        }
                        {
                            user ? <Link to='/myItems' className="mr-5 hover:text-white">My Items</Link> : ''
                        }
                        <Link to='/blogs' className="mr-5 hover:text-white">Blogs</Link>
                        <Link to='/about' className="mr-5 hover:text-white">About</Link>
                        
                    </nav>
   
                    {
                        user ? <div className='dropdown'>
                            <img className='w-9 h-9 rounded-3xl mr-1' src='https://i.ibb.co/4d7yb8b/image.png' alt="" />
                            <div className='dropdown-content'>
                            <Link
                                    
                                    to='/home' className="inline-flex items-center bg-gray-100 text-gray-900 border-0 py-1 px-3 focus:outline-none 
                        hover:bg-gray-200 rounded text-base mt-4 ">Home
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>

                                <Link
                                    
                                    to='/inventory' className="inline-flex items-center bg-gray-100 text-gray-900 border-0 py-1 px-3 focus:outline-none 
                        hover:bg-gray-200 rounded text-base mt-4 ">Inventory
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                               
                                <Link
                                    
                                    to='/manage' className="inline-flex items-center bg-gray-100 text-gray-900 border-0 py-1 px-3 focus:outline-none 
                        hover:bg-gray-200 rounded text-base mt-4 ">Manage Items
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                                <Link
                                    
                                    to='/addCar' className="inline-flex items-center bg-gray-100 text-gray-900 border-0 py-1 px-3 focus:outline-none 
                        hover:bg-gray-200 rounded text-base mt-4 ">Add Items
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                                <Link
                                    
                                    to={`/myItems`} className="inline-flex items-center bg-gray-100 text-gray-900 border-0 py-1 px-3 focus:outline-none 
                        hover:bg-gray-200 rounded text-base mt-4 ">My Items
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>

                                <Link
                                    
                                    to='/blogs' className="inline-flex items-center bg-gray-100 text-gray-900 border-0 py-1 px-3 focus:outline-none 
                        hover:bg-gray-200 rounded text-base mt-4 ">Blogs
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                                
                                <Link
                                    onClick={() => signOut(auth)}
                                    to='/login' className="inline-flex items-center bg-gray-100 text-gray-900 border-0 py-1 px-3 focus:outline-none 
                        hover:bg-gray-200 rounded text-base mt-4">Logout
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>

                        </div> :
                            <Link to='/login' className="inline-flex items-center bg-gray-100 text-gray-900 border-0 py-1 px-3 focus:outline-none 
                                        hover:bg-gray-200 rounded text-base mt-4 md:mt-0">LogIn
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;