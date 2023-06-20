import React from "react";
import "./DrawerMenu.css";
import { ImCross } from "react-icons/im";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineClose } from 'react-icons/ai';
import img from "../../../../assets/logo/sss.png";
import { Link } from "react-router-dom";
import {BsFillSuitHeartFill} from "react-icons/bs"

const DrawerMenu = ({ setOpenMenu, openMenu }) => {
  const according = document.getElementsByClassName("according-menu");

  const removeClass = () => {
    for (let i = 0; i < according.length; i++) {
      according[i].classList.remove("active");
      according[i].classList.remove("color");
    }
  };

  for (let i = 0; i < according.length; i++) {
    according[i].addEventListener("click", function () {
      removeClass();
      this.classList.add("active");
      this.classList.add("color");
    });
  }

  return (
    <div className="main-drawer">
      <div className="drawer-header mt-[40px]">
        <span onClick={() => setOpenMenu(!openMenu)}>
          <AiOutlineClose className="text-black" />
        </span>
      </div>
      <img src={img} alt="img" />
      <div className="flex justify-between items-center">
        <div className="mt-[14px]">
          <h2 className="text-[23px] font-bold leading-5 alegreyaBold">Name Surname</h2>
          <p className="text-[16px] font-normal leading-5 alegreyaNormal">Username</p>
        </div>
        <div><FiLogOut size={28} /></div>
      </div>
      <hr className="h-[1px] bg-[#CED0C8] mt-[20px]" />
      <ul className="drawer-main-menu alegreyaMedium font-medium">
        <li >
          <Link>
            <p>Home</p>
          </Link>
        </li>
        <li>
         <Link>
            <p>SarvangAmrit</p>
          </Link>
        </li>
        <li>
         <Link>
            <p>Ingredeints</p>
          </Link>
        </li>
        <li>
         <Link>
            <p>Why</p>
          </Link>
        </li>
        <li>
         <Link>
            <p>How we do it</p>
          </Link>
        </li>
        <li>
         <Link>
            <p>About</p>
          </Link>
        </li>
        <li>
         <Link>
            <p>Contact</p>
          </Link>
        </li>
      </ul>
      <hr className="h-[1px] bg-[#CED0C8] my-[20px]" />
      <div className="pb-[100px] flex items-center icon_gap">
        <span><FaFacebookF /></span>
        <span><FaTwitter /></span>
        <span><FaLinkedinIn /></span>
        <span><BsInstagram /></span>
      </div>
    </div>
  );
};

export default DrawerMenu;
