import React from 'react';
import img from '../../../assets/order/order.png'
import img1 from '../../../assets/checkout/left/1.png'
import img2 from '../../../assets/checkout/left/2.png'
import img3 from '../../../assets/checkout/left/3.png'
import img4 from '../../../assets/checkout/right/4.png'
import img5 from '../../../assets/checkout/right/5.png'
import img6 from '../../../assets/checkout/right/6.png'
import img7 from '../../../assets/checkout/right/7.png'
import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from 'react-icons/md'; 
import { FiEdit } from 'react-icons/fi'; 

const MyOrder = () => {
    return (
        <div className='mt-[102px]'>
            <div className='xl:h-[370px] lg:h-[196px] md:h-[148px] h-[284px] bg-cover md:bg-contain xl:w-full w-full  checkout_banner flex'>
                <h2 className='w-full h-full flex items-center justify-center xl:text-[80px] text-[50px] xl:leading-[90px] leading-[55px] font-bold text-[#1E2819] alegreyaBold'>My Orders</h2>
               
            </div>
            <div className="mx-auto xl:w-[1263px] w-full lg:mt-[113px]">
                <p className='text-end pb-[15px] text-[18px] font-medium leading-[24px] nunitoMedium flex items-center justify-end'><span>Sort by: All Orders</span> <span><MdKeyboardArrowDown /></span></p>
            <div className='w-full order_details  border-solid border-[1px] border-[#000]'>
                <h3 className='text-[30px] font-[700] p-4 alegreyaBold'>Your Recent Orders</h3>
                    
                <div className='w-full md:h-[226px] bg-[#FBD895] mt-[22px] md:flex block xl:gap-[39px] items-center py-[50px] md:py-0'>
                    <div>
                        <img className='lg:h-[189px] md:h-[150px]' src={img} alt="img" />
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
                            <p className='md:text-[14px] text-[18px] text-center font-medium leading-6 nunitoMedium'>Status:</p>
                            <h2 className='lg:text-[25px] md:text-[18px] text-[28px] font-bold leading-[26px] alegreyaBold text-center'>Every Week</h2>
                        </div>
                        <div className='md:w-[147px] w-full mt-[16px] md:mt-0'>
                            <p className='md:text-[14px] text-[18px] text-center font-medium leading-6 nunitoMedium'>Delivery Date:</p>
                            <h2 className='lg:text-[25px] md:text-[18px] text-[28px] font-bold leading-[26px] alegreyaBold text-center'>May 30, 2023</h2>
                        </div>
                        <div className='md:w-[178px] mx-auto w-full mt-[16px] md:mt-0'>
                            <p className='text-[14px] text-center font-medium leading-6 nunitoMedium'>Payment Mode: </p>
                              <h2 className='lg:text-[25px] md:text-[18px] text-[28px] font-bold leading-[26px] alegreyaBold text-center'>Cash On Delivery</h2>
                          
                        </div>
                    </div>
                    
                </div>
           {/* =========================== */}
           <div className='w-full md:h-[226px] md:flex block xl:gap-[39px] items-center py-[50px] md:py-0'>
                    <div>
                        <img className='lg:h-[189px] md:h-[150px]' src={img} alt="img" />
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
                            <p className='md:text-[14px] text-[18px] text-center font-medium leading-6 nunitoMedium'>Status:</p>
                            <h2 className='lg:text-[25px] md:text-[18px] text-[28px] font-bold leading-[26px] alegreyaBold text-center'>Every Week</h2>
                        </div>
                        <div className='md:w-[147px] w-full mt-[16px] md:mt-0'>
                            <p className='md:text-[14px] text-[18px] text-center font-medium leading-6 nunitoMedium'>Delivery Date:</p>
                            <h2 className='lg:text-[25px] md:text-[18px] text-[28px] font-bold leading-[26px] alegreyaBold text-center'>May 30, 2023</h2>
                        </div>
                        <div className='md:w-[178px] mx-auto w-full mt-[16px] md:mt-0'>
                            <p className='text-[14px] text-center font-medium leading-6 nunitoMedium'>Payment Mode: </p>
                              <h2 className='lg:text-[25px] md:text-[18px] text-[28px] font-bold leading-[26px] alegreyaBold text-center'>Cash On Delivery</h2>
                          
                        </div>
                    </div>
                    
                </div>
        </div>

        <p className='text-end pb-[15px] text-[18px] font-medium leading-[24px] nunitoMedium flex items-center justify-start xl:pl-0 pl-6 '><span><MdKeyboardArrowLeft /></span><span>Continue shopping</span> </p>


        <div className='w-full order_details  border-solid border-[1px] border-[#000] lg:mt-[62px] mt-[40px]'>
           <h3 className='text-[30px] font-[700] p-4'>Your Recent Orders</h3>
           <div className='w-full md:h-[226px] bg-[#FBD895] mt-[22px] md:flex block xl:gap-[39px] items-center py-[50px] md:py-0'>
                    <div>
                        <img className='lg:h-[189px] md:h-[150px]' src={img} alt="img" />
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
                            <p className='md:text-[14px] text-[18px] text-center font-medium leading-6 nunitoMedium'>Status:</p>
                            <h2 className='lg:text-[25px] md:text-[18px] text-[28px] font-bold leading-[26px] alegreyaBold text-center'>Every Week</h2>
                        </div>
                        <div className='md:w-[147px] w-full mt-[16px] md:mt-0'>
                            <p className='md:text-[14px] text-[18px] text-center font-medium leading-6 nunitoMedium'>Delivery Date:</p>
                            <h2 className='lg:text-[25px] md:text-[18px] text-[28px] font-bold leading-[26px] alegreyaBold text-center'>May 30, 2023</h2>
                        </div>
                        <div className='md:w-[178px] mx-auto w-full mt-[16px] md:mt-0'>
                            <p className='text-[14px] text-center font-medium leading-6 nunitoMedium'>Payment Mode: </p>
                              <h2 className='lg:text-[25px] md:text-[18px] text-[28px] font-bold leading-[26px] alegreyaBold text-center'>Cash On Delivery</h2>
                          
                        </div>
                    </div>
                    
                </div>

          
           </div>

          <p className='text-end pb-[15px] text-[18px] font-medium leading-[24px] nunitoMedium flex items-center justify-start xl:pl-0 pl-6 '><span><MdKeyboardArrowLeft /></span><span>Continue shopping</span> </p>
        
        
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

export default MyOrder;