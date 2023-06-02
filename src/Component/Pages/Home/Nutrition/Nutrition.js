import React from 'react';
import nutrition from '../../../../assets/nutrition/nutrition.png'
import icon from '../../../../assets/nutrition/icon.png';
import mantra from '../../../../assets/nutrition/Mantra.png';
import img1 from '../../../../assets/nutrition/1.png';
import img2 from '../../../../assets/nutrition/2.png';
import img3 from '../../../../assets/nutrition/3.png';
import img4 from '../../../../assets/nutrition/4.png';
import './Nutrition.css'


const Nutrition = () => {
    return (
        <div className='bg_nutrition relative lg:h-[650px] md:h-[1000px] h-[1020px] px-6 xl:px-0'>
            <div className='xl:w-[1280px] w-full mx-auto lg:flex block justify-between items-center gap-[36px]  
            md:h-[674px] pt-[48px] pb-[54px]'>
                <div>
                    <h2 className='xl:text-[45px] lg:text-[40px] md:text-[35px] text-[40px] font-bold md:leading-[54px] leading-[40px] xl:w-[632px]  w-full alegreyaBold lg:text-start text-start md:text-center'>Care about your Nutritions</h2>
                    <div className='lg:hidden block'>
                        <img className='md:w-full w-full md:h-[400px] h-[261px] mt-[26px]' src={nutrition} alt="nutrition" />
                    </div>

                    <p className='md:text-[18px] text-[16px] font-medium leading-[24px] xl:w-[615px] lg:w-[600px] md:w-full w-full xl:mt-2 mt-[26px] nunitoNormal'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>  
                    
                    <div className='my-4 md:flex block gap-[30px] lg:mt-[20px] md:mt-[50px]'>
                        <div className='flex gap-4 lg:mt-0 md:mt-[20px]'>
                            <div className='bg-[#FFFFFF] w-[43px] h-[44px] rounded-full flex justify-start items-center'>
                            <img className=' w-[19px] h-[16px] ml-[13px]' src={icon} alt="icon" />
                            </div>
                            <p className='text-[18px] font-medium leading-[24px] w-[230px] nunitoNormal'>Lorem ipsum dolor sit amet, consectetuer nisl ut.</p>
                        </div>
                        <div className='flex gap-4 mt-4 lg:mt-0'>
                            <div className='bg-[#FFFFFF] w-[43px] h-[44px] rounded-full flex justify-start items-center'>
                            <img className=' w-[19px] h-[16px] ml-[13px]' src={icon} alt="icon" />
                            </div>
                            <p className='text-[18px] font-medium leading-[24px] w-[230px] nunitoNormal'>Lorem ipsum dolor sit amet, consectetuer nisl ut.</p>
                        </div>
                    </div>
                    <div className='my-4 md:flex block gap-[30px]'>
                        <div className='flex gap-4'>
                            <div className='bg-[#FFFFFF] w-[43px] h-[44px] rounded-full flex justify-start items-center'>
                            <img className=' w-[19px] h-[16px] ml-[13px]' src={icon} alt="icon" />
                            </div>
                            <p className='text-[18px] font-medium leading-[24px] w-[230px] nunitoNormal'>Lorem ipsum dolor sit amet, consectetuer nisl ut.</p>
                        </div>
                        <div className='flex gap-4 mt-4 lg:mt-0'>
                            <div className='bg-[#FFFFFF] w-[43px] h-[44px] rounded-full flex justify-start items-center'>
                            <img className=' w-[19px] h-[16px] ml-[13px]' src={icon} alt="icon" />
                            </div>
                            <p className='text-[18px] font-medium leading-[24px] w-[230px] nunitoNormal'>Lorem ipsum dolor sit amet, consectetuer nisl ut.</p>
                        </div>
                    </div>
                    <button className='main_btn mt-[44px] ld:w-[226px] md:w-[280px] w-[226px] lg:h-[45px] md:h-[40px] h-[45px] text-white rounded-[50px] font-bold 
                    leading-[19px] lg:text-[16px] text-[14px] alegreyaBold'>DISCOVER HOW WE DO IT</button>
                </div>
                <div>
                    <img className='xl:w-[616px] lg:w-[485px] xl:h-[400px] lg:h-[400px] mt-6 md:mt-0 relative hidden lg:block' src={nutrition} alt="nutrition" />

                    {/* <div className='xl:w-[133px] w-[86px] xl:h-[142px] h-[91px] items-center justify-center flex absolute xl:mt-[-373px] mt-[-716px] xl:ml-[-63px] ml-[222px] bg-white rounded-[13px] aboutShadow'>
                        <img className='xl:w-[81px] w-[52px] xl:h-[124px] h-[80px] z-10' src={mantra} alt="mantra" />
                    </div> */}
                </div>
            </div>
            {/* <div className='md:block hidden'>
                <img className='absolute top-0 right-0 w-[117px] h-[115px] mt-[13%] mr-[185px]' src={img1} alt="img1" />
                <img className='absolute top-0 right-0 w-[103px] h-[109px] mt-[18%] mr-[240px]' src={img2} alt="img2" />
                <img className='absolute top-0 right-0 w-[58px] h-[62px] mt-[18%] mr-[180px] hidden md:block' src={img3} alt="img3" />
            </div> */}
            <div className='xl:hidden block'>
                <img className='absolute top-[-50px] right-0 w-[100px] h-[190px] ' src={img4} alt="img4" /> 
            </div>
        </div>
    );
};

export default Nutrition;
