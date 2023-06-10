import React from 'react';
import './Contact.css'
import man from '../../../assets/contact/PngItem.png';
import han from '../../../assets/contact/han.png';
import img1 from '../../../assets/checkout/left/1.png'
import img2 from '../../../assets/checkout/left/2.png'
import img3 from '../../../assets/checkout/left/3.png'
import img4 from '../../../assets/checkout/right/4.png'
import img5 from '../../../assets/checkout/right/5.png'
import img6 from '../../../assets/checkout/right/6.png'
import img7 from '../../../assets/checkout/right/7.png'

import { CiLocationOn } from 'react-icons/ci';
import { FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
             <div className='xl:h-[370px] lg:h-[196px] md:h-[148px] h-[284px] bg-cover md:bg-contain xl:w-full w-full contact flex'>
                <h2 className='w-full h-full flex items-center justify-center xl:text-[80px] text-[50px] xl:leading-[90px] leading-[55px] font-bold text-[#1E2819] alegreyaBold text-center'>Contact Us</h2>
            </div>

            {/*======== General Queries ==============*/}
            <div className='xl:w-[1280px] w-full mx-auto md:flex px-6 block xl:px-0'>
                <div className='lg:w-[792px] md:w-[450px] lg:mt-[155px] mt-[100px]'>
                    <div className='flex justify-between items-center'>
                        <h2 className='xl:text-[32px] lg:text-[20px] md:text-[18px] text-[20px] md:leading-[39px] font-bold alegreyaBold'>General Queries </h2>
                        <p className='xl:text-[32px] lg:text-[20px] md:text-[18px] text-[20px] md:leading-[39px] font-medium alegreyaMedium text-[#1e281940]'>Customer Support</p>
                        <p className='xl:text-[32px] lg:text-[20px] md:text-[18px] text-[20px] md:leading-[39px] font-medium alegreyaMedium text-[#1e281940]'>For Bulk Order</p>
                    </div>    
                    <hr className='xl:my-[35px] lg:my-[25px] my-[20px] bg-[#1E2819]' />
                    <p className='lg:text-[19px] md:text-[16px] leading-[26px] font-medium nunitoMedium'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    <div className='flex items-center gap-3 xl:mt-[37px] lg:mt-[20px] mt-[10px]'>
                        <sapn><CiLocationOn size={24} /></sapn>
                        <p className='text-[19px] leading-[26px] font-medium nunitoMedium'>Lorem ipsum dolor sit amet, consectetuer </p>
                    </div>
                    <div className='flex items-center gap-3 xl:mt-[37px] lg:mt-[20px] mt-[10px]'>
                        <sapn><CiLocationOn size={24} /></sapn>
                        <p className='text-[19px] leading-[26px] font-medium nunitoMedium'>Loremipsum@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-3 xl:mt-[37px] lg:mt-[20px] mt-[10px]'>
                        <sapn><CiLocationOn size={24} /></sapn>
                        <p className='text-[19px] leading-[26px] font-medium nunitoMedium'>111 222 333 4444</p>
                    </div>
                    
                </div>
                <div className='mt-[60px]'>
                    <img className='xl:h-[518px] lg:h-[400px] md:h-[300px]' src={man} alt="man" />
                </div>
            </div>

            <div className='h-[226px] bg-[#1E2819] lg:mt-[111px] flex items-center'>
                <div className='xl:w-[1280px] w-full px-6 xl:px-0 mx-auto md:flex block justify-between'>
                    <div>
                        <h2 className='md:text-[45px] text-[25px] font-bold leading-[54px] alegreyaBold text-white'>Follow Us on Social Media</h2>
                        <p className='xl:text-[22px] text-[18px] leading-[24px] font-medium nunitoMedium text-white mt-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    </div>
                    <div className='flex items-center gap-7 mt-[16px] md:mt-0'>
                        <button className='w-[44px] h-[44px] mx-auto rounded-full main_btn flex justify-start items-center'><sapn className="ml-[10px]"><FaTwitter size={24} /></sapn></button>
                        <button className='w-[44px] h-[44px] mx-auto rounded-full main_btn flex justify-start items-center'><sapn className="ml-[10px]"><FaLinkedinIn size={24} /></sapn></button>
                        <button className='w-[44px] h-[44px] mx-auto rounded-full main_btn flex justify-start items-center'><sapn className="ml-[10px]"><FaInstagram size={24} /></sapn></button>
                    </div>
                </div>
            </div>

            { /*========== Get in Touch =============*/}

            <div className='xl:w-[1280px] w-full mx-auto'>
                <div className='flex items-center lg:mt-[97px] mt-[50px] px-6 xl:px-0'>
                    <h2 className='lg:text-[60px] text-[24px] lg:leading-[78px] font-bold alegreyaBold'>Love to hear from you, Get in Touch</h2>
                    <img src={han} alt="han" />
                </div>
                <form>
                    <div className='xl:w-[1292px] w-full md:h-[538px] h-[700px] bg-[#FBD895] border-[1px] border-[#1E2819] mt-[44px] py-[71px] lg:pl-[50px] '>
                        <div className='md:flex items-center gap-[45px] px-6 lg:px-0'>
                            <div className='md:flex block items-center md:gap-[38px] gap-[31px]'>
                                <h2 className='text-[17px] font-normal leading-5 nunitoNormal'>First Name</h2>
                                <input className='xl:w-[425px] lg:w-[300px] md:w-[200px] w-full h-[44px] rounded-[12px]' type="text" />
                            </div>
                            <div className='md:flex block items-center gap-[31px] mt-[16px] md:mt-0'>
                                <h2 className='text-[17px] font-normal leading-5 nunitoNormal'>Second Name</h2>
                                <input className='xl:w-[425px] lg:w-[300px] md:w-[200px] w-full h-[44px] rounded-[12px]' type="text" />
                            </div>
                        </div>

                        <div className='md:flex block items-center gap-[10px] mt-[24px] px-6 lg:px-0'>
                                <h2 className='text-[17px] font-normal leading-5 nunitoNormal'>Email Address</h2>
                                <input className='xl:w-[1030px] lg:w-[780px] md:w-[580px] w-full h-[44px] rounded-[12px]' type="text" />
                        </div>

                        <div className='md:flex block items-center gap-[14px] mt-[24px] px-6 lg:px-0'>
                                <h2 className='text-[17px] font-normal leading-5 nunitoNormal'>Your Message</h2>
                                <input className='xl:w-[1030px] lg:w-[780px] md:w-[580px] w-full h-[188px] rounded-[12px]' type="text" />
                        </div>

                        <div className='mt-[24px] xl:w-[1030px] lg:w-[780px] md:w-[580px] w-full mx-auto md:flex block items-center justify-between lg:ml-[130px] md:ml-[140px] px-6 md:px-0'>
                            <div className='flex items-center gap-[14px]'>
                                <input type="checkbox" className='w-[18px] h-[18px]' />
                                <p className='text-[17px] font-normal leading-5 nunitoNormal'>Save my details for future</p>
                            </div>
                            <button className='w-[139px] h-[44px] main_btn rounded-[50px] text-white text-[16px] font-bold leading-[44px] alegreyaBold mt-[16px] md:mt-0'>CONTINUE</button>
                        </div>

                    </div>
                </form>


            </div>
            { /*========== Looking =============*/}
            <div className='h-[543px] looking mt-[148px]'>
                <div className='xl:w-[1280px] w-full mx-auto lg:pt-[70px] pt-[50px] px-6 xl:px-0'>
                    <h2 className='xl:text-[60px] lg:text-[50px] md:text-[40px] text-[20px] lg:leading-[72px] font-bold alegreyaBold text-center '>Are you a Researcher & Looking <br /> for Collaboration?</h2>
                    <h3 className='xl:text-[35px] lg:text-[30px] md:text-[25px] text-[18px] font-medium lg:leading-[42px] nunitoMedium xl:w-[1070px] w-full mx-auto text-center py-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet</h3>
                    <p className='md:text-[18px] text-[14px] font-medium leading-6 nunitoMedium xl:w-[1078px] w-full mx-auto text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    <div className='mt-[33px] w-full mx-auto flex justify-center'>
                        <button className='w-[217px] mx-auto h-[44px] main_btn rounded-[50px] text-[16px] font-bold alegreyaBold text-white'>CALL US +91 589 2649</button></div>
                </div>
            </div>
             <div className='xl:block hidden'>
                <img className='absolute top-[704px]' src={img1} alt="img1" />
                <img className='absolute top-[870px] left-[43px]' src={img2} alt="img2" />
                <img className='absolute top-[950px] left-[57px]' src={img3} alt="img3" />
                <img className='absolute top-[1600px] left-[1690px]' src={img4} alt="img4" />
                <img className='absolute top-[1750px] left-[1700px]' src={img5} alt="img5" />
                <img className='absolute top-[1750px] left-[1814px]' src={img6} alt="img6" />
                <img className='absolute top-[1790px] right-0' src={img7} alt="img7" />
            </div>

        </div>
    );
};

export default Contact;