import React from 'react';
import img from '../../../assets/checkout/cart/check.png'
import { BsShieldFillCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import img1 from '../../../assets/checkout/left/1.png'
import img2 from '../../../assets/checkout/left/2.png'
import img3 from '../../../assets/checkout/left/3.png'
import img4 from '../../../assets/checkout/right/4.png'
import img5 from '../../../assets/checkout/right/5.png'
import img6 from '../../../assets/checkout/right/6.png'
import img7 from '../../../assets/checkout/right/7.png'
import { AiOutlineLeft } from 'react-icons/ai';
import './OrderDetails.css'


const OrderDetails = () => {
    return (
        <div>
            <div className='xl:h-[370px] lg:h-[196px] md:h-[148px] h-[284px] bg-cover md:bg-contain xl:w-full w-full  checkout_banner'>
                <h2 className='w-full h-full flex items-center justify-center xl:text-[80px] text-[50px] xl:leading-[90px] leading-[55px] font-bold text-[#1E2819] alegreyaBold'>Order Details</h2>
            </div>
              <div className='max-w-screen-xl lg:h-[600px] md:h-[800px] h-[1270px] mx-auto'>
                <div className="lg:flex block xl:py-[113px] gap-[32px]">
                    <div>
                        <div className="xl:w-[838px] lg:w-[660px] w-full lg:h-[308px] md:h-[300px] h-[710px]  border-solid border-[1px] border-[#1E2819] order_details">
                        <h2 className='text-[30px] font-[700] ml-[25px] my-4 alegreyaNormal md:text-start text-center'>Edit Order/Order Details</h2>
                        <hr className='border-[#1E2819]' />
                        <div className="md:flex block">
                        <div className="md:flex block">
                        <div className="mt-3">
                            <img src={img} className='xl:w-full lg:w-[285px] md:w-[192px] w-[400px] md:h-[189px] h-[400px]' alt="img" />
                        </div>
                        <div className="md:mt-10 mt-0">
                        <p className="md:w-[178px] w-full text-[#000] text-[25px] font-[700] leading-[25px] alegreyaNormal px-6 md:px-0 md:text-start text-center">Product Name Lorem Ipsum Dolor Sit Amit</p>
                        <div className="flex justify-between mt-4 px-6 md:px-0">
                            <h1 className="font-[800] text-[24px] w-[86px]">$15.50</h1>
                            <s className="font-[700] text-[#787A80] text-[13px] mt-3 w-[44px] mx-5">$31.00</s>
                            <div className="bg-[#E70613] font-[700] text-[11px] text-[#fff] h-[18px] px-[6px] py-[1px] mt-3 rounded-[3px]">-50%</div>
                        </div>
                        </div>
                    </div>
                    <div className="flex md:justify-around justify-between mt-10 md:ml-10 xl:w-[409px] lg:w-[300px] md:w-[400px] px-6 md:px-0">
                            <input className='w-20 h-10' type="number" />
                            <p className='font-[700] text-[16px]'>$361.00</p>
                            <p><RiDeleteBin6Line size={20} /></p>
                    </div>
                    </div>
                        </div>
                        <h2 className='my-[20px] text-[16px] font-bold leading-[19px] alegreyaBold flex items-center px-6 xl:px-0'> <AiOutlineLeft size={14} /> <span>Continue shopping</span> </h2>
                    </div>
                        
              
                    <div className='xl:w-[409px] w-full h-[244px] bg-[#CED0C8] border-[1px] border-[#1E2819]'>
                    <div className='flex px-[24px] justify-between items-center mt-[18px]'>
                        <div>
                            <p className='w-[112px] h-[58px] text-[17px] font-normal nunitoNormal'>1 Item Shipping</p>
                        </div>
                        <div>
                            <p className='xl:w-[60px] lg:w-[112px] md-[100px] w-[60px] h-[58px] text-[17px] font-normal nunitoNormal'>$361.00 $7.00</p>
                        </div>
                    </div>
                    <hr className='xl:pl-0 mt-[4px] border-[1px] border-[#1E2819]' />
                    <div className='flex px-[24px] justify-between items-center mt-[17px]'>
                        <div>
                            <p className='xl:w-[122px] w-[112px] h-[58px] text-[17px] font-normal nunitoNormal'>Total (Tax excl.) Taxes</p>
                        </div>
                        <div>
                            <p className='xl:w-[60px] lg:w-[112px] md-[100px] w-[60px] h-[58px] text-[17px] font-normal nunitoNormal'>$361.00 $7.00</p>
                        </div>
                    </div>
                    <hr className='xl:pl-0 mt-[4px] border-[1px] border-[#1E2819]' />
                        <Link to='/address'>
                            <div className='px-6 md:px-0 xl:mt-0 mt-[18px] xl:block flex justify-center'>
                                <button className='text-[16px] font-bold leading-[44px] alegreyaBold md:w-[202px] w-full md:h-[44px] rounded-[50px] xl:ml-[103px] xl:mt-[19px] main_btn text-white'>CONTINUE NOW</button>
                            </div>
                        </Link>

                    <div className='xl:mt-[60px] mt-[80px] '>
                        <div className='text-[#1E2819] flex gap-[15px] items-start px-6 xl:px-0'>
                            <span className='xl:ml-[60px]' ><BsShieldFillCheck size={25} /></span>
                            <p className='xl:w-[299px] xl:h-[58px] text[16px] leading-[20px] font-normal nunitoNormal'>Security Poilcy: Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet  </p>
                        </div>
                        <hr className='xl:w-[381px] w-full xl:ml-[42px] border-[1px] border-[#E5E8ED] mt-3' />

                        <div className='text-[#1E2819] flex gap-[15px] items-start mt-[18px] px-6 xl:px-0'>
                            <span className='xl:ml-[60px]' ><BsShieldFillCheck size={25} /></span>
                            <p className='xl:w-[299px] xl:h-[58px] text[16px] leading-[20px] font-normal nunitoNormal'>Security Poilcy: Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet  </p>
                        </div>
                        <hr className='xl:w-[381px] w-full xl:ml-[42px] border-[1px] border-[#E5E8ED] mt-3' />
                        <div className='text-[#1E2819] flex gap-[15px] items-start mt-[18px] px-6 xl:px-0'>
                            <span className='xl:ml-[60px]' ><BsShieldFillCheck size={25} /></span>
                            <p className='xl:w-[299px] xl:h-[58px] text[16px] leading-[20px] font-normal nunitoNormal'>Security Poilcy: Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet  </p>
                        </div>
                </div>
                </div>
            </div>
            </div>
            <div className='xl:block hidden'>
                <img className='absolute top-[704px]' src={img1} alt="img1" />
                <img className='absolute top-[870px] left-[43px]' src={img2} alt="img2" />
                <img className='absolute top-[950px] left-[57px]' src={img3} alt="img3" />
                <img className='absolute top-[605px] left-[1690px]' src={img4} alt="img4" />
                <img className='absolute top-[605px] left-[1690px]' src={img4} alt="img4" />
                <img className='absolute top-[749px] left-[1700px]' src={img5} alt="img5" />
                <img className='absolute top-[749px] left-[1814px]' src={img6} alt="img6" />
                <img className='absolute top-[787px] right-0' src={img7} alt="img7" />
            </div>
        </div>
    );
};

export default OrderDetails;