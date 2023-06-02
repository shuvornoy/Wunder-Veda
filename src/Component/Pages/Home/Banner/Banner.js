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
        <div className='xl:h-[805px] h-[932px] bg_banner px-6 xl:px-0'>
          <div className="xl:w-[1280px] w-full lg:flex block mx-auto justify-between">
              <div className="">
                <div className='xl:w-[550px] w-[325px] text-[#1E2819] xl:pt-[158px] pt-[54px]'>
                <h2 className="xl:text-[36px] text-[23px] font-normal leading-[45px] alegreyaNormal">Experience the Timeless Wisdom of</h2>
                  <h1 className="font-bold xl:text-[72px] lg:text-[25px] md:text-[18px] text-[57px] xl:leading-[85px] leading-[66px] alegreyaBold">
                    Holistic Wellness & Vibrant Living
                  </h1>
                </div>
                <p className="xl:w-[502px] w-[325px] xl:text-[18px] text-[16px] font-[400] text-[#1E2819] mt-[20px] leading-[24px] nunitoNormal">
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
              <img className='xl:w-[508px] xl:h-[680px] xl:mt-[100px] relative' src={back} alt="back" />
              <img className='xl:w-[625px] xl:h-[694px] xl:top-[294px] xl:right-[350px] absolute' src={main} alt="main" />
              <img className='xl:w-[682px] xl:h-[370px] xl:top-[658px] xl:right-[284px] absolute' src={pngegg} alt="pngegg" />
              <img className='xl:w-[682px] xl:h-[370px] xl:top-[658px] xl:right-[284px] absolute' src={pngegg} alt="pngegg" />
              <img className='absolute xl:w-[137px] w-[71px] xl:h-[136px] h-[71px] z-10 xl:top-[410px] top-[688px] xl:right-[740px] right-[250px]' src={logo} alt="logo" />
            </div>

            {/* <div className='xl:mt-[190px] mt-[60px] xl:ml-[653px] ml-[60px] bg_img xl:w-[470px] w-[237px] xl:h-[495px] h-[249px] absolute'>
              <img src={back} alt="back" />
                     <div className=''>
                        <img className='xl:w-[383px] w-[350px] xl:h-[622px] h-[381px] xl:mt-[-20px] mt-[-77px] xl:ml-[15px] ml-[-10px] relative z-10' src={banner} alt="achievements" />
                    </div>
                     <img className='absolute xl:w-[517px] w-[260px] xl:h-[345px] h-[173px] xl:top-[115px] top-[34px] xl:right-[160px] right-[80px]' src={herbs} alt="herbs" />
                </div> */}

            </div>
            {/* <div>
              <img className='absolute xl:w-[682px] w-[343px] xl:h-[343px] h-[172px] z-10 xl:top-[676px] top-[855px] xl:right-[260px] right-0' src={pngegg} alt="pngegg" />
              <img className='absolute xl:w-[137px] w-[71px] xl:h-[136px] h-[71px] z-10 xl:top-[400px] top-[688px] xl:right-[720px] right-[250px]' src={logo} alt="logo" />
            </div> */}
            {/* <div className='absolute xl:w-[355px] w-[178px] xl:h-[100px] h-[63px] box_banner aboutShadow rounded-[13px] xl:top-[444px] top-[736px] xl:right-[237px] right-[10px] z-20'>
                <div className='w-full h-full flex justify-center items-center xl:gap-4 gap-[2px]'>
                        <div className='xl:w-[43px] w-[28px] xl:h-[44px] h-[28px] bg-[#CED0C8] rounded-full flex justify-start items-center'>
                            <img className=' xl:w-[20px] w-[12px] xl:h-[16px] h-[12px] xl:ml-[13px] ml-[8px]' src={icons} alt="icons" />
                        </div>
                        <p className='xl:text-[18px] text-[13px] font-medium xl:leading-[24px] leading-[14px] xl:w-[230px] w-[128px] nunitoNormal'>Lorem ipsum dolor sit amet, consectetuer nisl ut.</p>
                </div>
            </div> */}
        </div>
      </>
    );
};

export default Banner;