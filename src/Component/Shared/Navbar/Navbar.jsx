import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../../assets/logo/logo.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import DrawerMenu from "./DrawerMenu/DrawerMenu";
import { Link } from "react-router-dom";
import {BsFillSuitHeartFill} from "react-icons/bs"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuItems = (
    <>
      <li>
        <Link to="/" className="font-medium text-[16px] alegreyaMedium leading-5 uppercase">Home</Link>
      </li>
      <li>
        <Link to="/" className="font-medium text-[16px] alegreyaMedium leading-5 uppercase">SarvangAmrit</Link>
      </li>
      <li>
        <Link to="/" className="font-medium text-[16px] alegreyaMedium leading-5">Ingredeints</Link>
      </li>
      <li>
        <Link to="/" className="font-medium text-[16px] alegreyaMedium leading-5 uppercase">Why US</Link>
      </li>
      <li>
        <Link to="/" className="font-medium text-[16px] alegreyaMedium leading-5 uppercase">How we do it</Link>
      </li>
      <li>
        <Link to="/" className="font-medium text-[16px] alegreyaMedium leading-5 uppercase">About</Link>
      </li>
      <li>
        <Link to="/" className="font-medium text-[16px] alegreyaMedium leading-5 uppercase ">Contact</Link>
      </li>
      <button className="w-[143px] h-[45px] rounded-[50px] bg-[#1E2819] text-[16px] font-bold alegreyaBold text-white nav_sign">SIGN UP NOW!</button>
      <button className="w-[138px] h-[45px] rounded-[50px] main_btn text-[16px] font-bold alegreyaBold text-white ml-[12px]">SHOP NOW!</button>
  
      
    </>
  );

  window.onscroll = () => scrollingBg();
  const scrollingBg = () => {
    if (document.documentElement.scrollTop > 50) {
      document.getElementById("main-nav").classList.add("nav-bg");
      document.getElementById("navContainer").classList.add("bb-none");
    } else {
      document.getElementById("main-nav").classList.remove("nav-bg");
      document.getElementById("navContainer").classList.remove("bb-none");
    }
  };

  return (
    <nav id="main-nav" className="px-6 xl:px-0">
      <div id="navContainer" className="max-w-7xl mx-auto nav-container ">
        <Link to="/">
          <div className="flex">
            <img className="lg:w-60 md:w-60 w-[50px]  lg:h-[90px] md:h-[80px] h-[76px]" src={logo} alt="logo" />
          </div>
        </Link>
        <div className="toggole-menu">
          <button onClick={() => setOpenMenu(!openMenu)}>
            <GiHamburgerMenu size={24} />
          </button>
        </div>
        <div className={`phone-menu ${openMenu ? "block right0" : "hidden"}`}>
          <DrawerMenu setOpenMenu={setOpenMenu} openMenu={openMenu} />
        </div>
        <div className="menu">
          <ul className="main-menu">{menuItems}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
