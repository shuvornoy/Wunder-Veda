import React from 'react';
import right from '../../../../assets/about/right.png'
import vector from '../../../../assets/how-we/process/smoll.png';
import site from '../../../../assets/how-we/process/right.png';
 import how from '../../../../assets/how-we/process/how.png';
import './process.css'

const Process = () => {
    return (
        <div className='w-full xl:h-[1186px] lg:h-[1100px] md:h-[700px] h-[1050px] relative'>
            <div className='xl:w-[1280px] w-full mx-auto lg:flex block'>
                <div className='mt-[62px]'>
                    <img src={how} alt="how" />
                </div>
                <div className='md:hidden block md:w-full mx-auto'>
                    <div className='px-6 xl:px-0'>
                        <div className='w-full flex items-center h-[74px] gap-[10px] '>
                            <img className='w-[64px] h-[61px]' src={vector} alt="vector" />
                            <div>
                                <h2 className='text-[22px] font-bold leading-[26px] alegreyaBold '>Process Step I</h2>
                                <p className='w-[265px] h-[49px] text-[14px] leading-[15px] font-medium nunitoMedium text-start'>Lorem ipsum dolor sit amet, consect etuer adipiscing ipsum dolor sit</p>
                            </div>
                        </div>
                        <div className='w-full flex items-center h-[74px] gap-[10px] mt-[32px]'>
                            <img className='w-[64px] h-[61px]' src={vector} alt="vector" />
                            <div>
                                <h2 className='text-[22px] font-bold leading-[26px] alegreyaBold '>Process Step I</h2>
                                <p className='w-[265px] h-[49px] text-[14px] leading-[15px] font-medium nunitoMedium text-start'>Lorem ipsum dolor sit amet, consect etuer adipiscing ipsum dolor sit</p>
                            </div>
                        </div>
                        <div className='w-full flex items-center h-[74px] gap-[10px] mt-[32px]'>
                            <img className='w-[64px] h-[61px]' src={vector} alt="vector" />
                            <div>
                                <h2 className='text-[22px] font-bold leading-[26px] alegreyaBold '>Process Step I</h2>
                                <p className='w-[265px] h-[49px] text-[14px] leading-[15px] font-medium nunitoMedium text-start'>Lorem ipsum dolor sit amet, consect etuer adipiscing ipsum dolor sit</p>
                            </div>
                        </div>
                        <div className='w-full flex items-center h-[74px] gap-[10px] mt-[32px]'>
                            <img className='w-[64px] h-[61px]' src={vector} alt="vector" />
                            <div>
                                <h2 className='text-[22px] font-bold leading-[26px] alegreyaBold '>Process Step I</h2>
                                <p className='w-[265px] h-[49px] text-[14px] leading-[15px] font-medium nunitoMedium text-start'>Lorem ipsum dolor sit amet, consect etuer adipiscing ipsum dolor sit</p>
                            </div>
                        </div>
                        <div className='w-full flex items-center h-[74px] gap-[10px] mt-[32px]'>
                            <img className='w-[64px] h-[61px]' src={vector} alt="vector" />
                            <div>
                                <h2 className='text-[22px] font-bold leading-[26px] alegreyaBold '>Process Step I</h2>
                                <p className='w-[265px] h-[49px] text-[14px] leading-[15px] font-medium nunitoMedium text-start'>Lorem ipsum dolor sit amet, consect etuer adipiscing ipsum dolor sit</p>
                            </div>
                        </div>
                        <div className='w-full flex items-center h-[74px] gap-[10px] mt-[32px]'>
                            <img className='w-[64px] h-[61px]' src={vector} alt="vector" />
                            <div>
                                <h2 className='text-[22px] font-bold leading-[26px] alegreyaBold '>Process Step I</h2>
                                <p className='w-[265px] h-[49px] text-[14px] leading-[15px] font-medium nunitoMedium text-start'>Lorem ipsum dolor sit amet, consect etuer adipiscing ipsum dolor sit</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            <div className='lg:block hidden'>
                <img className='absolute xl:top-[50px] top-0 right-0 xl:h-[542px] lg:h-[300px]' src={site} alt="site" />
                <img className='absolute mt-[-180px] xl:h-[300px] lg:h-[250px]' src={right} alt="right" />
            </div>
        </div>
    );
};

export default Process;