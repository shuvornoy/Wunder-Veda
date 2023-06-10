import React from 'react';
import product from '../../../../assets/product/all.png'

const OurProduct = () => {
    return (
        <div className='xl:w-[1280px] mx-auto px-6 xl:px-0'>
            <h2 className='lg:text-[60px] md:text-[40px] text-[30px] font-bold md:leading-[72px] text-center alegreyaBold'>Our Product Main Ingredients</h2>
            <div className='md:flex block items-center gap-[62px]'>
                <div>
                    <img className='lg:w-[668] lg:h-[340px]' src={product} alt="product" />
                </div>
            <div>
                <div className='flex'>
                    <div className='w-[231px]'>
                        <div className='flex items-center gap-1'>
                            <span className='w-[12px] h-[12px] border-[1px] border-[#1E2819] rounded-full bg-[#FBD895]'></span> <p className='text-[25px] font-medium leading-[35px] alegreyaMedium'>Chana</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='w-[12px] h-[12px] border-[1px] border-[#1E2819] rounded-full bg-[#FBD895]'></span> <p className='text-[25px] font-medium leading-[35px] alegreyaMedium'>Chana</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='w-[12px] h-[12px] border-[1px] border-[#1E2819] rounded-full bg-[#FBD895]'></span> <p className='text-[25px] font-medium leading-[35px] alegreyaMedium'>Chana</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='w-[12px] h-[12px] border-[1px] border-[#1E2819] rounded-full bg-[#FBD895]'></span> <p className='text-[25px] font-medium leading-[35px] alegreyaMedium'>Chana</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='w-[12px] h-[12px] border-[1px] border-[#1E2819] rounded-full bg-[#FBD895]'></span> <p className='text-[25px] font-medium leading-[35px] alegreyaMedium'>Chana</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='w-[12px] h-[12px] border-[1px] border-[#1E2819] rounded-full bg-[#FBD895]'></span> <p className='text-[25px] font-medium leading-[35px] alegreyaMedium'>Chana</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='w-[12px] h-[12px] border-[1px] border-[#1E2819] rounded-full bg-[#FBD895]'></span> <p className='text-[25px] font-medium leading-[35px] alegreyaMedium'>Chana</p>
                        </div>
                    </div>
                    
                    <div>
                        <div className='flex items-center gap-1'>
                            <span className='w-[12px] h-[12px] border-[1px] border-[#1E2819] rounded-full bg-[#FBD895]'></span> <p className='text-[25px] font-medium leading-[35px] alegreyaMedium'>Chana</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='w-[12px] h-[12px] border-[1px] border-[#1E2819] rounded-full bg-[#FBD895]'></span> <p className='text-[25px] font-medium leading-[35px] alegreyaMedium'>Chana</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='w-[12px] h-[12px] border-[1px] border-[#1E2819] rounded-full bg-[#FBD895]'></span> <p className='text-[25px] font-medium leading-[35px] alegreyaMedium'>Chana</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='w-[12px] h-[12px] border-[1px] border-[#1E2819] rounded-full bg-[#FBD895]'></span> <p className='text-[25px] font-medium leading-[35px] alegreyaMedium'>Chana</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='w-[12px] h-[12px] border-[1px] border-[#1E2819] rounded-full bg-[#FBD895]'></span> <p className='text-[25px] font-medium leading-[35px] alegreyaMedium'>Chana</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='w-[12px] h-[12px] border-[1px] border-[#1E2819] rounded-full bg-[#FBD895]'></span> <p className='text-[25px] font-medium leading-[35px] alegreyaMedium'>Chana</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='w-[12px] h-[12px] border-[1px] border-[#1E2819] rounded-full bg-[#FBD895]'></span> <p className='text-[25px] font-medium leading-[35px] alegreyaMedium'>Chana</p>
                        </div> 
                    </div>
                </div>
                  <h2 className='lg:text-[25px] md:text-[20px] text-[16px] font-medium leading-[35px] text-start alegreyaMedium md:ml-[-20px]'>And Many More ingredients</h2>  
            </div>    
            </div>
            <div className='w-full flex justify-center'>
                <button class="text-[16px] font-bold text-white alegreyaBold rounded-[50px] main_btn w-[242px] h-[45px]">EXPLORE ALL INGREDIENTS</button></div>
        </div>
    );
};

export default OurProduct;