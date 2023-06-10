import React from 'react';
import vision from '../../../../assets/Aboutus/vision.png'
import vision1 from '../../../../assets/Aboutus/vision1.png'
import left from '../../../../assets/Aboutus/left.png'

const Vision = () => {
    return (
        <div className='md:h-[923px] h-[1400px] bg-[#1E2819] px-6 xl:px-0'>
            <div className='xl:w-[1280px] mx-auto lg:pt-[110px] pt-[50px] md:flex block justify-center items-center'>
                <div className='xl:w-[827px] lg:w-[710px] md:w-[554px] w-full lg:h-[282px] md:h-[200px] h-[400px] bg-[#FFFFFF] shadow-[#1E2819] z-10 lg:py-[43px] py-[10px] lg:px-[80px] px-[20px]'>
                    <h2 className='lg:text-[60px] md:text-[40px] text-[40px] font-bold alegreyaBold'>Our Vision</h2>
                    <p className='lg:text-[18px] text-[16px] font-medium leading-[24px] nunitoMedium'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip. consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidun</p>
                </div>
                <img className='lg:w-[321px] md:w-[200px] w-full lg:h-[320px] h-[220px]  lg:ml-[-60px] md:ml-[-40px]' src={vision} alt="vision" />
            </div>

            <div className='xl:w-[1280px] mx-auto lg:pt-[90px] pt-[50px] md:flex block justify-center items-center'>
                <img className='lg:w-[306px] md:w-[200px] w-full lg:h-[306px] h-[220px]' src={vision1} alt="vision1" />
                <div className='xl:w-[827px] lg:w-[710px] md:w-[554px] w-full lg:h-[282px] md:h-[200px] h-[400px] bg-[#FFFFFF] shadow-[#1E2819] z-10 lg:ml-[-38px] md:ml-[-26px] lg:py-[43px] py-[10px] lg:px-[80px] px-[20px]'>
                    <h2 className='lg:text-[60px] md:text-[40px] text-[40px] font-bold alegreyaBold'>Our Vision</h2>
                    <p className='lg:text-[18px] text-[16px] font-medium leading-[24px] nunitoMedium'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip. consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidun</p>
                </div>
                
            </div>
            <img className='absolute xl:h-[550px] lg:h-[300px] left-0 xl:mt-[-60px] mt-0 lg:block hidden' src={left} alt="left" />
        </div>
    );
};

export default Vision;