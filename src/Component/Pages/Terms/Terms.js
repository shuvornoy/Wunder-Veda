import React from 'react';
import img1 from '../../../assets/checkout/left/1.png'
import img2 from '../../../assets/checkout/left/2.png'
import img3 from '../../../assets/checkout/left/3.png'
import img4 from '../../../assets/checkout/right/4.png'
import img5 from '../../../assets/checkout/right/5.png'
import img6 from '../../../assets/checkout/right/6.png'
import img7 from '../../../assets/checkout/right/7.png'
import './Terms.css'

const Terms = () => {
    return (
        <div>
              { /*============ Banner start ===========*/}
            <div className='xl:h-[370px] lg:h-[196px] md:h-[148px] h-[284px] bg-cover md:bg-contain xl:w-full w-full terms flex'>
                <h2 className='w-full h-full flex items-center justify-center xl:text-[80px] text-[50px] xl:leading-[90px] leading-[55px] font-bold text-[#1E2819] alegreyaBold text-center'>Terms & Conditions</h2>
            </div>
            <div className='lg:py-[100px] py-[50px]'>
                <div className='xl:w-[1282px] mx-auto px-6 xl:px-0'>
                <h2 className='md:text-[25px] text-[20px] leading-[30px] alegreyaBold'>Last Updated: May 26, 2023</h2>
                <hr className='lg:my-[43px] my-[20px]' />
                <div className='w-full'>
                    <h2 className='lg:text-[45px] md:text-[30px] text-[25px] font-bold lg:leading-[54px] alegreyaBold'>Lorem Ipsum Dolor Sit</h2>
                    <p className='lg:text-[22px] text-[18px] w-full leading-[30px] font-medium mt-[20px] nunitoMedium'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut.</p>
                </div>
            </div>

            <div className='xl:w-[1282px] mx-auto px-6 xl:px-0 mt-[30px]'>
                <div className='w-full'>
                    <h2 className='lg:text-[45px] md:text-[30px] text-[25px] font-bold lg:leading-[54px] alegreyaBold'>Lorem Ipsum Dolor Sit</h2>
                    <p className='lg:text-[22px] text-[18px] w-full leading-[30px] font-medium mt-[20px] nunitoMedium'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut.</p>
                </div>
            </div>
            <div className='xl:w-[1282px] mx-auto px-6 xl:px-0 mt-[30px]'>
                <div className='w-full'>
                    <h2 className='lg:text-[45px] md:text-[30px] text-[25px] font-bold lg:leading-[54px] alegreyaBold'>Lorem Ipsum Dolor Sit</h2>
                    <p className='lg:text-[22px] text-[18px] w-full leading-[30px] font-medium mt-[20px] nunitoMedium'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut.</p>
                </div>
            </div>
            <div className='xl:w-[1282px] mx-auto px-6 xl:px-0 mt-[30px]'>
                <div className='w-full'>
                    <h2 className='lg:text-[45px] md:text-[30px] text-[25px] font-bold lg:leading-[54px] alegreyaBold'>Lorem Ipsum Dolor Sit</h2>
                    <p className='lg:text-[22px] text-[18px] w-full leading-[30px] font-medium mt-[20px] nunitoMedium'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut.</p>
                </div>
            </div>
                
            </div>
             <div className='xl:block hidden'>
                <img className='absolute top-[704px]' src={img1} alt="img1" />
                <img className='absolute top-[870px] left-[43px]' src={img2} alt="img2" />
                <img className='absolute top-[950px] left-[57px]' src={img3} alt="img3" />
                <img className='absolute top-[1300px] left-[1690px]' src={img4} alt="img4" />
                <img className='absolute top-[1415px] left-[1700px]' src={img5} alt="img5" />
                <img className='absolute top-[1415px] left-[1814px]' src={img6} alt="img6" />
                <img className='absolute top-[1453px] right-0' src={img7} alt="img7" />
            </div>
        </div>
    );
};

export default Terms;