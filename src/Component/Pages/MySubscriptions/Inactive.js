import React from 'react';
import product from '../../../assets/subscriptions/product.png';
import './Inactive.css';
import { FiEdit } from 'react-icons/fi'; 
import { AiOutlineClose } from 'react-icons/ai';

const Inactive = () => {
    return (
        <div>
            { /*============ Current Plan ===========*/ }
            <div className='xl:w-[1280px] mx-auto lg:pt-[102px]'>
                <div className='flex justify-between items-center px-6 xl:px-0' >
                    <h2 className='md:text-[45px] text-[30px] font-bold leading-[54px] alegreyaBold'>Recent Plan</h2>
                    <p className='text-[16px] font-bold leading-5 alegreyaBold text_gre uppercase'>Add New Plan</p>
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
                        
                            <label className="switch md:ml-[30%] ml-[40%] border-none">
                                <input type="checkbox" />
                                <span class="slider round"><p className='ml-[30px] text-[10px] pt-[3px]'>OFF</p></span>
                            </label>
                           
                            <div className='mt-2 flex items-center justify-center gap-2'>
                                <label className="cursor-pointer">
                                    <div type="checkbox" className="w-[17px] rounded-[2px] h-[15px] checkbox checkbox-success bg-[#EB5757] text-white border-none" >
                                        <AiOutlineClose />
                                    </div>
                                </label>
                             
                                <h2 className='lg:text-[25px] md:text-[18px] text-[28px] font-bold leading-[26px] alegreyaBold text-center'>Inactive</h2>
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
                            <label className="switch md:ml-[30%] ml-[40%] border-none">
                                <input type="checkbox" />
                                <span class="slider round"><p className='ml-[30px] text-[10px] pt-[3px]'>OFF</p></span>
                            </label>
                           
                            <div className='mt-2 flex items-center justify-center gap-2'>
                                <label className="cursor-pointer">
                                    <div type="checkbox" className="w-[17px] rounded-[2px] h-[15px] checkbox checkbox-success bg-[#EB5757] text-white border-none" >
                                        <AiOutlineClose />
                                    </div>
                                </label>
                             
                                <h2 className='lg:text-[25px] md:text-[18px] text-[28px] font-bold leading-[26px] alegreyaBold text-center'>Inactive</h2>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Inactive;