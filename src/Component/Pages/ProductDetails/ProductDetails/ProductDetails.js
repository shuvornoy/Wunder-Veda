import React from 'react';
import add from '../../../../assets/addToCard/add.png';
import img from '../../../../assets/addToCard/card-smoll.png';
import icon from '../../../../assets/addToCard/icon.png';
import card from '../../../../assets/addToCard/cart.png';
import love from '../../../../assets/addToCard/outline.png';
import visa from '../../../../assets/addToCard/visa.png';
import master from '../../../../assets/addToCard/master-card.png';
import paypal from '../../../../assets/addToCard/pay-pal.png';
import product from '../../../../assets/addToCard/product.png';
import site from '../../../../assets/product/site.png'
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import './ProductDetails.css'
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    return (
        <div className='pt-[72px]'>
            <div className='xl:h-[988px] xl:w-[1280px] mx-auto px-6 xl:px-0'>
            <h2 className='xl:text-[16px] font-bold leading-[19px] xl:mt-[72px] alegreyaMedium'>Home / Product NAME</h2>
            <div className='mt-[17px] lg:flex block justify-between xl:gap-[33px] lg:gap-[20px]'>
                <div>
                    <img className='xl:w-[663px] lg:w-[430px] w-full xl:h-[585px] lg:h-[300px]' src={add} alt="add" />
                    <div className='mt-[26px] xl:gap-[21px] lg:gap-[10px] md:flex md:justify-between lg:justify-start hidden'>
                        <img className='xl:w-[150px] lg:w-[100px] xl:h-[137px] lg:h-[100px]' src={img} alt="img" />
                        <img className='xl:w-[150px] lg:w-[100px] xl:h-[137px] lg:h-[100px]' src={img} alt="img" />
                        <img className='xl:w-[150px] lg:w-[100px] xl:h-[137px] lg:h-[100px]' src={img} alt="img" />
                        <img className='xl:w-[150px] lg:w-[100px] xl:h-[137px] lg:h-[100px]' src={img} alt="img" />
                    </div>
                </div>
                <div className=''>
                    <div>
                        <h2 className='xl:w-[563px] w-full xl:h-[115px] xl:text-[45px] lg:text-[28px] md:text-[35px] text-[30px] font-bold xl:leading-[54px] alegreyaBold'>Product Name | Lorem Ipsum Dolor Sit Amit</h2>
                    </div>
                    <div className='md:flex justify-between xl:w-[586px]'>
                        <div className='flex gap-[14px] items-center'>
                            <h2 className='xl:text-[35px] font-extrabold xl:leading-[45px] nunitoextra'>$15.50</h2>
                            <p className='text-[#787A80] font-bold leading-[150%] text-[18px] nunitoNormal'><s>$31.00</s></p>
                            <p className='xl:w-[58px] xl:h-[28px] bg-[#E70613] rounded-[4px] text-center text-white text-[16px] font-bold nunitoNormal'>-50%</p>
                        </div>
                        <div>
                          
                                <div className="rating">
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" checked />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                </div>
                                <p className='md:text-end text-[14px] font-medium leading-[19px] text-[#1E2819] nunitoNormal'>58 Reviews</p>
                        </div>
                    </div>
                    <p className='md:text-[18px] font-medium xl:leading-[24px] xl:my-[27px] xl:h-[82px] xl:w-[586px] lg:w-[500px] w-full nunitoNormal mt-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.</p>
                    
                    <div className='mt-[27px] grid md:grid-cols-3 items-center xl:gap-[20px]'>
                        <div className='flex items-center xl:gap-[11px] lg:gap-[6px] gap-3 mt-[16px] md:mt-0'>
                            <img className='lg:w-[56px] md:w-[40px] lg:h-[56px] md:h-[40px]' src={icon} alt="icon" />
                            <p className='lg:w-[96px] w-full xl:h-[54px] xl:text-[18px] lg:text-[16px] text-[18px] font-medium leading-[20px] alegreyaNormal text-[#1E2819]'>Key Benefit II Lorem Ipsum</p>
                        </div>
                       <div className='flex items-center xl:gap-[11px] lg:gap-[6px] gap-3 mt-[16px] md:mt-0'>
                             <img className='lg:w-[56px] md:w-[40px] lg:h-[56px] md:h-[40px]' src={icon} alt="icon" />
                            <p className='lg:w-[96px] w-full xl:h-[54px] xl:text-[18px] lg:text-[16px] text-[18px] font-medium leading-[20px] alegreyaNormal text-[#1E2819]'>Key Benefit II Lorem Ipsum</p>
                        </div>
                       <div className='flex items-center xl:gap-[11px] lg:gap-[6px] gap-3 mt-[16px] md:mt-0'>
                             <img className='lg:w-[56px] md:w-[40px] lg:h-[56px] md:h-[40px]' src={icon} alt="icon" />
                            <p className='lg:w-[96px] w-full xl:h-[54px] xl:text-[18px] lg:text-[16px] text-[18px] font-medium leading-[20px] alegreyaNormal text-[#1E2819]'>Key Benefit II Lorem Ipsum</p>
                        </div>
                        <div className='flex items-center xl:gap-[11px] lg:gap-[6px] gap-3 mt-[16px]'>
                          
                            <img className='lg:w-[56px] md:w-[40px] lg:h-[56px] md:h-[40px]' src={icon} alt="icon" />
                            <p className='lg:w-[96px] w-full xl:h-[54px] xl:text-[18px] lg:text-[16px] text-[18px] font-medium leading-[20px] alegreyaNormal text-[#1E2819]'>Key Benefit II Lorem Ipsum</p>
                        </div>
                         <div className='flex items-center xl:gap-[11px] lg:gap-[6px] gap-3 mt-[16px]'>
                             <img className='lg:w-[56px] md:w-[40px] lg:h-[56px] md:h-[40px]' src={icon} alt="icon" />
                            <p className='lg:w-[96px] w-full xl:h-[54px] xl:text-[18px] lg:text-[16px] text-[18px] font-medium leading-[20px] alegreyaNormal text-[#1E2819]'>Key Benefit II Lorem Ipsum</p>
                        </div>
                       <div className='flex items-center xl:gap-[11px] lg:gap-[6px] gap-3 mt-[16px]'>
                            <img className='lg:w-[56px] md:w-[40px] lg:h-[56px] md:h-[40px]' src={icon} alt="icon" />
                            <p className='lg:w-[96px] w-full xl:h-[54px] xl:text-[18px] lg:text-[16px] text-[18px] font-medium leading-[20px] alegreyaNormal text-[#1E2819]'>Key Benefit II Lorem Ipsum</p>
                        </div>
                    </div>

                    <div className='mt-[34px] md:flex gap-[23px]  items-center'>
                        <div className=''>
                            <input className='w-[87px] h-[44px] bg-[#FFFFFF] border-[1px] border-[#D7DADD] rounded-[50px] flex justify-center items-center px-4'  type="number" />
                        </div>

                        { /*============= modal Start ===========*/}
                        <label htmlFor="my-modal-3" className='xl:w-[264px] xl:h-[44px] main_btn rounded-[50px] flex justify-center items-center btn border-none mt-[16px] md:mt-0'> <span className='mr-[9px]'>
                            <img className='w-[15px] h-[14px]' src={card} alt="card" /></span>
                            <p className='text-[16px] font-bold alegreyaBold'>Add to cart</p>
                        </label>

                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                            <div className="modal">
                                <div className="w-[690px] h-[260px] bg-[#FFFF] aboutShadow right-[-5px] relative flex items-center">
                                    <label htmlFor="my-modal-3" className="w-[20px] h-[25px] font-bold alegreyaBold absolute right-4 top-4">✕</label>
                                <div className='flex items-center'>
                                    <div className='xl:mt-[25px]'>
                                        <img className='xl:w-[240px] xl:h-[250px]' src={product} alt="product" />
                                    </div>
                                    <div>
                                        <div>
                                            <h2 className='xl:w-[411px] xl:h-[84px] text-[32px] leading-[39px] font-bold alegreyaBold'>Product Name | Lorem Ipsum Dolor Sit Amit</h2>
                                        </div>
                                        <div className='flex gap-[14px] items-center'>
                                            <h2 className='xl:text-[27px] font-extrabold xl:leading-[36px] nunitoextra'>$15.50</h2>
                                            <p className='text-[#787A80] font-bold leading-[150%] text-[14px] nunitoNormal'><s>$31.00</s></p>
                                            <p className='xl:w-[45px] xl:h-[22px] bg-[#E70613] rounded-[4px]    justify-center text-white text-[12px] font-bold nunitoNormal flex items-center'>-50%</p>
                                        </div>
                                        <div className='mt-[16px] flex gap-[11px] items-center'>
                                            <button className='xl:w-[212px] xl:h-[44px] main_btn rounded-[50px] text-white text-[16px] font-bold alegreyaNormal'>CONTINUE SHOPPING</button>
                                            <Link to="/cart">
                                                <div className='xl:w-[178px] xl:h-[44px] main_btn rounded-[50px] flex justify-center items-center btn border-none'> <span className='mr-[9px]'>
                                                    <img className='w-[15px] h-[14px]' src={card} alt="card" /></span>
                                                    <p className='text-[16px] font-bold alegreyaBold'>Add to cart</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                   </div>
                                </div>
                        </div>
                        { /*============= modal end ===========*/}
                        
                        <div className='md:w-[166px] w-full h-[44px] bg-[#FFFFFF] border-[1px] border-[#1E2819] rounded-[50px] flex justify-center items-center mt-[16px] md:mt-0'>
                            <span className='mr-[9px]'>
                                    <img className='w-[15px] h-[14px]' src={love} alt="love" />
                            </span>
                            <p className='text-[16px] font-bold alegreyaBold uppercase'>Favourite</p>
                        </div>
                    </div>
                    {/*==== Share ======*/}
                    <div className='mt-[44px] text-[#1E2819] flex gap-[22px] items-center'>
                        <h2 className='text-[18px] font-medium leading-[20px] alegreyaMedium'>Share:</h2>
                        <span><FaFacebookF size={16} /></span>
                        <span><FaTwitter size={16} /></span>
                        <span><FaPinterestP size={16} /></span>
                    </div>
                     {/*====Modal Start======*/}
                    <hr className='xl:w-[525px] mt-[36px]' />
                    <div className='mt-[34px] md:flex items-center gap-[24px]'>
                        <img className='xl:w-[120px] w-full xl:h-[64px]' src={visa} alt="visa" />
                        <img className='xl:w-[120px] w-full xl:h-[64px] mt-[16px] xl:mt-0' src={master} alt="master" />
                        <img className='xl:w-[120px] w-full xl:h-[64px] mt-[16px] xl:mt-0' src={paypal} alt="paypal" />
                    </div>
                </div>
            </div>
            </div>
            <img className='absolute left-0 top-[211px] xl:block hidden' src={site} alt="site" />
        </div>
    );
};

export default ProductDetails;