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

const Payment = () => {
    return (
        <div className='mt-[102px]'>
            <div className='xl:h-[370px] lg:h-[196px] md:h-[148px] h-[284px] bg-cover md:bg-contain xl:w-full w-full  checkout_banner flex'>
                <h2 className='w-full h-full flex items-center justify-center xl:text-[80px] text-[50px] xl:leading-[90px] leading-[55px] font-bold text-[#1E2819] alegreyaBold'>Checkout</h2>
               
            </div>
              <div className='max-w-screen-xl  xl:h-[800px] lg:h-[600px] md:h-[1100px] h-[1520px] mx-auto'>
                <div className="lg:flex block xl:py-[113px] gap-[32px]">
                    <div>
                        <div className="xl:w-[838px] lg:w-[660px] w-full xl:h-[637px] lg:h-[600px] md:h-[650px] h-[960px]  border-solid border-[1px] border-[#1E2819] bg-[#FBD895]">
                            <div className='flex items-center'>
                                 <h2 className='xl:text-[30px] md:text-[25px] text-[20px] font-[700] ml-[25px] my-4 alegreyaNormal md:text-start text-center'>Personal Information</h2>
                                <span className='xl:ml-[500px] lg:ml-[340px] md:ml-[460px] ml-[70px]'> <FiEdit size={30} /></span>
                           </div>
                            <hr className='border-[#1E2819]' />
                            <div className='flex items-center'>
                                <h2 className='xl:text-[30px] md:text-[25px] text-[20px] font-[700] ml-[25px] my-4 alegreyaNormal md:text-start text-center'>Addresses</h2>
                               <span className='xl:ml-[633px] lg:ml-[450px] md:ml-[570px] ml-[155px]'> <FiEdit size={30} /></span>
                            </div>
                            <hr className='border-[#1E2819]' />
                            
                            <h2 className='xl:text-[30px] text-[25px] font-[700] md:ml-[25px] my-4 alegreyaNormal md:text-start text-center'>Payment Method</h2>
                            <div className='md:flex block px-6 md:px-0'>
                                <div className='xl:w-[372px] lg:w-[280px] md:w-[340px] w-full xl:h-[143px] lg:h-[120px] md:h-[143px] h-[150px] bg-[#FFFFFF] rounded-[10px] md:ml-[25px] px-[26px] xl:pt-[30px] lg:p-3 md:pt-[30px] pt-[20px]'>
                                        <div className='flex justify-between items-center'>
                                            <h2 className='xl:text-[25px] text-[20px] font-bold leading-[30px] alegreyaNormal'>Cash On Delievery</h2>
                                            <input type="radio" name="radio-1" className="radio" />
                                        </div>
                                        <p className='xl:w-[307px] xl:text-[14px] lg:text-[12px] md:text-[14px] text-[14px] font-normal leading-[25px] nunitoNormal xl:mt-[15px] mt-2'>Pay digitally with SMS Pay Link. Cash may not be accepted in COVID restricted areas</p>
                                </div>
                                <div className='xl:w-[372px] lg:w-[280px] md:w-[340px] w-full xl:h-[143px] lg:h-[120px] md:h-[143px] h-[150px] bg-[#FFFFFF] rounded-[10px] md:ml-[25px] px-[26px] xl:pt-[30px] lg:p-3 md:pt-[30px] pt-[20px] mt-[24px] md:mt-0'>
                                            <div className='flex justify-between items-center'>
                                                <h2 className='xl:text-[25px] text-[20px] font-bold leading-[30px] alegreyaNormal'>Cash On Delievery</h2>
                                                <input type="radio" name="radio-1" className="radio" />
                                            </div>
                                            <p className='xl:w-[307px] xl:text-[14px] lg:text-[12px] md:text-[14px] text-[14px] font-normal leading-[25px] nunitoNormal xl:mt-[15px] mt-2'>Pay digitally with SMS Pay Link. Cash may not be accepted in COVID restricted areas</p>
                                    </div>
                            </div> 

                            <div className='md:ml-[25px] mt-[31px] px-6 md:px-0'>
                                <div className='md:flex block items-center gap-4'>
                                    <h2 className='text-[17px] font-normal leading-[20px] nunitoNormal'>Enter Credit Card Number</h2>
                                    <input className='xl:w-[554px] lg:w-[370px] md:w-[495px] w-full h-[44px] rounded-[10px] px-6' type="text" />
                                </div>

                                <div className='md:flex block items-center gap-[36px]'>
                                    <div className='md:flex block items-center gap-3 mt-[26px]'>
                                        <h2 className='text-[17px] font-normal leading-[20px] nunitoNormal'>Expiry Date</h2>
                                        <input className='xl:w-[265px] lg:w-[174px] md:w-[235px] w-full h-[44px] rounded-[10px] px6' type="text" />
                                    </div>
                                    <div className='md:flex block items-center gap-3 mt-[26px]'>
                                        <h2 className='text-[17px] font-normal leading-[20px] nunitoNormal'>Expiry Date</h2>
                                        <input className='xl:w-[265px] lg:w-[174px] md:w-[235px] w-full h-[44px] rounded-[10px] px-6' type="text" />
                                    </div>
                                </div>
                                <div className='mt-[24px] mx-auto md:flex block items-center justify-between px-6 md:px-0 md:mr-[45px]'>
                                    <div className='flex items-center gap-[14px]'>
                                        <input type="checkbox" className='w-[18px] h-[18px]' />
                                        <p className='md:text-[17px] text-[16px] font-normal leading-5 nunitoNormal'>Save my details for future</p>
                                    </div>
                                        <button className='w-[139px] h-[44px] main_btn rounded-[50px] text-white text-[16px] font-bold leading-[44px] alegreyaBold mt-[16px] md:mt-0'>CONTINUE</button>
                                </div>
                            </div>
                            


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

export default Payment;