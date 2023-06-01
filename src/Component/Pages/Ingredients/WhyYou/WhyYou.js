import React from 'react';
import why from '../../../../assets/Ingredients/why/why.png'
import img from '../../../../assets/Ingredients/why/why_icon.png'
import icons from '../../../../assets/Ingredients/why/icons.png'

const WhyYou = () => {
    return (
        <div className='xl:w-[1094px] w-full xl:h-[900px] h-[1300px] mx-auto mb-6 px-6 xl:px-0'>
            <div className='md:flex block justify-between gap-[67px]'>
                <div className=''>
                    <div className='xl:w-[563px] w-[344px]'>
                        <h2 className='text-[45px] font-bold leading-[54px] h-[74px] alegreyaBold text-center xl:text-start'>Why You’ll Love It.</h2>
                        <p className='xl:text-[18px] text-[16px] font-medium leading-[24px] nunitoMedium xl:h-[82px] h-[126px] text-center xl:text-start'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.</p>
                    </div>
                    <div>
                        <img className='w-[340px] h-[390px] mt-[51px] relative md:hidden block ml-[5px]' src={why} alt="why" />
                    </div>

                    <div className='absolute z-10 xl:w-[615px] w-[344px] mt-[45px] xl:mt-[28px]'>
                        <div className='flex items-center gap-[23px]'>
                            <div>
                                <img className='xl:w-[77px] w-[73px] xl:h-[74px] h-[70px]' src={img} alt="img" />
                            </div>
                            <div>
                                <p className='xl:text-[18px] text-[16px] font-medium leading-[24px] nunitoMedium xl:w-[475px] w-[257px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-[23px] mt-[21px]'>
                            <div>
                                <img className='xl:w-[77px] w-[73px] xl:h-[74px] h-[70px]' src={img} alt="img" />
                            </div>
                            <div>
                                <p className='xl:text-[18px] text-[16px] font-medium leading-[24px] nunitoMedium xl:w-[475px] w-[257px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-[23px] mt-[21px]'>
                            <div>
                                <img className='xl:w-[77px] w-[73px] xl:h-[74px] h-[70px]' src={img} alt="img" />
                            </div>
                            <div>
                                <p className='xl:text-[18px] text-[16px] font-medium leading-[24px] nunitoMedium xl:w-[475px] w-[257px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-[23px] mt-[21px]'>
                            <div>
                                <img className='xl:w-[77px] w-[73px] xl:h-[74px] h-[70px]' src={img} alt="img" />
                            </div>
                            <div>
                                <p className='xl:text-[18px] text-[16px] font-medium leading-[24px] nunitoMedium xl:w-[475px] w-[257px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-[23px] mt-[21px]'>
                            <div>
                                <img className='xl:w-[77px] w-[73px] xl:h-[74px] h-[70px]' src={img} alt="img" />
                            </div>
                            <div>
                                <p className='xl:text-[18px] text-[16px] font-medium leading-[24px] nunitoMedium xl:w-[475px] w-[257px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</p>
                            </div>
                        </div>
                    </div>
                    <div className='xl:h-[439px] h-[520px] border-[#1E2819] border-l-[2px] xl:top-[34px] top-[70px] relative xl:left-[40px] left-[30px]'></div>
                </div>
                <div>
                    <img className='w-[619px] mx-auto h-[710px] relative md:block hidden ' src={why} alt="why" />
                </div>
            </div>
            <div className='xl:w-[366px] w-[216px] xl:h-[100px] h-[55px] bg-[#FFFFFF] absolute xl:left-[975px] left-[10px] xl:mt-[-674px] mt-[-880px] rounded-[13px] aboutShadow'>
                    <div className='w-full h-full flex justify-center items-center gap-4'>
                        <div className='bg-[#CED0C8] xl:w-[43px] w-[23px] xl:h-[44px] h-[24px] rounded-full flex justify-start items-center'>
                            <img className=' xl:w-[20px] w-[10px] xl:h-[16px] h-[7px] xl:ml-[13px] ml-[8px]' src={icons} alt="icons" />
                        </div>
                        <p className='xl:text-[18px] text-[12px] font-medium xl:leading-[24px] leading-[13px] xl:w-[230px] w-[144px] nunitoNormal'>Lorem ipsum dolor sit amet, consectetuer nisl ut.</p>
                    </div>
            </div>
            
            <div className='xl:w-[366px] w-[216px] xl:h-[100px] h-[55px] bg-[#FFFFFF] absolute  xl:right-[215px] right-[10px] xl:mt-[-180px] mt-[-610px] rounded-[13px] aboutShadow'>
                    <div className='w-full h-full flex justify-center items-center gap-4'>
                        <div className='bg-[#CED0C8] xl:w-[43px] w-[23px] xl:h-[44px] h-[24px] rounded-full flex justify-start items-center'>
                            <img className='xl:w-[20px] w-[10px] xl:h-[16px] h-[7px] xl:ml-[13px] ml-[8px]' src={icons} alt="icons" />
                        </div>
                        <p className='xl:text-[18px] text-[12px] font-medium xl:leading-[24px] leading-[13px] xl:w-[230px] w-[144px] nunitoNormal'>Lorem ipsum dolor sit amet, consectetuer nisl ut.</p>
                    </div>
                </div>
        </div>
    );
};

export default WhyYou;