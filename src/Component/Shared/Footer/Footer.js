import React from 'react';
import logo from '../../../assets/logo/logo.png'
import payment from '../../../assets/logo/payment.png'
import google from '../../../assets/logo/google.png'
import apply from '../../../assets/logo/apply.png'
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter, BsFillTelephoneFill } from 'react-icons/bs';
import { GrLinkedinOption } from 'react-icons/gr';
import { FiInstagram } from 'react-icons/fi';
import { IoMdMail } from 'react-icons/io';
import { MdLocationPin } from 'react-icons/md';


const Footer = () => {
  return (
      <div>
      <div className='bg-[#1E2819] px-6 xl:px-0'>
        <footer className="footer xl:w-[1280px] w-full mx-auto pt-[120px] pb-[100px] text-white justify-center md:justify-between ">
        <div className='mt-[-80px]'>
          <img className='md:w-[89px] w-[105px] md:h-[144px] h-[154px] z-10' src={logo} alt="logo" />
          <p className='lg:w-[353px] w-full lg:text-[18px] md:text-[16px] text-[16px] leading-[24px] font-normal nunitoNormal'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

          <div className='lg:flex md:block flex gap-[15px] lg:mt-16 md:mt-8 mt-6'>
            <img className='md:w-[156px] md:h-[50px] w-[141px] h-[46px]' src={google} alt="google" />
            <img className='md:w-[156px] md:h-[50px] w-[141px] h-[46px]' src={apply} alt="apply" />
          </div>
        </div> 
       <div className='w-full'>
        <span className="xl:text-[28px] lg:text-[24px] md:text-[20px] text-[24px] font-bold alegreyaBold">Pages</span> 
            <a href="/" className="link link-hover mt-[46px] lg:text-[18px] md:text-[16px] text-[18px] font-normal leading-[22px] nunitoNormal">Home</a> 
            <a href="/" className="link link-hover mt-[30px] lg:text-[18px] md:text-[16px] text-[18px] font-normal leading-[22px] nunitoNormal">About WonderVeda</a> 
            <a href="/" className="link link-hover mt-[30px] lg:text-[18px] md:text-[16px] text-[18px] font-normal leading-[22px] nunitoNormal">Shop</a> 
            <a href="/" className="link link-hover mt-[30px] lg:text-[18px] md:text-[16px] text-[18px] font-normal leading-[22px] nunitoNormal">Subscriptions </a>
            <a href="/" className="link link-hover mt-[30px] lg:text-[18px] md:text-[16px] text-[18px] font-normal leading-[22px] nunitoNormal">Contact</a>
      </div> 
      <div className='w-full'>
          <span className="xl:text-[28px] lg:text-[24px] md:text-[20px] text-[24px] font-bold alegreyaBold">Contact</span> 
          <div className='flex mt-[46px] items-center lg:gap-5 gap-2 lg:text-[18px] md:text-[16px] text-[18px]'>
            <span><BsFillTelephoneFill size={25} /></span>
            <p className='montserratNormal'>+91 88888 55555</p>
          </div>
          <div className='flex mt-[30px] items-center lg:gap-5 gap-2 lg:text-[18px] md:text-[16px] text-[18px]'>
            <span><IoMdMail size={25} /></span>
            <p className='montserratNormal'>loremipsum@gmail.com</p>
          </div>
          <div className='flex mt-[30px] items-center lg:gap-5 gap-2 lg:text-[18px] md:text-[16px] text-[18px]'>
            <span className='mt-[-30px]'><MdLocationPin size={25} /></span>
            <p className='w-[240px] leading-[32px] montserratNormal'>Lorem ipsum dolor sit amet Rd. Illinois 85486 </p>
          </div>

      </div> 
      <div className='w-full'>
        <span className="xl::text-[28px] lg:text-[24px] md:text-[20px] text-[24px] font-bold alegreyaBold">Social media</span> 
          <div className='w-full flex md:justify-between  mt-[46px]'>
           <p><a href="/" className='ml-[36px] md:ml-[0px]'> <FaFacebookF size={18} /></a></p>
           <p><a href="/" className='ml-[36px] md:ml-[0px]'> <BsTwitter size={18} /></a></p>
           <p><a href="/" className='ml-[36px] md:ml-[0px]'> <GrLinkedinOption size={18} /></a></p>
           <p><a href="/" className='ml-[36px] md:ml-[0px]'> <FiInstagram size={18} /></a></p>
        </div>
      </div>                                                        
      </footer>
      </div>
      <div className='bg-white px-6 h-[100px] xl:px-0'>
        <div className='xl:w-[1280px] w-full mx-auto h-full flex md:flex-row-reverse flex-col-reverse justify-between items-center px-2 xl:px-0 py-2 md:py-0'>
        <div>
          <p className='text-[15px] leading-[24px] font-normal pt-4 md:pt-0 nunitoNormal text-[#333333] text-center md:text-start'>All Rights Reserved @2023 Wunder Veda</p>
        </div>
          <div className='mt-4 md:mt-0'>
            <img src={payment} alt="payment" />
        </div>
      </div>
      </div>
    </div>

    
    );
};

export default Footer;