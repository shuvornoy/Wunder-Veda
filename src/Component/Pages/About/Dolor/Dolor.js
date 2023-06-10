import React from 'react';
import dolor from '../../../../assets/Aboutus/dolor.png';
import right from '../../../../assets/Aboutus/right.png'
import left from '../../../../assets/Aboutus/leaf2 2.png'

const Dolor = () => {
    return (
        <div className='lg:h-[415px] md:h-[350px] h-[350px] bg-[#FBD895] flex items-center px-6 xl:px-0'>
            <div className='xl:w-[1280px] w-full mx-auto md:flex block justify-between items-center xl:gap-[73px] lg:ga-[50px] gap-4'>
                <h2 className='xl:text-[60px] lg:text-[40px] text-[30px] font-bold xl:w-[420px] lg:w-[300px] md:w-[300px] w-full'>Lorem Ipsum Doconsecu Dolor Sit Amet</h2>
                <img className='xl:w-[767px] lg:w-[620px] md:w-[500px] w-full xl:h-[312px] lg:h-[212px] md:h-[200px] mt-5 md:mt-0' src={dolor} alt="dolor" />
            </div>
            <img className='absolute  xl:h-[542px] lg:h-[300px] right-0 lg:block hidden xl:mt-[-360px] lg:mt-[-500px]' src={right} alt="right" />

            <img className='absolute xl:left-[138px] lg:left-0 lg:block hidden xl:mt-[-400px] lg:mt-[-500px]' src={left} alt="left" />
        </div>
    );
};

export default Dolor;