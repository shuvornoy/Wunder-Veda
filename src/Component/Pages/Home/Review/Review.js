import React from 'react';
import './Review.css';
import img from '../../../../assets/review/Ellipss.png';
import happy from '../../../../assets/review/Happy Customers.png';
import happy1 from '../../../../assets/review/Happy Customers1.png';

const Review = () => {
    return (
        <div className='review xl:h-[466px] h-[630px]'>
            <div className="carousel xl:w-[1094px] w-full mx-auto ">
                <div className='md:hidden block absolute mt-[55px] ml-[12px]'>
                <img className='w-[365px] h-[168px]' src={happy1} alt="happy1" />
            </div>
                <div id="slide1" className="carousel-item relative w-full xl:mt-[113px] mt-[260px] left-[35px] xl:left-0">
                    <div className='xl:w-[778px] w-[343px] mx-auto xl:h-[220px] h-[293px] bg-[#FFFFFF] rounded-[13px] border-[1px] border-[#FFFFFF] relative text-center ' >
                        <h2 className='xl:mt-[57px] mt-[40px] mx-auto xl:text-[24px] text-[27px] xl:leading-[30px] leading-[42px] xl:font-normal font-bold libreNormal w-[228px]'>Hannah Schmitt</h2>
                        <p className='mt-[9px] text-[16px] xl:leading-[24px] leading-[22px] font-normal montserratNormal xl:w-[730px] w-[314px] mx-auto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div>
                        <img className='absolute left-0 xl:ml-[506px] ml-[153px] w-[80px] h-[80px] xl:mt-[-40px] mt-[-58px]' src={img} alt="img" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full xl:mt-[113px] mt-[260px]">
                    <div className='xl:w-[778px] w-[343px] mx-auto xl:h-[220px] h-[293px] bg-[#FFFFFF] rounded-[13px] border-[1px] border-[#FFFFFF] relative text-center ' >
                        <h2 className='xl:mt-[57px] mt-[40px] mx-auto xl:text-[24px] text-[27px] xl:leading-[30px] leading-[42px] xl:font-normal font-bold libreNormal w-[228px]'>Hannah Schmitt</h2>
                        <p className='mt-[9px] text-[16px] xl:leading-[24px] leading-[22px] font-normal montserratNormal xl:w-[730px] w-[314px] mx-auto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div>
                        <img className='absolute left-0 xl:ml-[506px] ml-[153px] w-[80px] h-[80px] xl:mt-[-40px] mt-[-58px]' src={img} alt="img" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full xl:mt-[113px] mt-[260px] ml-[-32] xl:ml-0 right-[35px] xl:right-0">
                    <div className='xl:w-[778px] w-[343px] mx-auto xl:h-[220px] h-[293px] bg-[#FFFFFF] rounded-[13px] border-[1px] border-[#FFFFFF] relative text-center ' >
                        <h2 className='xl:mt-[57px] mt-[40px] mx-auto xl:text-[24px] text-[27px] xl:leading-[30px] leading-[42px] xl:font-normal font-bold libreNormal w-[228px]'>Hannah Schmitt</h2>
                        <p className='mt-[9px] text-[16px] xl:leading-[24px] leading-[22px] font-normal montserratNormal xl:w-[730px] w-[314px] mx-auto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div>
                        <img className='absolute left-0 xl:ml-[506px] ml-[153px] w-[80px] h-[80px] xl:mt-[-40px] mt-[-58px]' src={img} alt="img" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full xl:mt-[113px] mt-[260px] right-[70px] xl:right-0">
                    <div className='xl:w-[778px] w-[343px] mx-auto xl:h-[220px] h-[293px] bg-[#FFFFFF] rounded-[13px] border-[1px] border-[#FFFFFF] relative text-center ' >
                        <h2 className='xl:mt-[57px] mt-[40px] mx-auto xl:text-[24px] text-[27px] xl:leading-[30px] leading-[42px] xl:font-normal font-bold libreNormal w-[228px]'>Hannah Schmitt</h2>
                        <p className='mt-[9px] text-[16px] xl:leading-[24px] leading-[22px] font-normal montserratNormal xl:w-[730px] w-[314px] mx-auto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div>
                        <img className='absolute left-0 xl:ml-[506px] ml-[153px] w-[80px] h-[80px] xl:mt-[-40px] mt-[-58px]' src={img} alt="img" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> 
            </div>
            <div className='w-[1094px] mx-auto mt-[46px] md:block hidden'>
                <img src={happy} alt="happy" />
            </div>
        </div>
    );
};

export default Review;