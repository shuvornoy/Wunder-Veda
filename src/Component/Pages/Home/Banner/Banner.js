import React from 'react';
import phone from '../../../../assets/banner/phone.png'
// import rectangle from '../../../../assets/banner/Rectangle.png'
import banner from '../../../../assets/banner/1.png'
import herbs from '../../../../assets/banner/herbs.png'
import pngegg from '../../../../assets/banner/pngegg.png'
import achievements from '../../../../assets/achievements/achievements.png'
import back from '../../../../assets/banner/Rectangle.png';
import main from '../../../../assets/banner/main.png';
import logo from '../../../../assets/banner/logo-i.png';
import icons from '../../../../assets/nutrition/icon.png';
import './Banner.css'
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
      <>
        <div className='xl:h-[805px] lg:h-[700px] md:h-[610px] h-[1050px]  bg_banner px-6 xl:px-0 mt-[102px]'>
          <div className="xl:w-[1280px] w-full md:flex block mx-auto justify-between ">
              <div className="">
                <div className='xl:w-[550px] lg:w-[400px] w-[325px] text-[#1E2819] xl:pt-[158px] pt-[54px]'>
                <h2 className="xl:text-[36px] lg:text-[28px] text-[23px] font-bold leading-[45px] alegreyaNormal">Experience the Timeless Wisdom of</h2>
                  <h1 className="font-bold xl:text-[72px] lg:text-[35px] md:text-[35px] text-[50px] xl:leading-[85px] md:leading-[50px] leading-[66px] alegreyaBold">
                    Holistic Wellness & Vibrant Living
                  </h1>
                </div>
                <p className="xl:w-[502px] lg:w-[420px] w-[325px] xl:text-[18px] text-[16px] font-[400] text-[#1E2819] mt-[20px] leading-[24px] nunitoNormal">
                Habitasse platea dictumst quisque sagittis purus sit. Dignissim enim sit amet venenatis. In est ante in nibh mauris cursus mattis.
                </p>
              <Link to='addtocard'>
                <button className="w-[132px] h-[45px] rounded-[50px] my-[42px] text-white text-[16px] font-bold main_btn uppercase alegreyaNormal">
                    Shop Now!
                  </button>
              </Link>
                <p className=" text-[18px] font-normal leading-[24px] text-[#224842] w-[284px] nunitoNormal md:block hidden">
                  Our support team is available 24/7 to resolve any product
                  issues
                </p>
                <div className="md:flex hidden justify-start items-center gap-2 mt-6 nunitoNormal ">
                  <div className=" flex justify-center items-center w-[37px] h-[37px] rounded-[50%] bg-[#1E1E1E]">
                    <img src={phone} alt="cup" />
                  </div>
                  <div className="leading-[24px] text-[#224842] ">
                    <h2 className="text-[14px] font-normal">Phone Number</h2>
                    <p className="text-[16px] font-bold">+91 33444555</p>
                  </div>
                </div>
            </div>

            <div>
             
              <img className='xl:w-[625px] lg:w-[474px] md:w-[380px] w-[356px] xl:h-[694px] lg:h-[500px] md:h-[400px] h-[381px] xl:top-[294px] md:top-[230px] top-[623px] xl:right-[350px] absolute z-10' src={main} alt="main" />
              <img className='xl:w-[682px] lg:w-[480px] md:w-[416px] w-[365px] xl:h-[370px] lg:h-[330px] md:h-[285px] h-[260px] xl:top-[658px] lg:top-[490px] md:top-[431px] top-[830px] xl:right-[284px] lg:right-[28px] absolute z-20' src={pngegg} alt="pngegg" />
              <img className='absolute xl:w-[137px] lg:w-[100px] w-[71px] xl:h-[136px] lg:h-[100px] h-[71px] z-10 xl:top-[410px] lg:top-[316px] md:top-[300px] top-[688px] xl:right-[740px] lg:right-[350px] md:right-[280px] right-[250px]' src={logo} alt="logo" />
              <img className='absolute xl:w-[517px] lg:w-[300px] md:w-[220px] w-[260px] xl:h-[345px] lg:h-[280px] md-[300px] h-[173px] xl:top-[400px] lg:top-[300px] md:top-[300px] top-[680px] xl:right-[525px] lg:right-[240px] md:right-[200px] right-[120px]' src={herbs} alt="herbs" />
            </div>
            </div>
            <div className='absolute xl:w-[355px] lg:w-[240px] w-[178px] xl:h-[100px] lg:h-[80px] h-[63px] box_banner aboutShadow rounded-[13px] xl:top-[444px] lg:top-[340px] md:top-[320px] top-[736px] xl:right-[262px] right-[10px] z-20'>
                <div className='w-full h-full flex justify-center items-center xl:gap-4 gap-[2px]'>
                        <div className='xl:w-[43px] lg:w-[35px] w-[28px] xl:h-[44px] lg:h-[35px] h-[28px] bg-[#CED0C8] rounded-full flex justify-start items-center'>
                            <img className=' xl:w-[20px] lg:w-[14px] w-[12px] xl:h-[16px] lg:h-[14px] h-[12px]  xl:ml-[13px] lg:ml-[12px] ml-[8px]' src={icons} alt="icons" />
                        </div>
                        <p className='xl:text-[18px] lg:text-[15px] text-[13px] font-medium xl:leading-[24px] lg:leading-[22px] leading-[14px] xl:w-[230px] lg:w-[180px] w-[128px] nunitoNormal'>Lorem ipsum dolor sit amet, consectetuer nisl ut.</p>
                </div>
            </div>
        </div>
      </>
    );
};

export default Banner;