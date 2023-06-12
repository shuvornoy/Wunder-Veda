import React from 'react';
import { BsShieldFillCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import img1 from '../../../../assets/checkout/left/1.png'
import img2 from '../../../../assets/checkout/left/2.png'
import img3 from '../../../../assets/checkout/left/3.png'
import img4 from '../../../../assets/checkout/right/4.png'
import img5 from '../../../../assets/checkout/right/5.png'
import img6 from '../../../../assets/checkout/right/6.png'
import img7 from '../../../../assets/checkout/right/7.png'
import { FiEdit } from 'react-icons/fi';

const AddressSelect = () => {
    return (
        <div>
            <div className='xl:h-[370px] lg:h-[196px] md:h-[148px] h-[284px] bg-cover md:bg-contain xl:w-full w-full  checkout_banner flex'>
                <h2 className='w-full h-full flex items-center justify-center xl:text-[80px] text-[50px] xl:leading-[90px] leading-[55px] font-bold text-[#1E2819] alegreyaBold'>Checkout</h2>
               
            </div>
              <div className='xl:max-w-screen-xl w-full  xl:h-[700px] lg:h-[582px] md:h-[980px] h-[1100px] mx-auto'>
                <div className="lg:flex block xl:py-[113px] gap-[32px]">
                    <div>
                        <div className="xl:w-[838px] lg:w-[660px] w-full xl:h-[525px] lg:h-[540px] md:h-[530px] h-[510px]  border-solid border-[1px] border-[#1E2819] bg-[#FBD895]">
                            <div className='flex items-center'>
                                 <h2 className='md:text-[30px] text-[20px] font-[700] ml-[25px] my-4 alegreyaNormal md:text-start text-center'>Personal Information</h2>
                                <span className='xl:ml-[470px] lg:ml-[300px] md:ml-[400px] ml-[60px]'> <FiEdit size={30} /></span>
                           </div>
                            <hr className='border-[#1E2819]' />
                            <div className='flex items-center'>
                                <h2 className='md:text-[30px] text-[20px] font-[700] ml-[25px] my-4 alegreyaNormal md:text-start text-center'>Addresses</h2>
                                <h3 className='xl:ml-[510px] lg:ml-[325px] md:ml-[450px] ml-[70px] lg:w-[170px] text-[16px] font-bold alegreyaBold'>ADD NEW ADDRESS</h3>
                            </div>
                            <div className='md:w-[335px] w-full h-[185px] bg-[#FFFFFF] rounded-[10px] md:ml-[65px] px-[26px] pt-[30px]'>
                                <div className='flex justify-between items-center'>
                                    <h2 className='text-[25px] font-bold leading-[30px] alegreyaNormal'>Jack James Home</h2>
                                    <input type="radio" name="radio-1" className="radio" />
                                </div>
                                <div className='w-[237px] flex gap-4'>
                                    <span className='w-[10px] h-[6px] rounded-full bg-black mt-[10px]'></span>
                                    <p className='text-[14px] font-normal leading-[25px] nunitoNormal'>Address : 8424 James Lane South San Francisco, CA 94080</p>
                                </div>
                                <div className='w-[237px] flex gap-4'>
                                    <span className='w-[6px] h-[6px] rounded-full bg-black mt-[10px]'></span>
                                    <p className='text-[14px] font-normal leading-[25px] nunitoNormal'>Pin Code : +380</p>
                                </div>
                                <div className='w-[237px] flex gap-4'>
                                    <span className='w-[6px] h-[6px] rounded-full bg-black mt-[10px]'></span>
                                    <p className='text-[14px] font-normal leading-[25px] nunitoNormal'>Phone: +91 24687 9651531</p>
                                </div>
                            </div>
                            <div className='mt-[31px] flex justify-end mr-[40px]'>
                                <button className='w-[139px] h-[44px] main_btn rounded-[50px] text-white text-[16px] font-bold leading-[44px] alegreyaBold mt-[16px] md:mt-0'>CONTINUE</button>
                             </div>
                             
                            <hr className='border-[#1E2819] mt-[37px]' />
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

export default AddressSelect;