import React from 'react';
import achievements from '../../../../assets/achievements/achievements.png'
import pngItem from '../../../../assets/achievements/PngItem.png';
import rectangle from '../../../../assets/achievements/NicePng.png';
import pngegg from '../../../../assets/achievements/pngegg (59) 3.png';
import img1 from '../../../../assets/achievements/1.png';
import icon from '../../../../assets/nutrition/icon.png';
import './Achievements.css'

const Achievements = () => {
    return (
        <div className='bg_achieve relative xl:h-[875px] h-[1400px]'>
            <div className='xl:w-[1094px] w-full mx-auto md:flex block justify-between'>
                <div className='pb-[63px]'>
                    <h2 className='xl:text-[60px] lg:text-[35px] md:text-[25px] text-[50px] lg:leading-[72px] font-bold md:leading-[54px] leading-[50px] xl:w-[615px] w-full alegreyaBold xl:pt-[185px] px-6 xl:px-0 pt-[46px]'>Product Achievements</h2>
                    <p className='xl:text-[16px] lg:text-[16px] md:text-[14px] text-[16px] font-medium leading-[24px] xl:w-[604px] lg:w-[400px] md:w-[360px] w-full h-[120px] xl:mt-[36px] mt-[31px] nunitoMedium px-6 xl:px-0'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>  

                    <div className='w-[390px] mx-auto md:hidden block'>
                        <img className='w-[373px] h-[470px] ml-[16px] mt-[50px]' src={img1} alt="img1" />
                    </div>
                    
                    <div className='xl:mt-[17px] mt-[40px] lg:flex block gap-[30px] px-6 xl:px-0'>
                        <div className='flex gap-4'>
                            <div className='bg-[#FFFFFF] w-[43px] h-[44px] rounded-full flex justify-start items-center'>
                            <img className=' w-[20px] h-[16px] ml-[13px]' src={icon} alt="icon" />
                            </div>
                            <p className='text-[18px] font-medium leading-[24px] w-[230px] nunitoMedium'>Lorem ipsum dolor sit amet, consectetuer nisl ut.</p>
                        </div>
                        <div className='flex gap-4 mt-4 lg:mt-0'>
                            <div className='bg-[#FFFFFF] w-[43px] h-[44px] rounded-full flex justify-start items-center'>
                            <img className=' w-[20px] h-[16px] ml-[13px]' src={icon} alt="icon" />
                            </div>
                            <p className='text-[18px] font-medium leading-[24px] w-[230px] nunitoMedium'>Lorem ipsum dolor sit amet, consectetuer nisl ut.</p>
                        </div>
                    </div>
                    <div className='mt-[25px] lg:flex block gap-[30px] px-6 xl:px-0'>
                        <div className='flex gap-4'>
                            <div className='bg-[#FFFFFF] w-[43px] h-[44px] rounded-full flex justify-start items-center'>
                            <img className=' w-[20px] h-[16px] ml-[13px]' src={icon} alt="icon" />
                            </div>
                            <p className='text-[18px] font-medium leading-[24px] w-[230px] nunitoMedium'>Lorem ipsum dolor sit amet, consectetuer nisl ut.</p>
                        </div>
                        <div className='flex gap-4 mt-4 lg:mt-0'>
                            <div className='bg-[#FFFFFF] w-[43px] h-[44px] rounded-full flex justify-start items-center'>
                            <img className=' w-[20px] h-[16px] ml-[13px]' src={icon} alt="icon" />
                            </div>
                            <p className='text-[18px] font-medium leading-[24px] w-[230px] nunitoMedium'>Lorem ipsum dolor sit amet, consectetuer nisl ut.</p>
                        </div>
                    </div>
                    <div className='mt-[25px] lg:flex block gap-[30px] px-6 xl:px-0'>
                        <div className='flex gap-4'>
                            <div className='bg-[#FFFFFF] w-[43px] h-[44px] rounded-full flex justify-start items-center'>
                            <img className=' w-[20px] h-[16px] ml-[13px]' src={icon} alt="icon" />
                            </div>
                            <p className='text-[18px] font-medium leading-[24px] w-[230px] nunitoMedium'>Lorem ipsum dolor sit amet, consectetuer nisl ut.</p>
                        </div>
                        <div className='flex gap-4 mt-4 lg:mt-0'>
                            <div className='bg-[#FFFFFF] w-[43px] h-[44px] rounded-full flex justify-start items-center'>
                            <img className=' w-[20px] h-[16px] ml-[13px]' src={icon} alt="icon" />
                            </div>
                            <p className='text-[18px] font-medium leading-[24px] w-[230px] nunitoMedium'>Lorem ipsum dolor sit amet, consectetuer nisl ut.</p>
                        </div>
                    </div>
                  
                    <div className="px-6 xl:px-0">
                        <button className='main_btn px-2 ld:w-[290px] md:w-[280px] w-[290px] lg:h-[45px] md:h-[40px] h-[45px] text-white rounded-[50px] font-bold 
                    leading-[19px] lg:text-[16px] text-[14px] mt-[49px]'>LEARN MORE ABOUT PRODUCT</button>
                    </div>
                    
                </div>
                <div className='bg_photo mt-[190px] ml-[700px] absolute md:block hidden'>
                     <div className=''>
                        <img className='w-[420px] h-[648px]  mt-[-70px] relative z-10' src={achievements} alt="achievements" />
                    </div>
                     <img className='absolute w-[459px] h-[471px] top-[-30px] right-[-57px] ' src={rectangle} alt="rectangle" />
                </div>
            </div>
            <div className='md:block hidden'>
                <img className='absolute w-[126px] h-[107px] top-[240px] right-[160px]' src={pngegg} alt="pngegg" />
                <img className='absolute w-[452px] h-[273px] top-[556px] right-[336px] z-20' src={pngItem} alt="pngItem" />
            </div> 
            <div className='absolute w-[196px] h-[120px] bg-[#FFFF] aboutShadow rounded-[13px] top-[260px] right-[632px] z-20 md:block hidden'>
                <div className='flex justify-center gap-4'>
                    <h2 className='text-[75px] font-bold leading-[78px] text-[#1E2819] alegreyaBold'>415</h2>
                    <p className='main_btn text-[#FFFF] w-[20px] h-[20px] flex justify-center items-center rounded-full mt-[20px]'>+</p>
                </div>
                <h2 className='text-[28px] font-bold leading-[33px] text-[#1E2819] alegreyaBold text-center pb-4'>Units Sold!</h2>
            </div>
            <div className='absolute w-[196px] h-[120px] bg-[#FFFF] aboutShadow rounded-[13px] top-[346px] right-[308px] z-20 md:block hidden'>
                <div className='flex justify-center gap-4'>
                    <h2 className='text-[75px] font-bold leading-[78px] text-[#1E2819] alegreyaBold'>415</h2>
                    <p className='main_btn text-[#FFFF] w-[20px] h-[20px] flex justify-center items-center rounded-full mt-[20px]'>+</p>
                </div>
                <h2 className='text-[28px] font-bold leading-[33px] text-[#1E2819] alegreyaBold text-center pb-4'>Units Sold!</h2>
            </div>
            
        </div>
    );
};

export default Achievements;