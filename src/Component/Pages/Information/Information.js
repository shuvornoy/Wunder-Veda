import React from 'react';

const Information = () => {
    return (
        <div className='mt-[202px]'>
            <div className='xl:w-[1292px] w-full mx-auto md:h-[615px] order_details mt-[100px] pt-[51px] md:pl-[50px] pl-6 pr-6 md:pr-0 pb-[50px] md:pb-0'>
                <h2 className='text-[45px] font-bold leading-[54px] alegreyaBold'>Lorem Ipsum Dolor Sit Amet</h2>
                <div className='mt-[43px] md:flex items-center gap-[35px]'>
                    <div className='md:flex block items-center'>
                        <h2 className='text-[17px] leading-5 font-normal nunitoNormal w-[138px]'>First Name</h2>
                        <input type="text" className='h-[44px] xl:w-[425px] lg:w-[305px] md:w-[185px] w-full border-none bg-white rounded-[12px]' />
                    </div>
                    <div className='md:flex items-center mt-6 md:mt-0'>
                        <h2 className='text-[17px] leading-5 font-normal nunitoNormal w-[138px]'>Second Name</h2>
                        <input type="text" className='h-[44px] xl:w-[425px] lg:w-[305px] md:w-[185px] w-full border-none bg-white rounded-[12px]' />
                    </div>
                </div>
                <div className='mt-[24px] md:flex items-center'>
                     <h2 className='text-[17px] leading-5 font-normal nunitoNormal w-[138px]'>Email Address</h2>
                        <input type="text" className='h-[44px] xl:w-[1026px] lg:w-[780px] md:w-[540px] w-full border-none bg-white rounded-[12px]' />
                </div>

                <div className='mt-[24px] md:flex items-center gap-[35px]'>
                    <div className='md:flex items-center'>
                        <h2 className='text-[17px] leading-5 font-normal nunitoNormal w-[138px]'>Upload CV</h2>
                        <input type="text" className='h-[44px] md:w-[349px] w-full border-none bg-white rounded-[12px] pl-6' />
                    </div>
                    <div>
                        <input type="file" id="upload" hidden/>
                        <label for="upload" className='inline-block border-none w-[149px] h-[44px] bg-[#CED0C8] rounded-[50px] text-center pt-[10px] text-[16px] font-bold text-[#1E2819] alegreyaBold mt-[16px] md:mt-0'>UPLOAD</label>
                    </div>
                </div>

                <div className='mt-[24px] md:flex items-center'>
                     <h2 className='text-[17px] leading-5 font-normal nunitoNormal w-[138px]'>Cover Letter</h2>
                        <input type="text" className='h-[120px] xl:w-[1026px] lg:w-[780px] md:w-[540px] w-full border-none bg-white rounded-[12px]' />
                </div>

                <div className='mt-[24px] md:flex items-center justify-between xl:w-[1026px] lg:w-[780px] md:w-[540px] md:ml-[139px]'>
                    <div className='flex items-center gap-[14px]'>
                        <input type="checkbox" className='w-[18px] h-[18px] bg-white rounded-[2px]' />
                        <p className='text-[17px] leading-5 font-normal nunitoNormal'>Save my details for future</p>
                    </div>
                    <button className='w-[139px] h-[44px] rounded-[50px] main_btn text-white font-bold text-[16px] alegreyaBold mt-[16px] md:mt-0 '>CONTINUE</button>
                </div>

            </div>
        </div>
    );
};

export default Information;