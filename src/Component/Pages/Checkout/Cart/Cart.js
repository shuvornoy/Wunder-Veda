import React from 'react';
import './Cart.css'
import img from '../../../../assets/checkout/cart/check.png'
import { BsShieldFillCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Cart = () => {
    return (
        <div>
            <div className=' xl:h-[370px] xl:w-full w-[390px] h-[284px] checkout_banner'>
            <h2 className='w-full h-full flex items-center justify-center xl:text-[80px] text-[50px] xl:leading-[90px] leading-[55px] font-bold text-[#1E2819] alegreyaBold'>Cart</h2>
            </div>
              <div className='max-w-screen-xl h-[700px] mx-auto'>
            <div className="flex xl:py-[113px] gap-[32px]">
                <div className="w-[838px] h-[308px]  border-solid border-[1px] border-[#E5E8ED]">
                    <h2 className='text-[30px] font-[700] ml-[25px] my-4'>Shopping Cart</h2>
                    <hr />
                    <div className="flex">
                    <div className="flex">
                        <div className="mt-3">
                            <img src={img} className='' alt="img" />
                        </div>
                        <div className="mt-10">
                        <p className="w-[178px] text-[#000] text-[25px] font-[700] leading-[25px]">Product Name Lorem Ipsum Dolor Sit Amit</p>
                        <div className="flex justify-between mt-4">
                            <h1 className="font-[800] text-[25px] w-[86px]">$15.50</h1>
                            <s className="font-[700] text-[#787A80] text-[13px] mt-3 w-[44px] mx-5">$31.00</s>
                            <div className="bg-[#E70613] font-[700] text-[11px] text-[#fff] h-[18px] px-[6px] py-[1px] mt-3">-50%</div>
                        </div>
                        </div>
                    </div>
                    <div className="flex justify-around mt-10 ml-10 w-[400px]">
                            <input className='w-20 h-10' type="number" />
                            <p className='font-[700] text-[16px]'>$361.00</p>
                            <p>icone</p>
                    </div>
                    </div>

                </div>
               
               {/* <div className="ml-[33px]">
               <div className="w-[409px] h-[244px]  border-2 border-[#E5E8ED]">
                    <div className="flex justify-between   w-full border-b-2 border-[#E5E8ED] px-5 py-3">
                        <div className="text-[17px] font-[400]"><p>1 Item <br /> Shipping</p></div>
                        <div className="text-[17px] font-[400]"><p>$361.00 <br />$7.00</p></div>
                    </div>
                    <div className="flex justify-between   w-full border-b-2 border-[#E5E8ED] px-5 py-3">
                        <div className="text-[17px] font-[400]"><p>Total (Tax excl.) <br />Taxes</p></div>
                        <div className="text-[17px] font-[400]"><p>$368.00 <br />$0.00</p></div>
                    </div>
                    <Link to="/address" className="flex justify-center ">
                        <button className=' w-[202px] h-[44px]  bg-[#FFC26A] mt-5 rounded-full'>CHECKOUT NOW</button>
                    </Link>
                </div>

                <div className="px-14 py-3 border-b-2 border-[#E5E8ED]">
                    <p>Security Poilcy: Lorem Ipsum Dolor Sit <br /> Amet Lorem Ipsum Dolor Sit Amet  </p>
                 </div><div className="px-14 py-3 border-b-2 border-[#E5E8ED]">
                    <p>Security Poilcy: Lorem Ipsum Dolor Sit <br /> Amet Lorem Ipsum Dolor Sit Amet  </p>
                 </div>
                 <div className="px-14 py-3">
                    <p>Security Poilcy: Lorem Ipsum Dolor Sit <br /> Amet Lorem Ipsum Dolor Sit Amet  </p>
                 </div>
               </div> */}
                    <div className='xl:w-[409px] h-[244px] bg-[#CED0C8] border-[1px] border-[#1E2819]'>
                    <div className='flex px-[24px] justify-between items-center mt-[18px]'>
                        <div>
                            <p className='w-[112px] h-[58px] text-[17px] font-normal nunitoNormal'>1 Item Shipping</p>
                        </div>
                        <div>
                            <p className='w-[112px] h-[58px] text-[17px] font-normal nunitoNormal'>$361.00 $7.00</p>
                        </div>
                    </div>
                    <hr className='xl:pl-0 mt-[4px] border-[1px] border-[#1E2819]' />
                    <div className='flex px-[24px] justify-between items-center mt-[17px]'>
                        <div>
                            <p className='w-[112px] h-[58px] text-[17px] font-normal nunitoNormal'>1 Item Shipping</p>
                        </div>
                        <div>
                            <p className='w-[112px] h-[58px] text-[17px] font-normal nunitoNormal'>$361.00 $7.00</p>
                        </div>
                    </div>
                    <hr className='xl:pl-0 mt-[4px] border-[1px] border-[#1E2819]' />
                    <button className='text-[16px] font-bold leading-[44px] alegreyaBold xl:w-[202px] xl:h-[44px] rounded-[50px] xl:ml-[103px] xl:mt-[19px] main_btn'>CONTINUE NOW</button>

                    <div className='xl:mt-[60px]'>
                        <div className='text-[#1E2819] flex gap-[15px] items-start'>
                            <span className='xl:ml-[60px]' ><BsShieldFillCheck size={25} /></span>
                            <p className='xl:w-[299px] xl:h-[58px] text[16px] leading-[20px] font-normal nunitoNormal'>Security Poilcy: Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet  </p>
                        </div>
                        <hr className='xl:w-[381px] xl:ml-[42px] border-[1px] border-[#E5E8ED]' />

                        <div className='text-[#1E2819] flex gap-[15px] items-start mt-[18px]'>
                            <span className='xl:ml-[60px]' ><BsShieldFillCheck size={25} /></span>
                            <p className='xl:w-[299px] xl:h-[58px] text[16px] leading-[20px] font-normal nunitoNormal'>Security Poilcy: Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet  </p>
                        </div>
                        <hr className='xl:w-[381px] xl:ml-[42px] border-[1px] border-[#E5E8ED]' />
                        <div className='text-[#1E2819] flex gap-[15px] items-start mt-[18px]'>
                            <span className='xl:ml-[60px]' ><BsShieldFillCheck size={25} /></span>
                            <p className='xl:w-[299px] xl:h-[58px] text[16px] leading-[20px] font-normal nunitoNormal'>Security Poilcy: Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet  </p>
                        </div>
                        <hr className='xl:w-[381px] xl:ml-[42px] border-[1px] border-[#E5E8ED]' />
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Cart;