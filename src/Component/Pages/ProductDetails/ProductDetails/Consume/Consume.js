import React from 'react';
import img1 from '../../../../../assets/product/pro.png'
import left from '../../../../../assets/product/left.png'


const Consume = () => {
    return (
        <div className='lg:h-[619px] md:h-[400px] h-[200px] bg-[#CED0C8] mt-[50px]'>
            <div className='xl:w-[1280px] w-full mx-auto px-6 xl:px-0'>
                <h2 className='lg:pt-[70px] pt-[10px] lg:text-[60px] md:text-[40px] text-[30px] font-bold leading-[72px] alegreyaBold text-center'>How To Consume</h2>
                <div className='flex justify-between relative z-10'>
                    <img className='' src={img1} alt="img1" />
                   
                </div>
               <img className='absolute left-0 xl:w-[250px] lg:w-[200px] xl:h-[550px] lg:h-[300px] md:w-[100px] xl:mt-[-250px] md:block hidden' src={left} alt="left" />
               
            
           </div>
        </div>
    );
};

export default Consume;