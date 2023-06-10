import React from 'react';
import product from '../../../assets/subscriptions/product.png';
import bottle from '../../../assets/subscriptions/Group.png';
import './MySubscriptions.css';
import { FiEdit } from 'react-icons/fi'; 
import img1 from '../../../assets/checkout/left/1.png'
import img2 from '../../../assets/checkout/left/2.png'
import img3 from '../../../assets/checkout/left/3.png'
import img4 from '../../../assets/checkout/right/4.png'
import img5 from '../../../assets/checkout/right/5.png'
import img6 from '../../../assets/checkout/right/6.png'
import img7 from '../../../assets/checkout/right/7.png'
import Inactive from './Inactive';

const MySubscriptions = () => {
    return (
        <div className=''>
            { /*============ Banner start ===========*/}
            <div className='xl:h-[370px] lg:h-[196px] md:h-[148px] h-[284px] bg-cover md:bg-contain xl:w-full w-full subscriptions flex'>
                <h2 className='w-full h-full flex items-center justify-center xl:text-[80px] text-[50px] xl:leading-[90px] leading-[55px] font-bold text-[#1E2819] alegreyaBold text-center'>My Subscriptions</h2>
               
            </div>
            
            { /*============ Banner end ===========*/}
            
             { /*============ Current Plan ===========*/ }
            <div className='xl:w-[1280px] mx-auto lg:pt-[102px]'>
                <div className='flex justify-between items-center px-6 xl:px-0' >
                    <h2 className='md:text-[45px] text-[30px] font-bold leading-[54px] alegreyaBold'>Current Plan</h2>
                    <p className='text-[16px] font-bold leading-5 alegreyaBold text_gre'>EDIT PLAN</p>
                </div>
                <div className='xl:w-[1292px] lg:w-full md:h-[226px] border-[1px] border-[#1E2819] bg-[#FBD895] mt-[22px] md:flex block xl:gap-[39px] items-center py-[50px] md:py-0'>
                    <div>
                        <img className='lg:h-[189px] md:h-[150px]' src={product} alt="product" />
                    </div>
                    <div className='md:flex block xl:gap-[60px] lg:gap-[20px] md:gap-[10px] px-6 md:px-0'>
                        <div className='lg:w-[324px] md:w-[180px] w-full'>
                            <h2 className='lg:text-[26px] md:text-[18px] text-[30px] font-bold leading-[28px] alegreyaNormal'> Product Name Lorem Ipsum Dolor Sit Amit</h2>
                            <div className='flex justify-between items-center'>
                                <div className='nunitoMedium'>
                                    <p className='text-[18px] leading-[24px] font-[500] mt-[10px]'>$361.00</p>
                                    <p  className='text-[12px] leading-[24px] font-[500]'>Qty: 1</p>
                                </div>
                                <div className='mr-[30px]'>
                                    <FiEdit size={24} />            
                                </div> 
                            </div>
                        </div>
                        <div className='md:w-[147px] w-full'>
                            <p className='md:text-[14px] text-[18px] text-center font-medium leading-6 nunitoMedium'>Delivery:</p>
                            <h2 className='lg:text-[25px] md:text-[18px] text-[28px] font-bold leading-[26px] alegreyaBold text-center'>Every Week</h2>
                        </div>
                        <div className='md:w-[147px] w-full mt-[16px] md:mt-0'>
                            <p className='md:text-[14px] text-[18px] text-center font-medium leading-6 nunitoMedium'>Last Delivery Date::</p>
                            <h2 className='lg:text-[25px] md:text-[18px] text-[28px] font-bold leading-[26px] alegreyaBold text-center'>May 30, 2023</h2>
                        </div>
                        <div className='md:w-[147px] mx-auto w-full mt-[16px] md:mt-0'>
                            <p className='text-[14px] text-center font-medium leading-6 nunitoMedium'>Statusp </p>
                            <label class="toggle md:ml-[30%] ml-[40%] border-none">
                                <input class="toggle-checkbox" type="checkbox" />
                                <div class="toggle-switch">
                                    <span className='ml-2 text-[14px] font-medium alegreyaMedium'>ON</span> 
                                </div>
                            </label>
                            <div className='mt-2 flex items-center justify-center gap-2'>
                                <label className="cursor-pointer label">
                                    <input type="checkbox" className="w-[17px] rounded-[2px] h-[15px] checkbox checkbox-success bg-[#219653]] text-white" />
                                </label>
                             
                                <h2 className='lg:text-[25px] md:text-[18px] text-[28px] font-bold leading-[26px] alegreyaBold text-center'>Active</h2>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='xl:w-[1280px] mx-auto mt-[24px]'>
                <div className='xl:w-[1292px] lg:w-full md:h-[226px] border-[1px] border-[#1E2819] bg-[#FBD895] mt-[22px] md:flex block xl:gap-[39px] items-center py-[50px] md:py-0'>
                    <div>
                        <img className='lg:h-[189px] md:h-[150px]' src={product} alt="product" />
                    </div>
                    <div className='md:flex block xl:gap-[60px] lg:gap-[20px] md:gap-[10px] px-6 md:px-0'>
                        <div className='lg:w-[324px] md:w-[180px] w-full'>
                            <h2 className='lg:text-[26px] md:text-[18px] text-[30px] font-bold leading-[28px] alegreyaNormal'> Product Name Lorem Ipsum Dolor Sit Amit</h2>
                            <div className='flex justify-between items-center'>
                                <div className='nunitoMedium'>
                                    <p className='text-[18px] leading-[24px] font-[500] mt-[10px]'>$361.00</p>
                                    <p  className='text-[12px] leading-[24px] font-[500]'>Qty: 1</p>
                                </div>
                                <div className='mr-[30px]'>
                                    <FiEdit size={24} />            
                                </div> 
                            </div>
                        </div>
                        <div className='md:w-[147px] w-full'>
                            <p className='md:text-[14px] text-[18px] text-center font-medium leading-6 nunitoMedium'>Delivery:</p>
                            <h2 className='lg:text-[25px] md:text-[18px] text-[28px] font-bold leading-[26px] alegreyaBold text-center'>Every Week</h2>
                        </div>
                        <div className='md:w-[147px] w-full mt-[16px] md:mt-0'>
                            <p className='md:text-[14px] text-[18px] text-center font-medium leading-6 nunitoMedium'>Last Delivery Date::</p>
                            <h2 className='lg:text-[25px] md:text-[18px] text-[28px] font-bold leading-[26px] alegreyaBold text-center'>May 30, 2023</h2>
                        </div>
                        <div className='md:w-[147px] mx-auto w-full mt-[16px] md:mt-0'>
                            <p className='text-[14px] text-center font-medium leading-6 nunitoMedium'>Statusp </p>
                            <label class="toggle md:ml-[30%] ml-[40%] border-none">
                                <input class="toggle-checkbox" type="checkbox" />
                                <div class="toggle-switch">
                                    <span className='ml-2 text-[14px] font-medium alegreyaMedium'>ON</span> 
                                </div>
                            </label>
                            <div className='mt-2 flex items-center justify-center gap-2'>
                                <label className="cursor-pointer label">
                                    <input type="checkbox" className="w-[17px] rounded-[2px] h-[15px] checkbox checkbox-success bg-[#219653]] text-white" />
                                </label>
                             
                                <h2 className='lg:text-[25px] md:text-[18px] text-[28px] font-bold leading-[26px] alegreyaBold text-center'>Active</h2>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            { /*============ Recent Plan ===========*/ }
            <div className='mt-[107px]'>
                <Inactive />
            </div>

            <div className='lg:mt-[100px] mt-[50px] px-6 xl:px-0'>
                <h2 className='text-center lg:text-[60px] md:text-[50px] text-[30px] leading-[62px] font-bold alegreyaBold'>Available Plans</h2>
                <div className='xl:w-[1280px] w-full mx-auto gap-[23px] lg:flex block'>
                    <div className='border-[1px] border-[#1E2819] rounded-[10px] mx-auto xl:w-[415px] lg:w-[300px] w-full xl:h-[566px] lg:h-[420px] md:h-[500px] mt-[65px]'>
                        <div className='mt-[46px] flex justify-center'>
                            <img className='xl:h-[261px] lg:h-[180px]' src={bottle} alt="bottle" />
                        </div>
                        <h2 className='font-bold xl:text-[40px] lg:text-[30px] md:text-[40px] xl:leading-[46px] lg:leading-9 xl:px-[43px] alegreyaBold xl:text-start text-center'>Product Name Lorem Ipsum Dolor Sit Amit</h2>
                        <div className='flex items-center justify-between pt-[27px] xl:px-[43px] px-6'>
                            <div>
                                <p className='leading-[35px] xl:text-[26px] md:text-[20px] text-[18px] font-medium nunitoMedium'>$361.00</p>
                                <p className='md:text-[17px] text-[15px] leading-[35.42px] font-medium nunitoMedium'>Every Week</p>
                            </div>
                            <div>
                                <button className='xl:w-[171px] lg:w-[100px] md:w-[171px] w-[100px] h-[43px] text-white text-[16px] leading-[44px] font-bold alegreyaBold main_btn rounded-[50px]'>SUBSCRIBE NOW</button>
                            </div>
                        </div>

                    </div>

                    <div className='border-[1px] border-[#1E2819] rounded-[10px] mx-auto xl:w-[415px] lg:w-[300px] w-full xl:h-[566px] lg:h-[420px] md:h-[500px] mt-[65px]'>
                        <div className='mt-[46px] flex justify-center'>
                            <img className='xl:h-[261px] lg:h-[180px]' src={bottle} alt="bottle" />
                        </div>
                        <h2 className='font-bold xl:text-[40px] lg:text-[30px] md:text-[40px] xl:leading-[46px] lg:leading-9 xl:px-[43px] alegreyaBold xl:text-start text-center'>Product Name Lorem Ipsum Dolor Sit Amit</h2>
                        <div className='flex items-center justify-between pt-[27px] xl:px-[43px] px-6'>
                            <div>
                                <p className='leading-[35px] xl:text-[26px] md:text-[20px] text-[18px] font-medium nunitoMedium'>$361.00</p>
                                <p className='md:text-[17px] text-[15px] leading-[35.42px] font-medium nunitoMedium'>Every Week</p>
                            </div>
                            <div>
                                <button className='xl:w-[171px] lg:w-[100px] md:w-[171px] w-[100px] h-[43px] text-white text-[16px] leading-[44px] font-bold alegreyaBold main_btn rounded-[50px]'>SUBSCRIBE NOW</button>
                            </div>
                        </div>

                    </div>

                    <div className='border-[1px] border-[#1E2819] rounded-[10px] mx-auto xl:w-[415px] lg:w-[300px] w-full xl:h-[566px] lg:h-[420px] md:h-[500px] mt-[65px]'>
                        <div className='mt-[46px] flex justify-center'>
                            <img className='xl:h-[261px] lg:h-[180px]' src={bottle} alt="bottle" />
                        </div>
                        <h2 className='font-bold xl:text-[40px] lg:text-[30px] md:text-[40px] xl:leading-[46px] lg:leading-9 xl:px-[43px] alegreyaBold xl:text-start text-center'>Product Name Lorem Ipsum Dolor Sit Amit</h2>
                        <div className='flex items-center justify-between pt-[27px] xl:px-[43px] px-6'>
                            <div>
                                <p className='leading-[35px] xl:text-[26px] md:text-[20px] text-[18px] font-medium nunitoMedium'>$361.00</p>
                                <p className='md:text-[17px] text-[15px] leading-[35.42px] font-medium nunitoMedium'>Every Week</p>
                            </div>
                            <div>
                                <button className='xl:w-[171px] lg:w-[100px] md:w-[171px] w-[100px] h-[43px] text-white text-[16px] leading-[44px] font-bold alegreyaBold main_btn rounded-[50px]'>SUBSCRIBE NOW</button>
                            </div>
                        </div>

                    </div>
                
                   
                </div>
            </div>



            <div className='xl:block hidden'>
                <img className='absolute top-[704px]' src={img1} alt="img1" />
                <img className='absolute top-[870px] left-[43px]' src={img2} alt="img2" />
                <img className='absolute top-[950px] left-[57px]' src={img3} alt="img3" />
                <img className='absolute top-[605px] left-[1690px]' src={img4} alt="img4" />
                <img className='absolute top-[605px] left-[1690px]' src={img4} alt="img4" />
                <img className='absolute top-[749px] left-[1700px]' src={img5} alt="img5" />
                <img className='absolute top-[749px] left-[1814px]' src={img6} alt="img6" />
                <img className='absolute top-[787px] right-0' src={img7} alt="img7" />
            </div>
        </div>
    );
};

export default MySubscriptions;