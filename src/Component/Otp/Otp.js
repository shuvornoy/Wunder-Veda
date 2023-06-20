import React from 'react';
import img2 from '../../assets/login/Berries-PNG-Clipart 2.png';
import img3 from '../../assets/login/Mantra00519 1.png';
import img4 from '../../assets/login/leaf-vegetable-herb-mint-44071e8c09ecd29ec2b62e5716eeb6d2 1.png';
import img5 from '../../assets/login/pngwing 1.png';
import img7 from '../../assets/login/slice-of-cucumber-isolated-png 1.png';
import { Link } from 'react-router-dom';



const Otp = () => {
    return (
        <div class="flex items-center justify-center mx-auto md:mt-[223px] mt-0">
        <div class=" lg:w-[768px] md:w-[650px] w-full lg:h-[449px] relative z-[1] ">
            <div class="bg-[#FFEFD1] py-10 px-8 shadow-md w-full h-full  md:border-[1px] border-[#1e281980]">
                <h2 class="lg:text-[60px] md:text-[60px] text-[32px] font-[700]  text-center alegreyaBold">Enter OTP Code</h2>
                <p className='text-center text-[18px] font-[400] my-[24px] nunitoNormal'>Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet</p>
                <form>
                    <div class="mb-4 mt-4 flex md:gap-[21px] gap-1 justify-center items-center">
                       <input className='xl:w-[98px] w-[50px] xl:h-[70px] h-[50px] bg-white rounded-[52px] items-start text-center' placeholder='0' type="text" />
                       <input className='xl:w-[98px] w-[50px] xl:h-[70px] h-[50px] bg-white rounded-[52px] items-start text-center' placeholder='0' type="text" />
                       <input className='xl:w-[98px] w-[50px] xl:h-[70px] h-[50px] bg-white rounded-[52px] items-start text-center' placeholder='0' type="text" />
                       <input className='xl:w-[98px] w-[50px] xl:h-[70px] h-[50px] bg-white rounded-[52px] items-start text-center' placeholder='0' type="text" />
                       <input className='xl:w-[98px] w-[50px] xl:h-[70px] h-[50px] bg-white rounded-[52px] items-start text-center' placeholder='0' type="text" />
                    </div>
                
                    <div class="flex justify-center mt-[63px]">
                            <Link to='/loginnow'>
                                 <button class="main_btn md:w-[567px] w-full h-[50px] text-white font-bold py-2 px-4 rounded-full alegreyaBold"
                            type="submit">SIGN UP NOW</button>
                            </Link>
                    </div>
                </form>
                
                
            </div>
        </div>
       <img src={img2} alt="img" className='absolute  lg:mt-[355px] lg:mr-[800px] md:mt-[355px] md:mr-[600px] w-[159px] h-[133px] z-[1] md:block lg:block hidden' />
        <img src={img3} alt="img"  className='absolute ml-[-850px] w-[534px] h-[574px]  md:hidden lg:block'/>
         <img src={img4} alt="img"  className='absolute mt-[200px] lg:mr-[760px] md:mr-[600px] w-[180px] h-[180px] hidden md:block '/>
         <img src={img5} alt="img" className='absolute lg:mt-[-160px]  lg:ml-[800px] md:mt-[-160px]  md:ml-[650px] lg:w-[147px] md:w-[147px] h-[136px] z-[1] md:block lg:block hidden' />
          <img src={img7} alt="img"  className='absolute lg:mt-[-400px] md:mt-[-400px]  lg:mr-[450px] md:mr-[350px]'/> 
        
    </div>
    );
};

export default Otp;