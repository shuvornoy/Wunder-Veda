import React from 'react';
import img1 from '../../../../assets/Instagram/image 8.png'
import img2 from '../../../../assets/Instagram/image 9.png'
import img3 from '../../../../assets/Instagram/image-10.png'
import img4 from '../../../../assets/Instagram/image 11.png'
import img5 from '../../../../assets/Instagram/image 12.png'
import shipping from '../../../../assets/shipping/free.png'


const Instagram = () => {
    return (
        <div className='w-full xl:h-[432px] h-[114px] relative overflow-hidden'>
            <div className='md:block hidden'>
                <h2 className='alegreyaBold font-bold text-[45px] text-center leading-[54px] pt-[70px]'>Instagram</h2>
            <div className='w-full h-[267px] flex absolute bottom-[-2px]'>
                <div>
                    <img src={img1} alt="img1" />
                </div>
                <div>
                    <img src={img2} alt="img1" />
                </div>
                <div>
                    <img src={img3} alt="img1" />
                </div>
                <div>
                    <img src={img4} alt="img1" />
                </div>
                <div>
                    <img src={img5} alt="img1" />
                </div>
            </div>
            </div>
            <div className='md:hidden flex absolute top-0 left-0 h-full items-center mt-[16px]'>
                <div className='mb-5 md:mb-0 ml-[26px]'>
                    <div className='flex justify-center items-center gap-2'>
                    <img className='h-[41px] w-[41px]' src={shipping} alt="shipping" />
                    <h2 className='w-[143px] text-[16px] font-normal leading-[19px] libreNormal '>Free Shipping & Returns</h2>
                </div>
                    <p className=' text-[11px] font-normal leading-[17px] mt-2 montserratNormal w-[188px] ml-[24px]'>Habitasse platea dictu quisque</p>
                </div>
                <div className='mb-5 md:mb-0 ml-[8px] w-[220px]'>
                    <div className='flex justify-center items-center gap-2'>
                    <img className='h-[41px] w-[41px]' src={shipping} alt="shipping" />
                    <h2 className='w-[143px] text-[16px] font-normal leading-[19px] libreNormal '>Money Back Guarantee</h2>
                </div>
                    <p className=' text-[11px] font-normal leading-[17px] mt-2 montserratNormal w-[188px] ml-[24px]'>Habitasse platea dictu quisque</p>
                </div>
            </div>
        </div>
    );
};

export default Instagram;