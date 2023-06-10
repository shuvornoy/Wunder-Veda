import React from 'react';
import logo from '../../../assets/logo/logo.png';
import { BsSearch } from "react-icons/bs";
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
      <div className='main_navbar'>
        <div className="xl:w-[1280px] w-full md:h-[102px] h-[90px] mx-auto pl-6 xl:pl-0">
        <div className="navbar items-center">
          <div className="navbar-start">
            <img
              className="md:w-[60px] w-[50px] md:h-[90px] h-[76px]"
              src={logo}
              alt="logo"
            />
          </div>
          <div className="navbar-end">

           
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block stroke-current w-[28px] h-[21px] text-[#ED7B23]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content ml-[-155px] mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase text-[14px] alegreyaSans"
              >
               <li>
                <Link to="/">Home</Link>
              </li>
              <li tabIndex={0}>
                <Link to="/ingredients">Ingredients</Link>
              </li>
              <li>
                <Link to='/how'>How We Do It</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
                <div className="ml-4">
                  <Link to='/signup'>
                    <button className="border-[1px] border-[#1e2819] rounded-[50px] lg:w-[143px] w-full h-[40px] bg-white">
                      <h2 className='px-2 alegreyaBold text-[16px] font-bold'>SIGN UP NOW!</h2>
                    </button>
                  </Link>
                  <button className="w-full h-[40px] rounded-[50px] font-bold text-[14px] text-[#fff]  leading-[17px] main_btn mt-2">
                    <h2 className="px-2 alegreyaBold">SHOP NOW!</h2>
                  </button>
                </div>
              </ul>
            </div>
          </div>

          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 uppercase text-[#1E2819] text-[14px] alegreyaSans">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li tabIndex={0}>
                <Link to="/ingredients">Ingredients</Link>
              </li>
              <li>
                <Link to='/how'>How We Do It</Link>
              </li>
              <li>
                <Link to='/about'>About Us</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="xl:gap-[12px] lg:gap-4 lg:flex hidden pr-6 xl:pr-0">
            <Link to='/signup'>
              <button className="border-[1px] border-[#1e2819] rounded-[50px] lg:w-[143px] md:w-[100px] w-[173px] lg:h-[45px] md:h-[50px] h-[30px] bg-white"><h2 className='px-2 alegreyaBold text-[16px] font-bold'>SIGN UP NOW!</h2></button>
            </Link>

              <button className="w-[138px] h-[45px] rounded-[50px] font-bold text-[14px] text-[#fff] lg:block hidden leading-[17px] main_btn">
              <h2 className="px-2 alegreyaBold">SHOP NOW!</h2>
            </button>
          </div>
        </div>
      </div>
      </div>
    );
};

export default Navbar;