import React from 'react';
import './Address.css'
import { BsShieldFillCheck } from 'react-icons/bs';

const Address = () => {
    return (
        <div>
            <div className='xl:h-[370px] xl:w-full w-[390px] h-[284px] address_banner'>
            <h2 className='w-full h-full flex items-center justify-center xl:text-[80px] text-[50px] xl:leading-[90px] leading-[55px] font-bold text-[#1E2819] alegreyaBold'>Checkout</h2>
            </div>
            <div className='w-[1280px] mx-auto py-[113px] flex xl:gap-[32px]'>
                <div className='w-[838px] h-[725px] border bg_address'>
                    <h2 className='pl-[25px] xl:w-[634px] xl:h-[58px] text-[30px] font-bold xl:leading-[90px] alegreyaBold'>Personal Information</h2>
                    <hr className='xl:pl-0 mt-[23px]' />
                    <div className='mt-[24px]'>
                        <div className='flex items-center xl:gap-[53px]'>
                            <p className='text-[17px] font-normal leading-[20px] xl:pl-[69px] nunitoNormal'>First Name</p>
                            <input className='xl:w-[555px] xl:h-[44px] bg-[#FFFF] border-[1px] rounded-[50px] px-4' type="text" />
                        </div> 
                        <div className='flex items-center xl:gap-[53px] xl:mt-[24px]'>
                            <p className='text-[17px] font-normal leading-[20px] xl:pl-[69px] nunitoNormal'>Last Name</p>
                            <input className='xl:w-[555px] xl:h-[44px] bg-[#FFFF] border-[1px] rounded-[50px] px-4' type="text" />
                        </div> 
                        <div className='flex items-center xl:gap-[24px] xl:mt-[24px]'>
                            <p className='text-[17px] font-normal leading-[20px] xl:pl-[69px] nunitoNormal'>Email Address</p>
                            <input className='xl:w-[555px] xl:h-[44px] bg-[#FFFF] border-[1px] rounded-[50px] px-4' type="email" />
                        </div> 
                        <div className='flex items-center xl:gap-[24px] xl:mt-[24px]'>
                            <p className='text-[17px] font-normal leading-[20px] xl:pl-[69px] nunitoNormal'>Phone Number</p>
                            <input className='xl:w-[555px] xl:h-[44px] bg-[#FFFF] border-[1px] rounded-[50px] px-4' type="text" />
                        </div> 
                        {/*=======Check Box==========*/}
                        <div className='xl:mt-[37px] xl:ml-[223px]'>
                            <div className='flex gap-[14px] items-center'>
                                <input type="checkbox" className="w-[18px] h-[18px] bg-[#D9D9D9] border-[1px] border-[#1E2819]" />
                                <p className='text-[17px] font-normal leading-[20px] nunitoNormal'>Receive offers from our partners</p>
                            </div>
                            <div className='flex gap-[14px] items-center xl:mt-[21px]'>
                                <input type="checkbox" className="w-[18px] h-[18px] bg-[#D9D9D9] border-[1px] border-[#1E2819]" />
                                <p className='text-[17px] font-normal leading-[20px] nunitoNormal'>Sign up for our newsletter</p>
                            </div>
                        </div>
                        <button className='text-[16px] font-bold leading-[44px] alegreyaBold xl:w-[202px] xl:h-[44px] rounded-[50px] main_btn xl:mt-[31px] xl:ml-[616px]'>CONTINUE</button>
                    </div>
                    <hr className='mt-[37px] border-[1px] border-[#CED0C8]' />
                    <h2 className='pl-[25px] xl:w-[634px] xl:h-[58px] text-[30px] font-bold xl:leading-[90px] alegreyaBold'>Addresses</h2>
                    <hr className='xl:pl-0 mt-[22px] border-[1px] border-[#CED0C8]' />
                     <h2 className='pl-[25px] xl:w-[634px] xl:h-[58px] text-[30px] font-bold xl:leading-[70px] alegreyaBold'>Payment Method</h2>
                </div>

                <div className='xl:w-[409px] h-[244px] bg-[#CED0C8] border-[1px] border-[#1E2819]'>
                    <div className='flex px-[24px] justify-between items-center mt-[18px]'>
                        <div>
                            <p className='w-[112px] h-[58px] text-[17px] font-normal nunitoNormal'>1 Item Shipping</p>
                        </div>
                        <div>
                            <p className='w-[112px] h-[58px] text-[17px] font-normal nunitoNormal'>$361.00 $7.00</p>
                        </div>
                    </div>
                    <hr className='xl:pl-0 mt-[4px] border-[1px] border-[#1E2819]' />
                    <div className='flex px-[24px] justify-between items-center mt-[17px]'>
                        <div>
                            <p className='w-[112px] h-[58px] text-[17px] font-normal nunitoNormal'>1 Item Shipping</p>
                        </div>
                        <div>
                            <p className='w-[112px] h-[58px] text-[17px] font-normal nunitoNormal'>$361.00 $7.00</p>
                        </div>
                    </div>
                    <hr className='xl:pl-0 mt-[4px] border-[1px] border-[#1E2819]' />
                    <button className='text-[16px] font-bold leading-[44px] alegreyaBold xl:w-[202px] xl:h-[44px] rounded-[50px] xl:ml-[103px] xl:mt-[19px] main_btn'>CONTINUE NOW</button>

                    <div className='xl:mt-[60px]'>
                        <div className='text-[#1E2819] flex gap-[15px] items-start'>
                            <span className='xl:ml-[60px]' ><BsShieldFillCheck size={25} /></span>
                            <p className='xl:w-[299px] xl:h-[58px] text[16px] leading-[20px] font-normal nunitoNormal'>Security Poilcy: Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet  </p>
                        </div>
                        <hr className='xl:w-[381px] xl:ml-[42px] border-[1px] border-[#E5E8ED]' />

                        <div className='text-[#1E2819] flex gap-[15px] items-start mt-[18px]'>
                            <span className='xl:ml-[60px]' ><BsShieldFillCheck size={25} /></span>
                            <p className='xl:w-[299px] xl:h-[58px] text[16px] leading-[20px] font-normal nunitoNormal'>Security Poilcy: Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet  </p>
                        </div>
                        <hr className='xl:w-[381px] xl:ml-[42px] border-[1px] border-[#E5E8ED]' />
                        <div className='text-[#1E2819] flex gap-[15px] items-start mt-[18px]'>
                            <span className='xl:ml-[60px]' ><BsShieldFillCheck size={25} /></span>
                            <p className='xl:w-[299px] xl:h-[58px] text[16px] leading-[20px] font-normal nunitoNormal'>Security Poilcy: Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet  </p>
                        </div>
                        <hr className='xl:w-[381px] xl:ml-[42px] border-[1px] border-[#E5E8ED]' />
                </div>
                </div>
                 
                
            </div>
        </div>
    );
};

export default Address;