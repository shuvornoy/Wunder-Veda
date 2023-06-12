import React from 'react';
import './AddFeedback.css'
import upload from '../../../assets/addfeedback/profile-icon.png';
import review from '../../../assets/addfeedback/Ellipse 17.png';
import img1 from '../../../assets/checkout/left/1.png'
import img2 from '../../../assets/checkout/left/2.png'
import img3 from '../../../assets/checkout/left/3.png'
import img4 from '../../../assets/checkout/right/4.png'
import img5 from '../../../assets/checkout/right/5.png'
import img6 from '../../../assets/checkout/right/6.png'
import img7 from '../../../assets/checkout/right/7.png'

const AddFeedback = () => {
    return (
        <div>
            <div className='xl:h-[370px] lg:h-[196px] md:h-[148px] h-[284px] bg-cover md:bg-contain xl:w-full w-full feedback flex'>
                <h2 className='w-full h-full flex items-center justify-center xl:text-[80px] text-[50px] xl:leading-[90px] leading-[55px] font-bold text-[#1E2819] alegreyaBold text-center'>Feedback</h2>
            </div>

            {/*======== Fedback ===========*/}
            <div className='xl:w-[1280px] w-full mx-auto mt-[108px]'>
                <form>
                    <div className='xl:w-[1292px] w-full md:h-[708px] h-[1050px] bg-[#FBD895] border-[1px] border-[#1E2819] mt-[44px] pt-[21px]'>
                        <h2 className='lg:text-[45px] md:text-[30px] text-[25px] leading-[54px] font-bold alegreyaBold lg:pl-[50px] px-6 xl:px-[50px] '>Add Your Feedback</h2>
                        <hr className='w-full bg-[#1E2819] pl-0' />

                        <div className='md:flex items-center pt-[63px]'>
                            <div className='xl:w-[995px] lg:w-[800px] md:w-[600px]'>
                                <div className='md:flex block items-center gap-[20px] px-6 lg:px-0 lg:pl-[50px]'>
                                    <h2 className='text-[17px] font-normal leading-5 nunitoNormal w-[100px]'>Feedback About</h2>
                                    <input className='xl:w-[816px] lg:w-[616px] md:w-[420px] w-full h-[44px] rounded-[12px]' type="text" />
                                </div>

                                <div className='lg:flex items-center gap-[45px] px-6 lg:px-0 lg:pl-[50px] mt-[32px]'>
                                    <div className='md:flex block items-center gap-[20px]'>
                                        <h2 className='text-[17px] font-normal leading-5 nunitoNormal w-[100px]'>First Name</h2>
                                        <input className='xl:w-[327px] lg:w-[225px] md:w-[420px] w-full h-[44px] rounded-[12px]' type="text" />
                                    </div>
                                    <div className='md:flex block items-center gap-[15px] mt-[24px] lg:mt-0'>
                                        <h2 className='text-[17px] font-normal leading-5 nunitoNormal'>Second Name</h2>
                                        <input className='xl:w-[327px] lg:w-[225px] md:w-[420px] w-full h-[44px] rounded-[12px]' type="text" />
                                    </div>
                                </div>

                                <div className='md:flex block items-center gap-[12px] mt-[24px] px-6 lg:px-0 lg:pl-[50px]'>
                                        <h2 className='text-[17px] font-normal leading-5 nunitoNormal'>Email Address</h2>
                                        <input className='xl:w-[816px] lg:w-[616px] md:w-[420px] w-full h-[44px] rounded-[12px]' type="text" />
                                </div>
                            </div>
                            
                            <div className='xl:ml-[39px] lg:ml-[30px] '>
                                <div className='xl:w-[171px] lg:w-[150px] w-[100px] xl:h-[171px] lg:h-[150px] h-[100px] rounded-full border-[#1E2819] border-[1px] flex justify-center items-center upload ml-[35%] md:ml-[0%] mt-[24px] md:mt-0'>
                                     <img src={upload} alt="upload" />
                                </div>
                                <p className='text-[17px] leading-5 font-normal nunitoNormal text-center pt-[13px]'>Upload Profile*</p>
                            </div>
                        </div>

                        <div className='md:flex block items-center gap-[14px] mt-[24px] px-6 lg:px-0 lg:pl-[50px]'>
                                <h2 className='text-[17px] font-normal leading-5 nunitoNormal'>Your Message</h2>
                                <input className='xl:w-[1030px] lg:w-[820px] md:w-[580px] w-full h-[188px] rounded-[12px]' type="text" />
                        </div>

                        <div className='mt-[24px] xl:w-[1030px] lg:w-[820px] md:w-[580px] w-full mx-auto md:flex block items-center justify-between lg:ml-[170px] md:ml-[140px] px-6 md:px-0'>
                            <div className='flex items-center gap-[14px]'>
                                <input type="checkbox" className='w-[18px] h-[18px]' />
                                <p className='text-[17px] font-normal leading-5 nunitoNormal'>Save my details for future</p>
                            </div>
                            <button className='w-[139px] h-[44px] main_btn rounded-[50px] text-white text-[16px] font-bold leading-[44px] alegreyaBold mt-[16px] md:mt-0'>CONTINUE</button>
                        </div>

                    </div>
                </form>


            </div>

            {/*================= Review Start ======================*/}
            <div className='xl:w-[1280px] w-full mx-auto px-6 xl:px-0'>
                <h2 className='lg:text-[60px] md:text-[50px] text-[40px] font-bold leading-[72px] alegreyaBold text-center pt-[91px]'>Other Reviews</h2>
                <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 xl:gap-[26px] gap-[120px] lg:pt-[122px] pt-[50px]'>
                    {/*========== Review 1 ===============*/}
                    <div className='md:w-[427px] w-full mx-auto md:h-[331px] h-[360px] border-[1px] border-[#1E2819] aboutShadow rounded-[10px]'>
                        <h2 className='pt-[60px] text-[33px] leading-[39px] font-bold alegreyaBold text-center'>Hannah Schmitt</h2>
                        <div className='pt-[10px] flex justify-center'>
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" />
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" checked />
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" />
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" />
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" />
                                </div>
                        </div>
                        <p className='md:text-[17px] text-[15px] leading-[22px] font-medium nunitoMedium text-center pt-[17px] md:w-[369px] w-[250px] mx-auto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
                        <img className='absolute md:mt-[-340px] mt-[-380px] md:ml-[160px] ml-[85px]' src={review} alt="review" />
                    </div>
                    {/*========== Review 2 ===============*/}
                    <div className='md:w-[427px] w-full mx-auto md:h-[331px] h-[360px] border-[1px] border-[#1E2819] aboutShadow rounded-[10px]'>
                        <h2 className='pt-[60px] text-[33px] leading-[39px] font-bold alegreyaBold text-center'>Hannah Schmitt</h2>
                        <div className='pt-[10px] flex justify-center'>
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" />
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" checked />
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" />
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" />
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" />
                                </div>
                        </div>
                        <p className='md:text-[17px] text-[15px] leading-[22px] font-medium nunitoMedium text-center pt-[17px] md:w-[369px] w-[250px] mx-auto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
                        <img className='absolute md:mt-[-340px] mt-[-380px] md:ml-[160px] ml-[85px]' src={review} alt="review" />
                    </div>
                    {/*========== Review 3 ===============*/}
                    <div className='md:w-[427px] w-full mx-auto md:h-[331px] h-[360px] border-[1px] border-[#1E2819] aboutShadow rounded-[10px]'>
                        <h2 className='pt-[60px] text-[33px] leading-[39px] font-bold alegreyaBold text-center'>Hannah Schmitt</h2>
                        <div className='pt-[10px] flex justify-center'>
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" />
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" checked />
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" />
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" />
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" />
                                </div>
                        </div>
                        <p className='md:text-[17px] text-[15px] leading-[22px] font-medium nunitoMedium text-center pt-[17px] md:w-[369px] w-[250px] mx-auto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
                        <img className='absolute md:mt-[-340px] mt-[-380px] md:ml-[160px] ml-[85px]' src={review} alt="review" />
                    </div>
                    {/*========== Review 4 ===============*/}
                    <div className='md:w-[427px] w-full mx-auto md:h-[331px] h-[360px] border-[1px] border-[#1E2819] aboutShadow xl:mt-[109px] rounded-[10px]'>
                        <h2 className='pt-[60px] text-[33px] leading-[39px] font-bold alegreyaBold text-center'>Hannah Schmitt</h2>
                        <div className='pt-[10px] flex justify-center'>
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" />
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" checked />
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" />
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" />
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" />
                                </div>
                        </div>
                        <p className='md:text-[17px] text-[15px] leading-[22px] font-medium nunitoMedium text-center pt-[17px] md:w-[369px] w-[250px] mx-auto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
                        <img className='absolute md:mt-[-340px] mt-[-380px] md:ml-[160px] ml-[85px]' src={review} alt="review" />
                    </div>
                    {/*========== Review 5 ===============*/}
                    <div className='md:w-[427px] w-full mx-auto md:h-[331px] h-[360px] border-[1px] border-[#1E2819] aboutShadow xl:mt-[109px] rounded-[10px]'>
                        <h2 className='pt-[60px] text-[33px] leading-[39px] font-bold alegreyaBold text-center'>Hannah Schmitt</h2>
                        <div className='pt-[10px] flex justify-center'>
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" />
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" checked />
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" />
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" />
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" />
                                </div>
                        </div>
                        <p className='md:text-[17px] text-[15px] leading-[22px] font-medium nunitoMedium text-center pt-[17px] md:w-[369px] w-[250px] mx-auto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
                        <img className='absolute md:mt-[-340px] mt-[-380px] md:ml-[160px] ml-[85px]' src={review} alt="review" />
                    </div>
                    {/*========== Review 6 ===============*/}
                    <div className='md:w-[427px] w-full mx-auto md:h-[331px] h-[360px] border-[1px] border-[#1E2819] aboutShadow xl:mt-[109px] rounded-[10px]'>
                        <h2 className='pt-[60px] text-[33px] leading-[39px] font-bold alegreyaBold text-center'>Hannah Schmitt</h2>
                        <div className='pt-[10px] flex justify-center'>
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" />
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" checked />
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" />
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" />
                                <input type="radio" name="rating-1" className="mask mask-star h-[28px]" />
                                </div>
                        </div>
                        <p className='md:text-[17px] text-[15px] leading-[22px] font-medium nunitoMedium text-center pt-[17px] md:w-[369px] w-[250px] mx-auto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
                        <img className='absolute md:mt-[-340px] mt-[-380px] md:ml-[160px] ml-[85px]' src={review} alt="review" />
                    </div>

                   

                </div>
                 <div className='mt-[33px] flex justify-center'>
                        <button className='w-[139px]  h-[44px] main_btn rounded-[50px] text-[16px] font-bold alegreyaBold text-white'>VIEW MORE</button></div>
                   </div>

            <div className='xl:block hidden'>
                <img className='absolute top-[704px]' src={img1} alt="img1" />
                <img className='absolute top-[870px] left-[43px]' src={img2} alt="img2" />
                <img className='absolute top-[950px] left-[57px]' src={img3} alt="img3" />
                <img className='absolute top-[1600px] left-[1690px]' src={img4} alt="img4" />
                <img className='absolute top-[1750px] left-[1700px]' src={img5} alt="img5" />
                <img className='absolute top-[1750px] left-[1814px]' src={img6} alt="img6" />
                <img className='absolute top-[1790px] right-0' src={img7} alt="img7" />
            </div>
            
        </div>
    );
};

export default AddFeedback;