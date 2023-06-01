import React from 'react';
import about from '../../../../assets/about/about.png'
import icon from '../../../../assets/about/icon.png'
import left from '../../../../assets/about/left.png'
import right from '../../../../assets/about/right.png'
import icons from '../../../../assets/nutrition/icon.png';
import right_site from '../../../../assets/about/right_site.png';

const About = () => {
    return (
        <div className='w-full xl:mb-[121px] mb-[58px] relative px-6 xl:px-0'>
            <div className='lg:w-[654px] w-full mx-auto text-center'>
                <h2 className='lg:text-[60px] md:text-[50px] text-[50px] leading-[72px] font-bold alegreyaBold'>About Product</h2>
                <p className='xl:text-[18px] text-[16px] leading-[24px] font-normal z-10 nunitoNormal'>Habitasse platea dictumst quisque sagittis purus sit.
                    Dignissim enim sit amet venenatis. In est ante in nibh mauris cursus mattis.</p>
                <h2 className='md:hidden block text-[40px] leading-[40px] font-bold alegreyaBold text-start mt-[28px] w-[344px] h-[129px]'>How this product can be Beneficial for health</h2>
            </div>
            <div className='xl:w-[1094px] w-full mx-auto md:flex block xl:justify-center justify-between items-center mt-[34px] gap-[36px] px-2 xl:px-0'>
                <div>
                    <img className='xl:w-[619px] lg:w-[485px] md:w-[400px] xl:h-[438px] lg:h-[400px] md:h-[385px] relative' src={about} alt="about" />
                </div>
                <div className='xl:w-[366px] w-[172px] xl:h-[100px] h-[61px] bg-[#FFFFFF] absolute top-0 left-0 xl:mt-[191px] mt-[375px] xl:ml-[348px] ml-[11px] rounded-[13px] aboutShadow'>
                    <div className='w-full h-full flex justify-center items-center xl:gap-4 gap-2'>
                        <div className='bg-[#EBEBEB] xl:w-[43px] w-[27px] xl:h-[44px] h-[27px] rounded-full flex justify-start items-center'>
                            <img className=' xl:w-[20px] xl:h-[16px] h-[9px] xl:ml-[13px] ml-[8px]' src={icons} alt="icons" />
                        </div>
                        <p className='xl:text-[18px] text-[12px] font-medium xl:leading-[24px] leading-[13px] xl:w-[230px] w-[117px] nunitoNormal'>Lorem ipsum dolor sit amet, consectetuer nisl ut.</p>
                    </div>
                </div>
                <div>
                    <h2 className='xl:text-[45px] lg:text-[40px] md:text-[30px] text-[25px] font-bold md:leading-[54px] leading-[35px] xl:w-[563px] lg:w-[485px] md:w-[350px] w-full z-10 alegreyaBold md:block hidden'>How this product can be Beneficial for health</h2>
                    <p className='xl:text-[18px] lg:text-[16px] md:text-[14px] text-[16px] font-medium leading-[24px] xl:w-[615px] lg:w-[400px] md:w-[360px] w-full mt-[27px] md:mt-0 nunitoNormal'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        Ut wisi enim ad minim veniam, quis nostrud.</p>  
                    <div className='flex justify-between my-[20px] gap-1 md:gap-0 px-2'>
                        <div>
                            <img className='xl:w-[92px] lg:w-[80px] md:w-[60px] w-[40px] xl:h-[89px] lg:h-[79px] md:h-[60px] h-[40px]' src={icon} alt="icon" /> 
                            <p className='lg:text-[18px] md:text-[14px] text-[12px] font-medium leading-[24px] nunitoNormal'>Lorem ipsum </p>
                        </div>
                        <div>
                            <img className='xl:w-[92px] lg:w-[80px] md:w-[60px] w-[40px] xl:h-[89px] lg:h-[79px] md:h-[60px] h-[40px]' src={icon} alt="icon" /> 
                            <p className='lg:text-[18px] md:text-[14px] text-[12px] font-medium leading-[24px] nunitoNormal'>Lorem ipsum </p>
                        </div>
                        <div>
                            <img className='xl:w-[92px] lg:w-[80px] md:w-[60px] w-[40px] xl:h-[89px] lg:h-[79px] md:h-[60px] h-[40px]' src={icon} alt="icon" /> 
                            <p className='lg:text-[18px] md:text-[14px] text-[12px] font-medium leading-[24px] nunitoNormal'>Lorem ipsum </p>
                        </div>
                        <div>
                            <img className='xl:w-[92px] lg:w-[80px] md:w-[60px] w-[40px] xl:h-[89px] lg:h-[79px] md:h-[60px] h-[40px]' src={icon} alt="icon" /> 
                            <p className='lg:text-[18px] md:text-[14px] text-[12px] font-medium leading-[24px] nunitoNormal'>Lorem ipsum </p>
                        </div> 
                    </div>

                    <button className='main_btn px-2 ld:w-[310px] md:w-[280px] w-full lg:h-[45px] md:h-[40px] h-[45px] text-white rounded-[50px] font-bold 
                    leading-[19px]  lg:text-[14px] text-[14px] alegreyaBold'>LEARN ABOUT OUR KEY INGREDIENTS</button>
                </div>
            </div>
            <div className='hidden md:block'>
                <img className='absolute top-0 right-0 xl:mt-[-170px] mt-[190px] xl:h-[542px] h-[264px]' src={left} alt="left" />
                <img className='absolute mt-[-150px] h-[300px]' src={right} alt="right" />
            </div>
            <div className='md:hidden block'>
                <img className='absolute top-0 right-0  mt-[200px] h-[264px]' src={right_site} alt="right_site" />
            </div>
        </div>
    );
};

export default About;