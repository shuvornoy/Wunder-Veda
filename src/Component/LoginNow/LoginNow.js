import React from 'react';
import img2 from '../../assets/login/Berries-PNG-Clipart 2.png';
import img3 from '../../assets/login/Mantra00519 1.png';
import img4 from '../../assets/login/leaf-vegetable-herb-mint-44071e8c09ecd29ec2b62e5716eeb6d2 1.png';
import img5 from '../../assets/login/pngwing 1.png';
import img7 from '../../assets/login/slice-of-cucumber-isolated-png 1.png';
import img10 from '../../assets/login/i.png';
const LoginNow = () => {
    return (
        <div class="flex items-center justify-center mx-auto md:mt-[223px]">
        <div class=" lg:w-[768px] md:w-[650px] w-full lg:h-[449px] relative z-[1] ">
            <div class="bg-[#FFEFD1] py-8 px-8 shadow-md w-full h-full  md:border-[1px] border-[#1e281980]">
                <h2 class="lg:text-[60px] md:text-[60px] text-[32px] font-[700]  text-center alegreyaBold">Log In Now!</h2>
                <p className='text-center text-[18px] font-[400] my-[20px] nunitoNormal'>Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet</p>
                <form>
                    <div class="mb-4 mt-4 lg:flex md:flex  block gap-[19px] justify-center items-center">
                        <label class="block text-gray-700 text-[18px] font-[400] mb-2 w-[140px] nunitoNormal" for="username">Password</label>
                        <input class="border border-[#1E2819] rounded-full lg:w-[408px] md:w-[408px] w-full h-[50px] py-2 px-[36px]" type="password" id="Password"
                                placeholder="Password" />
                            <img className='w-[16px] h-[12px] absolute lg:right-[135px] md:right-[75px] right-[52px] mt-[-30px] md:mt-0' src={img10} alt="img10" />
                    </div>
                    <div class="mb-4 lg:flex md:flex block gap-[19px] justify-center items-center mt-[30px]">
                        <label class="block text-gray-700 text-[17px] font-[400] mb-2 w-[140px] nunitoNormal" for="username">Confirm Password</label>
                        <input class="border border-[#1E2819] rounded-full lg:w-[408px] md:w-[408px] w-full h-[50px] py-2 px-[36px]" type="Password" id="Password"
                                placeholder="Confirm Password" />
                            <img className='w-[16px] h-[12px] absolute lg:right-[135px] md:right-[75px] right-[52px] mt-[-30px] md:mt-0' src={img10} alt="img10" />
                    </div>
                      
                
                    <div class="flex justify-center mt-[38px]">
                        <button class="main_btn w-[567px] h-[50px] text-white font-bold py-2 px-4 rounded-full text-[18px] alegreyaBold"
                            type="submit">CONTINUE TO LOG IN!</button>
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

export default LoginNow;