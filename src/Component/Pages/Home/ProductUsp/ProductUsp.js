import React from 'react';
import product from '../../../../assets/productUps/product.png';
import product1 from '../../../../assets/productUps/PRODUCT1.png';
import leaflet from '../../../../assets/productUps/Leaflet.png';
import icon from '../../../../assets/productUps/icon.png';
import slice from '../../../../assets/productUps/slice.png';
import berries from '../../../../assets/productUps/Berries.png';
import Leaflets from '../../../../assets/productUps/leaf2 1.png';
import pngwing from '../../../../assets/productUps/pngwing 1.png';
import product2 from '../../../../assets/productUps/product2.png';
import './ProductUsp.css'


const ProductUsp = () => {
    return (
        <div className='xl:h-[953px] md:h-[850px] h-[1230px] product_bg relative px-6 xl:px-0'>
            <div className='lg:w-[654px] md:w-[650px] w-[344px] mx-auto text-center text-white xl:py-[54px] md:py-[30px] py-12'>
                <h2 className='lg:text-[60px] md:text-[50px] text-[50px] leading-[72px] font-bold alegreyaBold '>Product USP’s</h2>
                <p className='xl:text-[18px] text-[16px] leading-[24px] font-normal z-10 nunitoNormal'>Habitasse platea dictumst quisque sagittis purus sit. Dignissim enim sit amet venenatis. In est ante in nibh mauris cursus mattis.</p>
            </div>
            <div className='xl:w-[1280px] w-full mx-auto h-[648px] block md:flex justify-between items-center text-white xl:px-8'>
                <div className='xl:mt-[-100px] mt-[-32px]'>
                    <div className='xl:w-[335px] lg:w-[300px] md:w-[200px] w-[363px] flex items-center md:block gap-3 md:gap-0'>
                        <div className='flex justify-between items-center'>
                            <h2 className='xl:text-[80px] lg:text-[60px] md:text-[40px] text-[80px] font-medium leading-[96px] alegreyaMedium w-[134px] h-[74px] md:block hidden'>01</h2>
                            <img className='xl:w-[96px] lg:w-[60px] md:w-[40px] w-[79px] xl:h-[92px] lg:h-[60px] md:h-[40px] h-[76] md:mt-6' src={icon} alt="icon" />
                        </div>
                        <p className='xl:text-[18px] md:text-[16px] text-[16px] font-normal leading-[24px] nunitoNormal mt-[22px] xl:w-[363px] lg:w-[300px] md:w-[200px]
                        w-[258px] h-[78px] xl:text-end'>
                            Lorem ipsum dolor sit amet, consectetuer nisl ut. Lorem ipsum dolor sit amet, conse ctetuer.</p>
                    </div>

                    <div className='xl:w-[335px] lg:w-[300px] md:w-[200px] w-[335px] flex items-center md:block gap-3 md:gap-0'>
                        <div className='flex justify-between items-center'>
                            <h2 className='xl:text-[80px] lg:text-[60px] md:text-[40px] text-[80px] font-medium leading-[96px] alegreyaMedium w-[134px] h-[74px] md:block hidden'>03</h2>
                            <img className='xl:w-[96px] lg:w-[60px] md:w-[40px] w-[79px] xl:h-[92px] lg:h-[60px] md:h-[40px] h-[76] md:mt-6' src={icon} alt="icon" />
                        </div>
                        <p className='xl:text-[18px] md:text-[16px] text-[16px] font-normal leading-[24px] nunitoNormal mt-[22px] xl:w-[363px] lg:w-[300px] md:w-[200px]
                        w-[258px] h-[78px]'>
                            Lorem ipsum dolor sit amet, consectetuer nisl ut. Lorem ipsum dolor sit amet, conse ctetuer.</p>
                    </div>
                   
                </div>

                <div className='xl:w-[420px] '>
                    <div className='w-full xl:block hidden'>
                        <img className='relative w-[170px] h-[129px] top-[6px] right-[28px]' src={leaflet} alt="leaflet" />
                        <img className='absolute z-10 w-[420px] h-[648px] mt-[-118px] ml-[-20px]' src={product} alt="product" />
                        <img className='relative top-[-66px] left-[317px]' src={product1} alt="product1" />
                    </div>
                    <div className='xl:hidden block'>
                    <img className='w-[352px] h-[493px]' src={product2} alt="product2" />
                </div>
                </div>

                <div className='mt-[-32px]'>
                    <div className='xl:w-[335px] lg:w-[300px] md:w-[200px] w-[335px] flex items-center md:block gap-3 md:gap-0'>
                        <div className='flex justify-between items-center flex-row-reverse'>
                            <h2 className='xl:text-[80px] lg:text-[60px] md:text-[40px] text-[80px] font-medium leading-[96px] alegreyaMedium w-[134px] h-[74px] md:block hidden'>02</h2>
                            <img className='xl:w-[96px] lg:w-[60px] md:w-[40px] w-[79px] xl:h-[92px] lg:h-[60px] md:h-[40px] h-[76] md:mt-6' src={icon} alt="icon" />
                        </div>
                        <p className='xl:text-[18px] md:text-[16px] text-[16px] font-normal leading-[24px] nunitoNormal mt-[22px] xl:w-[363px] lg:w-[300px] md:w-[200px]
                        w-[258px] h-[78px]'>
                            Lorem ipsum dolor sit amet, consectetuer nisl ut. Lorem ipsum dolor sit amet, conse ctetuer.</p>
                    </div>

                    <div className='xl:w-[335px] lg:w-[300px] md:w-[200px] w-[335px] flex items-center md:block gap-3 md:gap-0'>
                        <div className='flex justify-between items-center flex-row-reverse'>
                            <h2 className='xl:text-[80px] lg:text-[60px] md:text-[40px] text-[80px] font-medium leading-[96px] alegreyaMedium w-[134px] h-[74px] md:block hidden'>04</h2>
                            <img className='xl:w-[96px] lg:w-[60px] md:w-[40px] w-[79px] xl:h-[92px] lg:h-[60px] md:h-[40px] h-[76] md:mt-6' src={icon} alt="icon" />
                        </div>
                        <p className='xl:text-[18px] md:text-[16px] text-[16px] font-normal leading-[24px] nunitoNormal mt-[22px] xl:w-[363px] lg:w-[300px] md:w-[200px]
                        w-[258px] h-[78px]'>
                            Lorem ipsum dolor sit amet, consectetuer nisl ut. Lorem ipsum dolor sit amet, conse ctetuer.</p>
                    </div>
                </div>
                
            </div>
            <div className='xl:block hidden'>
                <img className='absolute z-10 top-[46%] left-[37%]' src={slice} alt="slice" />
                <img className='absolute z-10 top-[35%] left-[51%] ' src={berries} alt="berries" />
                <div>
                     <img className='absolute z-10 top-[58%] left-[976px] w-[176px] h-[172px]' src={Leaflets} alt="Leaflets" />
               </div>
                <div>
                     <img className='absolute z-10 top-[68%] left-[990px] ' src={pngwing} alt="pngwing" />
               </div>
                
            </div>
        </div>
    );
};

export default ProductUsp;