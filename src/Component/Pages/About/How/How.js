import React from 'react';
import './How.css'
import icons from '../../../../assets/Aboutus/icon.png'

const How = () => {
    return (
        <div className='lg:h-[546px] md:h-[600px] h-[1200px] bg-[#CED0C8] px-6 xl:px-0'>
            <div className='lg:py-[90px] xl:w-[1280px] mx-auto '>
                <h2 className='text-center lg:text-[60px] md:text-[50px] text-[40px] font-bold leading-[72px] alegreyaBold'>How We Work</h2>
                <div className='grid lg:grid-cols-4 md:grid-cols-2  gap-[30px] justify-between items-center lg:mt-[60px]'>
                    <div className='xl:w-[300px] lg:w-[240px] md:w-[298px] w-full'>
                        <img className='w-[95px] h-[94px] mx-auto  hover:bg-sky-700' src={icons} alt="icons" />
                        <h2 className='text-[29px] font-bold leading-[27px] alegreyaBold mt-[18px] text-center'>Lorem Ipsum Dolo</h2>
                        <p className='text-[16px] font-normal nunitoNormal mt-[14px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. In est ante in nibh mauris cursus mattis.</p>
                    </div>
                    <div className='xl:w-[300px] lg:w-[240px] md:w-[298px] w-full'>
                        <img className='w-[95px] h-[94px] mx-auto  hover:bg-sky-700' src={icons} alt="icons" />
                        <h2 className='text-[29px] font-bold leading-[27px] alegreyaBold mt-[18px] text-center'>Lorem Ipsum Dolo</h2>
                        <p className='text-[16px] font-normal nunitoNormal mt-[14px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. In est ante in nibh mauris cursus mattis.</p>
                    </div>
                    <div className='xl:w-[300px] lg:w-[240px] md:w-[298px] w-full'>
                        <img className='w-[95px] h-[94px] mx-auto  hover:bg-sky-700' src={icons} alt="icons" />
                        <h2 className='text-[29px] font-bold leading-[27px] alegreyaBold mt-[18px] text-center'>Lorem Ipsum Dolo</h2>
                        <p className='text-[16px] font-normal nunitoNormal mt-[14px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. In est ante in nibh mauris cursus mattis.</p>
                    </div>
                    <div className='xl:w-[300px] lg:w-[240px] md:w-[298px] w-full'>
                        <img className='w-[95px] h-[94px] mx-auto  hover:bg-sky-700' src={icons} alt="icons" />
                        <h2 className='text-[29px] font-bold leading-[27px] alegreyaBold mt-[18px] text-center'>Lorem Ipsum Dolo</h2>
                        <p className='text-[16px] font-normal nunitoNormal mt-[14px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. In est ante in nibh mauris cursus mattis.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default How;