import React from 'react';
import './Career.css';
import img from '../../../assets/Career/image (2).png'
import Board from '../About/Board/Board';

const Career = () => {
    return (
        <div className='mt-[102px]'>
            { /*============ Banner start ===========*/}
            <div className='xl:h-[370px] lg:h-[196px] md:h-[148px] h-[284px] bg-cover md:bg-contain xl:w-full w-full career px-6 xl:px-0'>
                <div className='w-full h-full'>
                    <h2 className='xl:text-[80px] lg:text-[50px] md:text-[40px] text-[35px] xl:leading-[90px] leading-[55px] font-bold text-[#1E2819] alegreyaBold text-center flex items-center justify-center xl:pt-[127px] lg:pt-[50px] md:pt-[20px] pt-[100px]'>Join Now Our Team</h2>
                    <div className='flex justify-center'>
                        <button className='w-[232px] h-[45px] rounded-[50px] main_btn text-[16px] font-bold alegreyaBold text-white'>VIEW OUR JOB OPENINGS</button>
                    </div>
                </div>
            </div>
            { /*============ Banner end===========*/}
            { /*============ Who We Are Start===========*/}
            <div className='xl:w-[1280px] w-full mx-auto xl:h-[809px] lg:h-[680px] pb-[50px] lg:pb-0 px-6 xl:px-0'>
                <p className='lg:py-[90px] py-[50px] lg:text-[28px] md:text-[20px] text-[21px] font-medium md:leading-[35px] nunitoMedium text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh mod tincidunt ut laoreet dolore magna aliquam erat volutpa</p>
                <div className='md:flex items-center gap-[37px]'>
                    <div>
                        <img src={img} alt="img" />
                    </div>
                    <div className='xl:w-[615px] md:w-[500px] w-full mt-[16px] md:mt-0'>
                        <h2 className='xl:text-[60px] lg:text-[40px] text-[40px] font-bold xl:leading-[72px] alegreyaBold'>Who We Are.</h2>
                        <p className='xl:text-[18px] lg:text-[16px] md:text-[12px] font-medium nunitoMedium lg:leading-[27px] xl:py-[21px] py-[10px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.</p>
                        <button className='lg:w-[217px] md:w-[200px] w-[217px] lg:h-[45px] md:h-[35px] h-[45px] main_btn text-white font-boldalegreyaBold lg:text-[16px] md:text-[14px] rounded-[50px]'>LEARN MORE ABOUT US</button>
                    </div>
                </div>
            </div>
            { /*============ Who We Are end===========*/}
            { /*============ Job Openings Start ===========*/}
            <div className='xl::h-[809px] lg:h-[850px] md:h-[880px] pb-[50px] md:pb-0 job'>
                <h2 className='xl:text-[60px] lg:text-[40px] text-[40px] font-bold xl:leading-[72px] alegreyaBold text-center lg:pt-[73px] pt-[50px]'>Job Openings</h2>
                <div className='xl:w-[1280px] w-full mx-auto  px-6 xl:px-0 '>
                    <div className='md:flex mt-[53px]'>
                        <div>
                            <h2 className='lg:text-[45px] md:text-[35px] text-[30px] leading-[48px] font-bold alegreyaBold'>Social Media Manager</h2>
                            <p className='lg:text-[18px] md:text-[16px] font-medium nunitoMedium lg:leading-[24px] md:mt-[23px] mt-[10px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. In est ante in nibh mauris cursus mattis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. In est ante in nibh mauris cursus mattis.</p>
                        </div>
                        <div>
                            <button className='w-[136px] h-[45px] rounded-[50px] main_btn text-white font-bold text-[16px] alegreyaBold mt-[16px] md:mt-0'>APPLY NOW</button>
                        </div>
                    </div>

                    <hr className='bg-[#1E2819] mt-[40px] h-[2px] w-full' />

                    <div className='md:flex mt-[47px]'>
                        <div>
                            <h2 className='lg:text-[45px] md:text-[35px] text-[30px] leading-[48px] font-bold alegreyaBold'>Social Media Manager</h2>
                            <p className='lg:text-[18px] md:text-[16px] font-medium nunitoMedium lg:leading-[24px] md:mt-[23px] mt-[10px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. In est ante in nibh mauris cursus mattis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. In est ante in nibh mauris cursus mattis.</p>
                        </div>
                        <div>
                            <button className='w-[136px] h-[45px] rounded-[50px] main_btn text-white font-bold text-[16px] alegreyaBold mt-[16px] md:mt-0'>APPLY NOW</button>
                        </div>
                    </div>

                    <hr className='bg-[#1E2819] mt-[40px] h-[2px] w-full' />

                    <div className='md:flex mt-[47px]'>
                        <div>
                            <h2 className='lg:text-[45px] md:text-[35px] text-[30px] leading-[48px] font-bold alegreyaBold'>Social Media Manager</h2>
                            <p className='lg:text-[18px] md:text-[16px] font-medium nunitoMedium lg:leading-[24px] md:mt-[23px] mt-[10px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. In est ante in nibh mauris cursus mattis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. In est ante in nibh mauris cursus mattis.</p>
                        </div>
                        <div>
                            <button className='w-[136px] h-[45px] rounded-[50px] main_btn text-white font-bold text-[16px] alegreyaBold mt-[16px] md:mt-0'>APPLY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
            { /*============ Job Openings red ===========*/}
            { /*============ Meet Our Team Members start ===========*/}
            <Board />
            { /*============ Meet Our Team Members end ===========*/}
            { /*============ Meet Our Team Members end ===========*/}

            <div className='md:h-[226px] bg-[#1E2819] flex items-center py-[50px] md:py-0'>
                <div className='xl:w-[1280px] w-full px-6 xl:px-0 mx-auto md:flex block justify-between'>
                    <div>
                        <h2 className='md:text-[45px] text-[24px] font-bold leading-[54px] alegreyaBold text-white'>Lorem ipsum dolor sit amet?</h2>
                        <p className='xl:text-[22px] text-[18px] leading-[24px] font-medium nunitoMedium text-white'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                    </div>
                    <button className='text-[16px] leading-[19.2px] main_btn w-[138px] h-[45px] rounded-[50px] font-bold alegreyaBold text-white mt-[16px] md:mt-0'>GET IN TOUCH</button>
                </div>
            </div>


        </div>
    );
};

export default Career;