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
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const Signup = () => {
    const [value, setValue] = useState()
    return (
        <div class="flex items-center justify-center mx-auto md:mt-[123px]">
        <div class=" lg:w-[768px] md:w-[650px] w-full lg:h-[554px] relative z-[1] ">
            <div class="bg-[#FFEFD1] py-10 px-8 shadow-md w-full h-full md:border-[1px] border-[#1e281980]">
                <h2 class="lg:text-[60px] md:text-[60px] text-[32px] font-[700] text-center alegreyaBold">Sign Up Now</h2>
                <p className='text-center text-[18px] font-[400] mt-[30px] nunitoNormal'>Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet </p>
                <form className='xl:mt-[42px]'>
                  <div class=" lg:flex md:flex  block gap-[19px] justify-center items-center mt-[30px]">
                        <label class="block text-gray-700 text-[18px] font-[400] mb-2 w-[140px] nunitoNormal" for="password">Phone Number</label>
                        <PhoneInput  className="border-none  rounded-[10px] lg:w-[408px] md:w-[408px] w-full h-[50px] py-2 px-[36px] bg-white" type="text" id="number"
                            placeholder=" Phone Number"
                            defaultCountry='IN'
                            country="IN"
                            value={value}
                            onChange={setValue} />
                    </div>  
                    <div class="flex justify-center mt-[38px]">
                        <button class="main_btn w-[567px] h-[50px] text-white font-bold py-2 px-4 rounded-full"
                            type="submit">SIGN UP NOW!</button>
                    </div>  
                        
                    <h3 className='text-center my-5 nunitoNormal'>-OR-</h3>
                    <div className="lg:flex md:flex  block  gap-2 justify-center mb-10">
                        <button className='py-2 px-4 rounded-full bg-white md:w-[273px] w-full h-[50px] border border-[#1E2819] mb-4 flex items-center gap-[11px]'> <img src={img8} alt="img8" /><span className='nunitoNormal'>  Log In With Google </span> </button>
                        <button className='py-2 px-4 rounded-full bg-white md:w-[273px] w-full h-[50px] border border-[#1E2819] flex items-center gap-[11px]'> <img className='w' src={img9} alt="img9" /> <span className='nunitoNormal'> Log In With Facebook</span> </button>
                    </div>
                </form>
                
                
            </div>
        </div>
        <img src={img1} alt="img" className='absolute lg:mt-[-150px] lg:ml-[980px] md:mt-[-50px] md:ml-[700px] w-[92px] h-[90px] hidden lg:block' />
       <img src={img2} alt="img" className='absolute lg:mt-[450px] lg:mr-[800px] md:mt-[600px] md:mr-[600px] w-[184px] h-[153px] z-[1] hidden lg:block' />
        <img src={img3} alt="img"  className='absolute ml-[-850px] w-[534px] h-[574px]  md:hidden lg:block'/>
         <img src={img4} alt="img"  className='absolute mt-[445px] mr-[870px] w-[200px] h-[258px] md:hidden lg:block '/>
         <img src={img5} alt="img" className='absolute lg:mt-[550px] lg:ml-[800px] md:mt-[650px]  md:ml-[650px] lg:w-[147px] md:w-[147px] h-[136px] z-[1] hidden lg:block' />
        <img src={img6} alt="img" className='absolute  ml-[800px] w-[280px] h-[186px] z-[-1] hidden lg:block lg:w-[279px] lg:h-[185px]' />
          <img src={img7} alt="img"  className='absolute lg:mt-[-500px] md:mt-[-600px]  lg:mr-[450px] md:mr-[350px]'/> 
        
    </div>
    );
};

export default Signup;