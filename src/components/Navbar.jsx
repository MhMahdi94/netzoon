import React, { useState } from 'react';
import appLogo from '../assets/netzoon-logo.png';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showAddMenu, setShowAddMenu] = useState(false);
    return (

        <>
            <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 shadow">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to='/home' className="flex items-center">
                        <img src={appLogo} className="h-12 mr-3 object-fill" alt="Netzoon Logo" />
                        <SearchBar />
                    </Link>
                    <div class="flex items-center lg:order-2">
                        <Link to='/cart' className="mr-6 text-sm  text-gray-500  ">
                            <svg className="w-6 h-6 text-main " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1" />
                            </svg>
                        </Link>
                        <Link to='/notification' className="mr-6 text-sm  text-gray-500  ">
                            <svg className="w-6 h-6 text-main" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 21">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z" />
                            </svg>
                        </Link>
                        <button type="button" data-dropdown-toggle="language-dropdown-menu" class="inline-flex items-center font-medium justify-center  text-sm text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 ">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" zoomAndPan="magnify" viewBox="0 0 30 30.000001" height="40" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 8 5.785156 L 26.855469 5.785156 L 26.855469 12 L 8 12 Z M 8 5.785156 " clip-rule="nonzero"/></clipPath><clipPath id="id2"><path d="M 8 11 L 26.855469 11 L 26.855469 18 L 8 18 Z M 8 11 " clip-rule="nonzero"/></clipPath><clipPath id="id3"><path d="M 8 17 L 26.855469 17 L 26.855469 23.207031 L 8 23.207031 Z M 8 17 " clip-rule="nonzero"/></clipPath><clipPath id="id4"><path d="M 2.90625 5.785156 L 9 5.785156 L 9 23.207031 L 2.90625 23.207031 Z M 2.90625 5.785156 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="rgb(2.349854%, 50.979614%, 25.489807%)" d="M 24.191406 5.785156 L 8.894531 5.785156 L 8.894531 11.816406 L 26.851562 11.816406 L 26.851562 8.464844 C 26.851562 6.984375 25.660156 5.785156 24.191406 5.785156 Z M 24.191406 5.785156 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#id2)"><path fill="rgb(93.328857%, 93.328857%, 93.328857%)" d="M 8.894531 11.816406 L 26.851562 11.816406 L 26.851562 17.175781 L 8.894531 17.175781 Z M 8.894531 11.816406 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#id3)"><path fill="rgb(7.839966%, 7.839966%, 7.839966%)" d="M 8.894531 23.207031 L 24.191406 23.207031 C 25.660156 23.207031 26.851562 22.003906 26.851562 20.527344 L 26.851562 17.175781 L 8.894531 17.175781 Z M 8.894531 23.207031 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#id4)"><path fill="rgb(92.549133%, 12.548828%, 15.689087%)" d="M 5.570312 5.785156 C 4.101562 5.785156 2.910156 6.984375 2.910156 8.464844 L 2.910156 20.527344 C 2.910156 22.003906 4.101562 23.207031 5.570312 23.207031 L 8.894531 23.207031 L 8.894531 5.785156 Z M 5.570312 5.785156 " fill-opacity="1" fill-rule="nonzero"/></g></svg>
                            AED
                        </button>
                        <button type="button" data-dropdown-toggle="language-dropdown-menu" class="ml-2 inline-flex items-center font-medium justify-center text-main text-sm text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                            English
                        </button>
         

                        
                        <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <button onClick={() => { setShowMenu(!showMenu); setShowAddMenu(false); }} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-main rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 md:w-auto ">
                                    All Categories
                                    <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>


                            </li>
                            <li>
                                <button onClick={() => { setShowAddMenu(!showAddMenu); setShowMenu(false); }} id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-main rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 md:w-auto ">
                                    Add
                                    <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </button>
                            </li>
                            <li>
                                <Link to='/login' className="text-main rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 md:w-auto  ">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 ">
                {showMenu ? <div className=" p-4 pb-0 text-gray-900 md:pb-4 ">
                    <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm" aria-labelledby="mega-menu-dropdown-button">
                        <li>
                            <Link to="/freezone-companies" className="text-gray-900  hover:underline">Free zone companies</Link>
                        </li>
                        <li>
                            <Link to="/factories" className="text-gray-900  hover:underline">Factories</Link>
                        </li>
                        <li>
                            <Link to="/local-companies" className="text-gray-900  hover:underline">Local Companies</Link>
                        </li>

                        {/* {   (showAddMenu || showMenu)?
                    <li>
                        <button onClick={() => {setShowMenu(false); setShowAddMenu(false);}} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-main rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 md:w-auto ">
                            <svg class="flex-end w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                        </button>
                    </li>:null
                } */}
                    </ul>
                </div> : null}
                {showAddMenu ? <div className="p-4 pb-0 text-gray-900 md:pb-4 ">
                    <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm" aria-labelledby="mega-menu-dropdown-button">
                        <li>
                            <Link to='/add-product' className="text-gray-900  hover:underline">Add Product</Link>
                        </li>
                        <li>
                            <Link to='/add-car' className="text-gray-900  hover:underline">Add Car</Link>
                        </li>
                        <li>
                            <Link to='/add-plane' className="text-gray-900  hover:underline">Add Plane</Link>
                        </li>
                        <li>
                            <Link to='/add-real-estate' className="text-gray-900  hover:underline">Add Real Estate</Link>
                        </li>

                        <li>
                            <Link to='/add-deal' className="text-gray-900  hover:underline">Add Deal</Link>
                        </li>
                        <li>
                            <Link to='/add-ad' className="text-gray-900  hover:underline">Add Advertisment</Link>
                        </li>
                        <li>
                            <Link to='/add-news' className="text-gray-900  hover:underline">Add News</Link>
                        </li>
                    </ul>
                </div> : null}

            </nav>

        </>

    )
}

export default Navbar