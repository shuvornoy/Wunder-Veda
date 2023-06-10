import React from 'react';
import rating from '../../../../assets/Aboutus/rating.png';
import right from '../../../../assets/Aboutus/right.png'

const Rating = () => {
    return (
        <div className='lg:h-[780px] xl:w-[1280px] mx-auto lg:pt-[105px] pt-[50px] px-6 xl:px-0'>
            <div className='lg:flex block justify-between items-center'>
                <div className='xl:w-[600px] lg:w-[550px] w-full'>
                    <h2 className='xl:text-[40px] lg:text-[35px] md:text-[40px] text-[31px] font-bold lg:leading-[54px] md:leading-[40px] leading-[35px] alegreyaBold'>Our knowledgeable team can help you design an experiences tailored to your needs</h2>
                    <p className='lg:text-[18px] text-[16px] leading-[24px] font-normal nunitoNormal xl:mt-[44px] lg:mt-[35px] mt-[30px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip. consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidun</p>
                </div>
                <div>
                    <img className='xl::w-[618px] lg:w-[600px] w-full lg:h-[378px] mt-[30px] lg:mt-0' src={rating} alt="rating" />
                </div>
            </div>
            <div className='xl:mt-[44px] lg:mt-[35px] mt-[30px] grid lg:grid-cols-4 md:grid-cols-2 justify-between items-center gap-[17px]'>
                <div className=''>
                    <h2 className='xl:text-[85px] lg:text-[50px] text-[60px] font-bold lg:leading-[90px] montserratBold'>180+</h2>
                    <p className='xl:text-[18px] lg:text-[14px] md:text-[18px] text-[17px] font-medium leading-[24px] nunitoMedium xl:w-[315px] lg:w-[220px]'>Quis risus sed vulputaeio ut. Arcu vitae eleme curabitur vitae nunc</p>
                </div>
                <div className=''>
                    <h2 className='xl:text-[85px] lg:text-[50px] text-[60px] font-bold lg:leading-[90px] montserratBold'>3x</h2>
                    <p className='xl:text-[18px] lg:text-[14px] md:text-[18px] text-[17px] font-medium leading-[24px] nunitoMedium xl:w-[315px] lg:w-[220px]'>Quis risus sed vulputaeio ut. Arcu vitae eleme curabitur vitae nunc</p>
                </div>
                <div className=''>
                    <h2 className='xl:text-[85px] lg:text-[50px] text-[60px] font-bold lg:leading-[90px] montserratBold'>100%</h2>
                    <p className='xl:text-[18px] lg:text-[14px] md:text-[18px] text-[17px] font-medium leading-[24px] nunitoMedium xl:w-[315px] lg:w-[220px]'>Quis risus sed vulputaeio ut. Arcu vitae eleme curabitur vitae nunc</p>
                </div>
                <div className=''>
                    <h2 className='xl:text-[85px] lg:text-[50px] text-[60px] font-bold lg:leading-[90px] montserratBold'>11k</h2>
                    <p className='xl:text-[18px] lg:text-[14px] md:text-[18px] text-[17px] font-medium leading-[24px] nunitoMedium xl:w-[315px] lg:w-[220px]'>Quis risus sed vulputaeio ut. Arcu vitae eleme curabitur vitae nunc</p>
                </div>
           
           
       
            </div>
            <img className='absolute  xl:h-[542px] lg:h-[300px] right-0 top-[880px] lg:block hidden' src={right} alt="right" />
        </div>
    );
};

export default Rating;