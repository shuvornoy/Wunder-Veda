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
        <div className='bg_achieve relative xl:h-[875px] lg:h-[690px] md:h-[1180px] h-[1400px]'>
            <div className='xl:w-[1280px] w-full mx-auto md:flex block justify-between xl:gap-[141px]'>
                <div className='pb-[63px]'>
                    <h2 className='xl:text-[60px] lg:text-[50px] text-[50px] lg:leading-[72px] font-bold md:leading-[54px] leading-[50px] xl:w-[615px] w-full alegreyaBold xl:pt-[185px] px-6 xl:px-0 pt-[46px]'>Product Achievements</h2>
                    <p className='xl:text-[18px] lg:text-[16px] md:text-[18px] text-[16px] font-medium leading-[24px] xl:w-[692px] lg:w-[400px] w-full h-[120px] xl:mt-[36px] mt-[31px] nunitoMedium px-6 xl:px-0'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>  

                    <div className='w-[390px] mx-auto lg:hidden block'>
                        <img className='md:w-[400px] w-[373px] md:h-[495px] h-[470px] ml-[16px] md:mt-[30px] mt-[50px]' src={img1} alt="img1" />
                    </div>
                    
                    <div className='xl:mt-[17px] mt-[40px] md:flex md:justify-between lg:justify-start items-center block xl:gap-[51px] gap-[25px] px-6 xl:px-0'>
                        <div className='flex gap-4'>
                            <div className='bg-[#FFFFFF] w-[43px] h-[44px] rounded-full flex justify-start items-center'>
                            <img className=' w-[20px] h-[16px] ml-[13px]' src={icon} alt="icon" />
                            </div>
                            <p className='text-[18px] font-medium leading-[24px] w-[230px] nunitoMedium'>Lorem ipsum dolor sit amet, consectetuer nisl ut.</p>
                        </div>
                        <div className='flex gap-4 md:mt-0 mt-4 lg:mt-0'>
                            <div className='bg-[#FFFFFF] w-[43px] h-[44px] rounded-full flex justify-start items-center'>
                            <img className=' w-[20px] h-[16px] ml-[13px]' src={icon} alt="icon" />
                            </div>
                            <p className='text-[18px] font-medium leading-[24px] w-[230px] nunitoMedium'>Lorem ipsum dolor sit amet, consectetuer nisl ut.</p>
                        </div>
                    </div>
                    <div className='mt-[25px] md:flex items-center md:justify-between lg:justify-start  block xl:gap-[51px] gap-[25px] px-6 xl:px-0'>
                        <div className='flex gap-4'>
                            <div className='bg-[#FFFFFF] w-[43px] h-[44px] rounded-full flex justify-start items-center'>
                            <img className=' w-[20px] h-[16px] ml-[13px]' src={icon} alt="icon" />
                            </div>
                            <p className='text-[18px] font-medium leading-[24px] w-[230px] nunitoMedium'>Lorem ipsum dolor sit amet, consectetuer nisl ut.</p>
                        </div>
                        <div className='flex gap-4 md:mt-0 mt-4 lg:mt-0'>
                            <div className='bg-[#FFFFFF] w-[43px] h-[44px] rounded-full flex justify-start items-center'>
                            <img className=' w-[20px] h-[16px] ml-[13px]' src={icon} alt="icon" />
                            </div>
                            <p className='text-[18px] font-medium leading-[24px] w-[230px] nunitoMedium'>Lorem ipsum dolor sit amet, consectetuer nisl ut.</p>
                        </div>
                    </div>
                    <div className='mt-[25px] md:flex items-center md:justify-between lg:justify-start  block xl:gap-[51px] gap-[25px] px-6 xl:px-0'>
                        <div className='flex gap-4'>
                            <div className='bg-[#FFFFFF] w-[43px] h-[44px] rounded-full flex justify-start items-center'>
                            <img className=' w-[20px] h-[16px] ml-[13px]' src={icon} alt="icon" />
                            </div>
                            <p className='text-[18px] font-medium leading-[24px] w-[230px] nunitoMedium'>Lorem ipsum dolor sit amet, consectetuer nisl ut.</p>
                        </div>
                        <div className='flex gap-4 md:mt-0 mt-4 lg:mt-0'>
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

                {/*====== lg device photo hidden =======*/}
                <div className='bg_photo xl:w-[470px] xl:h-[495px] w-[300px] h-[315px] xl:mt-[190px] mt-[100px] xl:ml-[802px] ml-[700px] absolute lg:block hidden'>
                     <div className=''>
                        <img className='xl:w-[420px] w-[250px] xl:h-[648px] h-[430px] xl:mt-[-70px] mt-[-60px] relative z-10' src={achievements} alt="achievements" />
                    </div>
                     <img className='absolute xl:w-[459px] w-[280px] xl:h-[471px] h-[180px] xl:top-[-30px] top-[-26px] xl:right-[-57px] right-[-20px]' src={rectangle} alt="rectangle" />
                </div>
            </div>
            <div className='lg:block hidden'>
                <img className='absolute w-[126px] h-[107px] top-[240px] right-[160px] xl:block hidden' src={pngegg} alt="pngegg" />
                <img className='absolute xl:w-[452px] w-[300px] xl:h-[273px] h-[200px] xl:top-[556px] top-[336px] xl:right-[336px] right-[23px] z-20' src={pngItem} alt="pngItem" />
            </div> 

            <div className='absolute xl:w-[196px] w-[120px] xl:h-[120px] h-[100px] bg-[#FFFF] aboutShadow rounded-[13px] xl:top-[260px] top-[135px] xl:right-[632px] right-[220px] z-20 lg:block hidden'>
                <div className='flex justify-center gap-4'>
                    <h2 className='xl:text-[75px] text-[30px] font-bold xl:leading-[78px] leading-[70px] text-[#1E2819] alegreyaBold'>415</h2>
                    <p className='main_btn text-[#FFFF] xl:w-[20px] w-[16px] xl:h-[20px] h-[16px] flex justify-center items-center rounded-full mt-[20px]'>+</p>
                </div>
                <h2 className='xl:text-[28px] text-[20px] font-bold xl:leading-[33px] leading-[0px] text-[#1E2819] alegreyaBold text-center pb-4'>Units Sold!</h2>
            </div>

            <div className='absolute xl:w-[196px] w-[120px] xl:h-[120px] h-[100px] bg-[#FFFF] aboutShadow rounded-[13px] xl:top-[346px] top-[184px] xl:right-[308px] right-[26px] z-20 lg:block hidden'>
                <div className='flex justify-center gap-4'>
                    <h2 className='xl:text-[75px] text-[30px] font-bold xl:leading-[78px] leading-[70px] text-[#1E2819] alegreyaBold'>415</h2>
                    <p className='main_btn text-[#FFFF] xl:w-[20px] w-[16px] xl:h-[20px] h-[16px] flex justify-center items-center rounded-full mt-[20px]'>+</p>
                </div>
                 <h2 className='xl:text-[28px] text-[20px] font-bold xl:leading-[33px] leading-[0px] text-[#1E2819] alegreyaBold text-center pb-4'>Units Sold!</h2>
            </div>
            
        </div>
    );
};

export default Achievements;