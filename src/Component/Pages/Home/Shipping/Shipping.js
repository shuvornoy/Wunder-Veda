import React from 'react';
import shipping from '../../../../assets/shipping/shipping.png'

const Shipping = () => {
    return (
        <div className='xl:mt-[118px] mt-[32px] w-full h-[150px] relative overflow-hidden md:px-6 xl:px-0'>
            <div className='xl:w-[1280px] w-full mx-auto md:flex justify-between xl:gap-[20px] md:gap-2 items-center px-2 hidden'>
                <div className='mb-5 md:mb-0'>
                    <div className='flex justify-center items-center gap-2'>
                    <img className='lg:h-[57px] md:h-[40px] h-[49px]' src={shipping} alt="shipping" />
                    <h2 className='lg:w-[197px] md:w-[165px] w-[172px] lg:text-[23px] md:text-[16px] text-[21px] font-bold leading-[26px] nunitoBold'>Free Shipping & Returns</h2>
                </div>
                    <p className='xl:text-[18px] lg:text-[16px] md:text-[12px] text-[15px] font-normal leading-[24px] mt-2 nunitoBold 
                    xl:w-[259px] w-full'>Habitasse platea dictu quisque</p>
                </div>

                <div className='mb-5 md:mb-0'>
                    <div className='flex justify-center items-center gap-2'>
                    <img className='lg:h-[57px] md:h-[40px] h-[49px]' src={shipping} alt="shipping" />
                    <h2 className='lg:w-[197px] md:w-[165px] w-[172px] lg:text-[23px] md:text-[16px] text-[21px] font-bold leading-[26px] nunitoBold'>Money Back Guarantee</h2>
                </div>
                    <p className='xl:text-[18px] lg:text-[16px] md:text-[12px] text-[15px] font-normal leading-[24px] mt-2 nunitoBold 
                    xl:w-[259px] w-full'>Habitasse platea dictu quisque</p>
                </div>
            
                <div className='mb-5 md:mb-0'>
                    <div className='flex justify-center items-center gap-2'>
                    <img className='lg:h-[57px] md:h-[40px] h-[49px]' src={shipping} alt="shipping" />
                    <h2 className='lg:w-[197px] md:w-[165px] w-[172px] lg:text-[23px] md:text-[16px] text-[21px] font-bold leading-[26px] nunitoBold'>100%  Secure Payment</h2>
                </div>
                    <p className='xl:text-[18px] lg:text-[16px] md:text-[12px] text-[15px] font-normal leading-[24px] mt-2 nunitoBold 
                    xl:w-[259px] w-full'>Habitasse platea dictu quisque</p>
                </div>
            
                <div className='mb-5 md:mb-0'>
                    <div className='flex justify-center items-center gap-2'>
                    <img className='lg:h-[57px] md:h-[40px] h-[49px]' src={shipping} alt="shipping" />
                    <h2 className='lg:w-[197px] md:w-[165px] w-[172px] lg:text-[23px] md:text-[16px] text-[21px] font-bold leading-[26px] nunitoBold'>24/7  Online Support</h2>
                </div>
                    <p className='xl:text-[18px] lg:text-[16px] md:text-[12px] text-[15px] font-normal leading-[24px] mt-2 nunitoBold 
                    xl:w-[259px] w-full'>Habitasse platea dictu quisque</p>
                </div>
            
               
             
                
               
                
                
            </div>
            <div className='md:hidden flex absolute top-0 left-0'>
                <div className='mb-5 md:mb-0 ml-[24px] '>
                    <div className='flex justify-center items-center gap-2'>
                    <img className='lg:h-[57px] md:h-[40px] h-[49px]' src={shipping} alt="shipping" />
                    <h2 className='lg:w-[197px] md:w-[165px] w-[172px] lg:text-[23px] md:text-[16px] text-[21px] font-bold leading-[26px] nunitoBold'>Free Shipping & Returns</h2>
                </div>
                    <p className='xl:text-[18px] lg:text-[16px] md:text-[12px] text-[15px] font-normal leading-[24px] mt-2 nunitoBold xl:w-[259px] w-[226px]'>Habitasse platea dictu quisque</p>
                </div>
                <div className='mb-5 md:mb-0 ml-[23px] w-[220px]'>
                    <div className='flex justify-center items-center gap-2'>
                    <img className='lg:h-[57px] md:h-[40px] h-[49px]' src={shipping} alt="shipping" />
                    <h2 className='lg:w-[197px] md:w-[165px] w-[172px] lg:text-[23px] md:text-[16px] text-[21px] font-bold leading-[26px] nunitoBold'>Money Back Guarantee</h2>
                </div>
                    <p className='lg:text-[16px] md:text-[12px] text-[15px] font-normal leading-[24px] mt-2 nunitoBold 
                     w-[226px] ml-[6px]'>Habitasse platea dictu quisque</p>
                </div>
            </div>
        </div>
    );
};

export default Shipping;