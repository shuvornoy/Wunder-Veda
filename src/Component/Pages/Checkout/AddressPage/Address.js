import React from 'react';
import img from '../../../../assets/checkout/cart/check.png'
import { BsShieldFillCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import img1 from '../../../../assets/checkout/left/1.png'
import img2 from '../../../../assets/checkout/left/2.png'
import img3 from '../../../../assets/checkout/left/3.png'
import img4 from '../../../../assets/checkout/right/4.png'
import img5 from '../../../../assets/checkout/right/5.png'
import img6 from '../../../../assets/checkout/right/6.png'
import img7 from '../../../../assets/checkout/right/7.png'
import { AiOutlineLeft } from 'react-icons/ai';

const Address = () => {
    return (
        <div className='mt-[102px]'>
            <div className='xl:h-[370px] lg:h-[196px] md:h-[148px] h-[284px] bg-cover md:bg-contain xl:w-full w-full  checkout_banner'>
                <h2 className='w-full h-full flex items-center justify-center xl:text-[80px] text-[50px] xl:leading-[90px] leading-[55px] font-bold text-[#1E2819] alegreyaBold'>Checkout</h2>
            </div>
              <div className='max-w-screen-xl xl:h-[1000px] lg:h-[750px] md:h-[1200px] h-[1400px] mx-auto'>
                <div className="lg:flex block xl:py-[113px] gap-[32px]">
                    <div>
                        <div className="xl:w-[838px] lg:w-[660px] w-full xl:h-[725px] lg:h-[720px] md:h-[720px] h-[870px]  border-solid border-[1px] border-[#1E2819] bg-[#FBD895]">
                            <h2 className='text-[30px] font-[700] ml-[25px] my-4 alegreyaNormal md:text-start text-center'>Personal Information</h2>
                            <hr className='border-[#1E2819]' />
                    <form className='mt-[27px] px-6 md:px-0'>
                        <div class="lg:flex md:flex block gap-[24px] justify-center items-center">
                            <label class="block text-gray-700 text-[18px] font-[400] mb-2 nunitoNormal w-[127px]" for="name">First Name</label>
                            <input class="border-none rounded-[10px] bg-white xl:w-[555px] lg:w-[408px] md:w-[408px] w-full h-[44px] py-2 px-[36px]" type="text" id="name" placeholder="First Name" />
                        
                        </div>
                        <div class="mt-6 lg:flex md:flex block gap-[24px] justify-center items-center">
                            <label class="block text-gray-700 text-[18px] font-[400] mb-2 nunitoNormal w-[127px]" for="name">Last Name</label>
                            <input class="border-none rounded-[10px] bg-white xl:w-[555px] lg:w-[408px] md:w-[408px] w-full h-[44px] py-2 px-[36px]" type="text" id="name" placeholder="Last Name" />
                        
                        </div>
                        <div class="mt-6 lg:flex md:flex block gap-[24px] justify-center items-center">
                            <label class="block text-gray-700 text-[18px] font-[400] mb-2 nunitoNormal w-[127px]" for="email">Email Address</label>
                            <input class="border-none rounded-[10px] bg-white xl:w-[555px] lg:w-[408px] md:w-[408px] w-full h-[44px] py-2 px-[36px]" type="email" id="email" placeholder="Email Address" />
                        </div>
                        <div class="mt-6 lg:flex md:flex block gap-[24px] justify-center items-center">
                            <label class="block text-gray-700 text-[18px] font-[400] mb-2 nunitoNormal w-[127px]" for="number">Phone Number</label>
                            <input class="border-none rounded-[10px] bg-white xl:w-[555px] lg:w-[408px] md:w-[408px] w-full h-[44px] py-2 px-[36px]" type="number" id="number" placeholder="Phone Number" />
                        </div>
                            <div className='mt-[37px] xl:ml-[223px] lg:ml-[200px] md:ml-[260px]'>
                                <div className='flex gap-[14px] items-center'>
                                    <input type="checkbox" className="w-[18px] h-[18px] bg-[#D9D9D9] border-[1px] border-[#1E2819]" />
                                    <p className='text-[17px] font-normal leading-[20px] nunitoNormal'>Receive offers from our partners</p>
                                </div>
                            <div className='flex gap-[14px] items-center mt-[21px]'>
                                <input type="checkbox" className="w-[18px] h-[18px] bg-[#D9D9D9] border-[1px] border-[#1E2819]" />
                                <p className='text-[17px] font-normal leading-[20px] nunitoNormal'>Sign up for our newsletter</p>
                            </div>
                                <button className='w-[139px] h-[44px] rounded-[50px] text-white text-[16px] font-bold main_btn alegreyaBold mt-[31px] xl:ml-[400px] lg:ml-[275px] md:ml-[260px]'> CONTINUE</button>
                        </div>

                            </form>
                            <hr className='border-[#1E2819] lg:mt-[37px] mt-[37px]' />
                             <h2 className='text-[30px] font-[700] ml-[25px] my-4 alegreyaNormal md:text-start text-center'>Addresses</h2>
                            <hr className='border-[#1E2819]' />
                            <h2 className='text-[30px] font-[700] ml-[25px] my-4 alegreyaNormal md:text-start text-center'>Payment Method</h2>


                        </div> 
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

export default Address;