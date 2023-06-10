import React from 'react';
import './Review.css';
import img from '../../../../assets/review/Ellipss.png';
import happy from '../../../../assets/review/Happy Customers.png';
import happy1 from '../../../../assets/review/Happy Customers1.png';

const Review = () => {
    return (
        <div className='review xl:h-[466px] lg:h-[500px] md:h-[467px] h-[630px]'>
            <div className="carousel xl:w-[1280px] w-full mx-auto ">
                <div className='md:hidden block absolute mt-[55px] ml-[12px]'>
                <img className='w-[365px] h-[168px]' src={happy1} alt="happy1" />
            </div>
                <div id="slide1" className="carousel-item relative w-full xl:mt-[113px] md:mt-[120px] mt-[260px] left-[70px] md:left-0">
                    <div className='xl:w-[778px] md:w-[500px] w-[343px] mx-auto xl:h-[220px] md:h-[250px] h-[293px] bg-[#FFFFFF] rounded-[13px] border-[1px] border-[#FFFFFF] relative text-center ' >
                        <h2 className='xl:mt-[57px] mt-[40px] mx-auto xl:text-[24px] text-[27px] xl:leading-[30px] leading-[42px] xl:font-normal font-bold libreNormal w-[228px]'>Hannah Schmitt</h2>
                        <p className='mt-[9px] text-[16px] xl:leading-[24px] leading-[22px] font-normal montserratNormal xl:w-[730px] md:w-[480px] w-[314px] mx-auto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div>
                        <img className='absolute left-0 xl:ml-[593px] lg:ml-[465px] md:ml-[350px] ml-[153px] w-[80px] h-[80px] xl:mt-[-40px] mt-[-58px]' src={img} alt="img" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full xl:mt-[113px] md:mt-[120px] mt-[260px] left-[35px] md:left-0">
                    <div className='xl:w-[778px] md:w-[500px] w-[343px] mx-auto xl:h-[220px] md:h-[250px] h-[293px] bg-[#FFFFFF] rounded-[13px] border-[1px] border-[#FFFFFF] relative text-center ' >
                        <h2 className='xl:mt-[57px] mt-[40px] mx-auto xl:text-[24px] text-[27px] xl:leading-[30px] leading-[42px] xl:font-normal font-bold libreNormal w-[228px]'>Hannah Schmitt</h2>
                        <p className='mt-[9px] text-[16px] xl:leading-[24px] leading-[22px] font-normal montserratNormal xl:w-[730px] md:w-[480px] w-[314px] mx-auto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div>
                        <img className='absolute left-0 xl:ml-[593px] lg:ml-[465px] md:ml-[350px] ml-[153px] w-[80px] h-[80px] xl:mt-[-40px] mt-[-58px]' src={img} alt="img" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full xl:mt-[113px] md:mt-[120px] mt-[260px] xl:ml-0">
                    <div className='xl:w-[778px] md:w-[500px] w-[343px] mx-auto xl:h-[220px] md:h-[250px] h-[293px] bg-[#FFFFFF] rounded-[13px] border-[1px] border-[#FFFFFF] relative text-center ' >
                        <h2 className='xl:mt-[57px] mt-[40px] mx-auto xl:text-[24px] text-[27px] xl:leading-[30px] leading-[42px] xl:font-normal font-bold libreNormal w-[228px]'>Hannah Schmitt</h2>
                        <p className='mt-[9px] text-[16px] xl:leading-[24px] leading-[22px] font-normal montserratNormal xl:w-[730px] md:w-[480px] w-[314px] mx-auto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div>
                        <img className='absolute left-0 xl:ml-[593px] lg:ml-[465px] md:ml-[350px] ml-[153px] w-[80px] h-[80px] xl:mt-[-40px] mt-[-58px]' src={img} alt="img" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full xl:mt-[113px] md:mt-[120px] mt-[260px] left-[-35px] md:left-0">
                    <div className='xl:w-[778px] md:w-[500px] w-[343px] mx-auto xl:h-[220px] md:h-[250px] h-[293px] bg-[#FFFFFF] rounded-[13px] border-[1px] border-[#FFFFFF] relative text-center ' >
                        <h2 className='xl:mt-[57px] mt-[40px] mx-auto xl:text-[24px] text-[27px] xl:leading-[30px] leading-[42px] xl:font-normal font-bold libreNormal w-[228px]'>Hannah Schmitt</h2>
                        <p className='mt-[9px] text-[16px] xl:leading-[24px] leading-[22px] font-normal montserratNormal xl:w-[730px] md:w-[480px] w-[314px] mx-auto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div>
                        <img className='absolute left-0 xl:ml-[593px] lg:ml-[465px] md:ml-[350px] ml-[153px] w-[80px] h-[80px] xl:mt-[-40px] mt-[-58px]' src={img} alt="img" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> 
            </div>
            <div className='xl:w-[1280px] w-full mx-auto xl:mt-[46px] lg:mt-[48px] md:mt-[35px] md:block hidden'>
                <img src={happy} alt="happy" />
            </div>
        </div>
    );
};

export default Review;