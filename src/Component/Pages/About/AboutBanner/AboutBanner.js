import React from 'react';
import './AboutBanner.css'

const AboutBanner = () => {
    return (
        <div className='xl:h-[370px] lg:h-[196px] md:h-[148px] h-[284px] bg-cover md:bg-contain  w-full about_banner'>
                <h2 className='w-full h-full flex items-center justify-center xl:text-[80px] text-[50px] xl:leading-[90px] leading-[55px] font-bold text-[#1E2819] alegreyaBold'>About Us</h2>
        </div>
    );
};

export default AboutBanner;