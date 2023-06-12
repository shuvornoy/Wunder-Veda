import React, { useState } from 'react';
import img1 from '../../assets/login/Berries-PNG-Clipart 1.png';
import img2 from '../../assets/login/Berries-PNG-Clipart 2.png';
import img3 from '../../assets/login/Mantra00519 1.png';
import img4 from '../../assets/login/leaf-vegetable-herb-mint-44071e8c09ecd29ec2b62e5716eeb6d2 1.png';
import img5 from '../../assets/login/pngwing 1.png';
import img6 from '../../assets/login/pngwing 2.png';
import img7 from '../../assets/login/slice-of-cucumber-isolated-png 1.png';
import img8 from '../../assets/login/g.png';
import img9 from '../../assets/login/facebook-512 2.png';
import img10 from '../../assets/login/i.png';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const Login = () => {
    const [value, setValue] = useState()
    return (
        <div class="flex items-center justify-center mx-auto md:mt-[123px]">
        <div class=" lg:w-[768px] md:w-[650px] w-full lg:h-[796px] relative z-[1] ">
            <div class="bg-[#FFEFD1] py-10 px-8 shadow-md w-full h-full  md:border-[1px] border-[#1e281980] mt-[30px]">
                <h2 class="lg:text-[60px] text-[32px] font-[700]  text-center alegreyaBold">Welcome!</h2>
                <p className='text-center text-[18px] font-[400] my-[38px] nunitoNormal'>Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet </p>
                <form>
                    <div class="mb-4 mt-4 lg:flex md:flex block gap-14 justify-center items-center">
                        <label class="block text-gray-700 text-[18px] font-[400] mb-2 nunitoNormal" for="username">User name</label>
                        <input class="border-none rounded-[10px] lg:w-[408px] md:w-[408px] w-full h-[50px] py-2 px-[36px]" type="text" id="username"
                                placeholder="username" />
                    </div>
                    <div class=" lg:flex md:flex  block  gap-16 justify-center items-center mt-[30px]">
                        <label class="block text-gray-700 text-[18px] font-[400] mb-2 nunitoNormal" for="password">Password</label>
                         <input  class="border-none rounded-[10px] lg:w-[408px] md:w-[408px] w-full h-[50px] py-2 px-[36px]" type="password" id="password"
                                placeholder=" password" />
                         <img className='w-[16px] h-[12px] absolute lg:right-[135px] md:right-[75px] right-[52px] mt-[-30px] md:mt-0' src={img10} alt="img10" />
                    </div>
                        {/*======= phone number============*/}
                     <div class=" lg:flex md:flex  block gap-6 justify-center items-center mt-[30px]">
                        <label class="block text-gray-700 text-[18px] font-[400] mb-2  nunitoNormal" for="password">Phone Number</label>
                        <PhoneInput  className="border-none rounded-[10px] lg:w-[408px] md:w-[408px] w-full h-[50px] py-2 px-[36px] bg-white" type="text" id="number"
                            placeholder=" Phone Number"
                            defaultCountry='IN'
                            country="IN"
                            value={value}
                            onChange={setValue} />
                        </div>  
                        
                        {/*========Address =============*/}
                    <div class=" lg:flex md:flex  block  gap-16 justify-center items-center mt-[30px]">
                        <label class="block text-gray-700 text-[18px] font-[400] mb-2 nunitoNormal" for="password">Address</label>
                         <input  class="border-none rounded-[10px] lg:w-[408px] md:w-[408px] w-full h-[121px] py-2 px-[36px] bg-white" type="text" id="address" />
                    </div>
                        
                    <div class="flex justify-center mt-[49px]">
                        <button class="main_btn w-[567px] h-[50px] text-white font-bold py-2 px-4 rounded-full"
                            type="submit">SIGN UP NOW!</button>
                    </div>
                </form>
                
                
            </div>
        </div>
        <img src={img1} alt="img" className='absolute lg:mt-[-100px] lg:ml-[900px] md:mt-[-50px] md:ml-[700px] w-[92px] h-[90px] ' />
       <img src={img2} alt="img" className='absolute lg:mt-[600px] lg:mr-[800px] md:mt-[795px] md:mr-[600px] w-[184px] h-[153px] z-[1] md:block lg:block hidden' />
        <img src={img3} alt="img"  className='absolute ml-[-850px] w-[534px] h-[574px]  md:hidden lg:block'/>
         <img src={img4} alt="img"  className='absolute mt-[650px] mr-[850px] w-[200px] h-[258px] md:hidden lg:block '/>
         <img src={img5} alt="img" className='absolute lg:mt-[860px]  lg:ml-[800px] md:mt-[780px]  md:ml-[650px] lg:w-[147px] md:w-[147px] h-[136px] z-[1] md:block lg:block hidden' />
        <img src={img6} alt="img" className='absolute mt-[100px]  ml-[800px] w-[280px] h-[186px] z-[-1] hidden lg:block' />
          <img src={img7} alt="img"  className='absolute lg:mt-[-700px] md:mt-[-600px]  lg:mr-[450px] md:mr-[350px]'/> 
        
    </div>
    );
};

export default Login;


