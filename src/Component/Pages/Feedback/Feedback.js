import React from 'react';
import './Feedback.css';
import img1 from '../../../assets/checkout/left/1.png'
import img2 from '../../../assets/checkout/left/2.png'
import img3 from '../../../assets/checkout/left/3.png'
import img4 from '../../../assets/checkout/right/4.png'
import img5 from '../../../assets/checkout/right/5.png'
import img6 from '../../../assets/checkout/right/6.png'
import img7 from '../../../assets/checkout/right/7.png'

const Feedback = () => {
    return (
        <div>
            <div className='xl:h-[370px] lg:h-[196px] md:h-[148px] h-[284px] bg-cover md:bg-contain xl:w-full w-full feedback flex'>
                <h2 className='w-full h-full flex items-center justify-center xl:text-[80px] text-[50px] xl:leading-[90px] leading-[55px] font-bold text-[#1E2819] alegreyaBold text-center'>Need Help?</h2>
            </div>
            {/*----------Accodibg ---------*/}
            <div className='xl:w-[1280px] mx-auto'>
                <div className='mt-[58px]'>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200 lg:pl-[58px] xl:py-[50px]">
                    <div className="collapse-title text-xl font-medium">
                        <h2 className='xl:text-[38px] lg:text-[30px] font-bold leading-[45.6px] alegreyaBold'>Lorem Ipsum Dolor Sit</h2>
                    </div>
                    <div className="collapse-content">
                        <p className='xl:text-[22px] lg:text-[18px] font-medium leading-[30px] xl:w-[1063px] lg:w-[800px] nunitoMedium'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.</p>
                    </div>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200 lg:pl-[58px] xl:py-[50px]">
                    <div className="collapse-title text-xl font-medium">
                        <h2 className='xl:text-[38px] lg:text-[30px] font-bold leading-[45.6px] alegreyaBold'>Lorem Ipsum Dolor Sit</h2>
                    </div>
                    <div className="collapse-content">
                        <p className='xl:text-[22px] lg:text-[18px] font-medium leading-[30px] xl:w-[1063px] lg:w-[800px] nunitoMedium'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.</p>
                    </div>
                </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200 lg:pl-[58px] xl:py-[50px]">
                    <div className="collapse-title text-xl font-medium">
                        <h2 className='xl:text-[38px] lg:text-[30px] font-bold leading-[45.6px] alegreyaBold'>Lorem Ipsum Dolor Sit</h2>
                    </div>
                    <div className="collapse-content">
                        <p className='xl:text-[22px] lg:text-[18px] font-medium leading-[30px] xl:w-[1063px] lg:w-[800px] nunitoMedium'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.</p>
                    </div>
                </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200 lg:pl-[58px] xl:py-[50px]">
                    <div className="collapse-title text-xl font-medium">
                        <h2 className='xl:text-[38px] lg:text-[30px] font-bold leading-[45.6px] alegreyaBold'>Lorem Ipsum Dolor Sit</h2>
                    </div>
                    <div className="collapse-content">
                        <p className='xl:text-[22px] lg:text-[18px] font-medium leading-[30px] xl:w-[1063px] lg:w-[800px] nunitoMedium'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.</p>
                    </div>
                </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200 lg:pl-[58px] xl:py-[50px]">
                    <div className="collapse-title text-xl font-medium">
                        <h2 className='xl:text-[38px] lg:text-[30px] font-bold leading-[45.6px] alegreyaBold'>Lorem Ipsum Dolor Sit</h2>
                    </div>
                    <div className="collapse-content">
                        <p className='xl:text-[22px] lg:text-[18px] font-medium leading-[30px] xl:w-[1063px] lg:w-[800px] nunitoMedium'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.</p>
                    </div>
                </div>
            </div>
            <div className='h-[226px] bg-[#1E2819] lg:mt-[111px] flex items-center'>
                <div className='xl:w-[1280px] w-full px-6 xl:px-0 mx-auto md:flex block justify-between'>
                    <div>
                        <h2 className='md:text-[45px] text-[30px] font-bold leading-[54px] alegreyaBold text-white'>Still have questions?</h2>
                        <p className='xl:text-[22px] text-[18px] leading-[24px] font-medium nunitoMedium text-white'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                    </div>
                    <button className='text-[16px] leading-[19.2px] main_btn w-[138px] h-[45px] rounded-[50px] font-bold alegreyaBold text-white mt-[16px] md:mt-0'>GET IN TOUCH</button>
                </div>
            </div>


             <div className='xl:block hidden'>
                <img className='absolute top-[704px]' src={img1} alt="img1" />
                <img className='absolute top-[870px] left-[43px]' src={img2} alt="img2" />
                <img className='absolute top-[950px] left-[57px]' src={img3} alt="img3" />
                <img className='absolute top-[1300px] left-[1690px]' src={img4} alt="img4" />
                <img className='absolute top-[1415px] left-[1700px]' src={img5} alt="img5" />
                <img className='absolute top-[1415px] left-[1814px]' src={img6} alt="img6" />
                <img className='absolute top-[1453px] right-0' src={img7} alt="img7" />
            </div>
            
        </div>
    );
};

export default Feedback;