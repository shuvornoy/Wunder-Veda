import React from 'react';
import icons from '../../../../assets/product/icon.png';
import right from '../../../../assets/product/right.png'
import left from '../../../../assets/Aboutus/leaf2 2.png'

const Lorem = () => {
    return (
        <div className='lg:h-[862px] px-6 xl:px-0'>
            <div className='xl:w-[1280px] w-full mx-auto'>
                <p className='lg:pt-[233px] pt-[50px] xl:text-[35px] lg:text-[25px] md:text-[20px] md:leading-[42px] font-medium alegreyaMedium xl:w-[1027px] mx-auto text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.</p>

                <div className='lg:mt-[52px] mt-[20px] md:flex block justify-center gap-[39px]'>
                    <div className='lg:w-[315px] md:w-[220px]'>
                        <img className='md:ml-[25%] ml-[30%] lg:w-[170px] w-[100px] lg:h-[168px] h-[100px]' src={icons} alt="icons" />
                        <h2 className='text-center lg:text-[30px] md:text-[20px] font-bold alegreyaBold mt-[25px] text-[30px] leading-[36px]'>Lorem Ipsum Dolor </h2>
                        <p className='text-center lg:text-[18px] text-[16px] font-medium leading-[22px] nunitoNormal'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut</p>
                    </div>
                    <div className='lg:w-[315px] md:w-[220px]'>
                        <img className='md:ml-[25%] ml-[30%] lg:w-[170px] w-[100px] lg:h-[168px] h-[100px]' src={icons} alt="icons" />
                        <h2 className='text-center lg:text-[30px] md:text-[20px] font-bold alegreyaBold mt-[25px] text-[30px] leading-[36px]'>Lorem Ipsum Dolor </h2>
                        <p className='text-center lg:text-[18px] text-[16px] font-medium leading-[22px] nunitoNormal'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut</p>
                    </div>
                    <div className='lg:w-[315px] md:w-[220px]'>
                        <img className='md:ml-[25%] ml-[30%] lg:w-[170px] w-[100px] lg:h-[168px] h-[100px]' src={icons} alt="icons" />
                        <h2 className='text-center lg:text-[30px] md:text-[20px] font-bold alegreyaBold mt-[25px] text-[30px] leading-[36px]'>Lorem Ipsum Dolor </h2>
                        <p className='text-center lg:text-[18px] text-[16px] font-medium leading-[22px] nunitoNormal'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut</p>
                    </div>
                </div>
            </div>
            <img className='absolute xl:left-[138px] lg:left-0 lg:block hidden xl:mt-[50px] lg:mt-[50px]' src={left} alt="left" />
            <img className='absolute right-0 xl:w-[250px] lg:w-[200px] xl:h-[550px] lg:h-[300px] md:w-[100px] xl:mt-[-120px] lg:block hidden' src={right} alt="right" />
        </div>
    );
};

export default Lorem;