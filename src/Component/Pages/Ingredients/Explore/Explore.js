import React from 'react';
import img1 from '../../../../assets/Ingredients/explore/1.png';
import img2 from '../../../../assets/Ingredients/explore/2.png';
import img3 from '../../../../assets/Ingredients/explore/3.png';
import img4 from '../../../../assets/Ingredients/explore/4.png';
import img5 from '../../../../assets/Ingredients/explore/5.png';
import img6 from '../../../../assets/Ingredients/explore/6.png';
import img7 from '../../../../assets/Ingredients/explore/7.png';
import img8 from '../../../../assets/Ingredients/explore/8.png';
import img9 from '../../../../assets/Ingredients/explore/9.png';
import img10 from '../../../../assets/Ingredients/explore/10.png';
import img11 from '../../../../assets/Ingredients/explore/11.png';
import img12 from '../../../../assets/Ingredients/explore/12.png';
import img13 from '../../../../assets/Ingredients/explore/13.png';
import img14 from '../../../../assets/Ingredients/explore/14.png';
import img15 from '../../../../assets/Ingredients/explore/15.png';
import img16 from '../../../../assets/Ingredients/explore/16.png';
import img17 from '../../../../assets/Ingredients/explore/17.png';
import img18 from '../../../../assets/Ingredients/explore/18.png';

import number from '../../../../assets/Ingredients/explore/01.png'
import number2 from '../../../../assets/Ingredients/explore/02.png'
import number3 from '../../../../assets/Ingredients/explore/03.png'
import number4 from '../../../../assets/Ingredients/explore/04.png'
import number5 from '../../../../assets/Ingredients/explore/05.png'
import number6 from '../../../../assets/Ingredients/explore/06.png'
import number7 from '../../../../assets/Ingredients/explore/07.png'
import number8 from '../../../../assets/Ingredients/explore/08.png'
import number9 from '../../../../assets/Ingredients/explore/09.png'
import number10 from '../../../../assets/Ingredients/explore/010.png'
import vector from '../../../../assets/Ingredients/explore/Vector.png'
import vector1 from '../../../../assets/Ingredients/explore/Vector-1.png'
import left from '../../../../assets/about/left.png'
import right from '../../../../assets/about/right.png'
import './Explore.css'


const Explore = () => {
    return (
        <div className='xl:w-[1280px] w-full mx-auto xl:py-[100px] md:py-[52px]'>
            <div className='w-full mx-auto text-center text-[#1E2819] px-6 xl:px-0'>
                <h2 className='lg:text-[60px] md:text-[50px] text-[24px] xl:leading-[72px] leading-[48px] font-bold alegreyaBold text-center'>Explore our Key Ingredients </h2>
                <p className='xl:text-[18px] text-[16px] leading-[24px] font-medium z-10 nunitoNormal w-full h-[47px] md:mt-[25px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
            </div>

            <div className='hidden xl:block'>
                <img className='absolute top-[1950px] right-0 xl:h-[542px] md:h-[200px] h-[264px]' src={left} alt="left" />
                <img className='absolute top-[890px] right-0' src={vector} alt="vector" />
                <img className='absolute top-[827px] right-0' src={vector1} alt="vector1" />
                <img className='absolute left-0 top-[625px]' src={right} alt="right" />
            </div>

             <div className='md:flex block items-center lg:gap-[50px] gap-4 md:mt-[62px] mt-[170px] py-[9px] border-t-[1px] border-[#CED0C8] px-6'>
                <div>
                    <img className='lg:w-[168px] w-[260px] h-[168px]' src={img11} alt="img11" />
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <h2 className='lg:text-[45px] md:text-[35px] font-bold leading-[54px] alegreyaBold'>Sprouts</h2>
                        <p className='text-[16px] font-bold leading-[19px] text_gre alegreyaBold'>EXPLORE MORE +</p>
                    </div>
                    <p className='lg:text-[18px] text-[17px] font-normal leading-[24px] nunitoNormal mt-[15px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore mag na aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.</p>
                </div>
            </div> 
            
            <div className='xl:h-[850px] lg:h-[1100px] md:h-[1200px] bg-[#CED0C8] px-6 xl:px-0'>
                <div className='md:flex block items-center  lg:gap-[28px] gap-4 border-y-[1px] border-[#CED0C8] mt-[8px] py-[9px] lg:px-6'>
                <div>
                    <img className='lg:w-[202px] w-[260px] h-[178px]' src={img12} alt="img1" />
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <h2 className='lg:text-[45px] md:text-[35px] font-bold leading-[54px] alegreyaBold'>Nuts/Dryfruits</h2>
                        <p className='text-[16px] font-bold leading-[19px] text_gre alegreyaBold'>EXPLORE MORE +</p>
                    </div>
                    <p className='lg:text-[18px] text-[17px] font-normal leading-[24px] nunitoNormal mt-[15px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore mag na aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.</p>
                </div>
                </div> 
                { /*============ 10 product =============*/ }
                <div className='mt-[39px] w-full mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                <div className='w-[206px] h-[240px] mx-auto'>
                    <div>
                        <div className='w-[123px] h-[123px] rounded-full bg_explore flex items-center absolute z-10 ml-[40px]'>
                            <img className='w-[118px] h-[71px]' src={img1} alt="img" />
                        </div>
                            <img className='relative ml-[80px] w-[51px] h-[30px] top-[-15px]' src={number} alt="number" />
                    </div>
                        <h2 className='text-[25px] font-bold leading-[30px] alegreyaBold mt-[110px] text-center w-[206px]' >Almond</h2>
                        <p className='w-[206px] h-[40px] text-[14px] font-medium leading-[18px] nunitoNormal mt-[6px] text-center'>Promotes metabolic health Helps control blood sugar levels</p>
                </div>
                    
                <div className='w-[206px] h-[240px] mx-auto'>
                    <div>
                        <div className='w-[123px] h-[123px] rounded-full bg_explore flex items-center absolute z-10 ml-[40px]'>
                            <img className='w-[118px] h-[71px]' src={img2} alt="img" />
                        </div>
                            <img className='relative ml-[80px] w-[51px] h-[30px] top-[-15px]' src={number2} alt="number" />
                    </div>
                        <h2 className='text-[25px] font-bold leading-[30px] alegreyaBold mt-[110px] text-center w-[206px]' >Black Raisin</h2>
                        <p className='w-[206px] h-[40px] text-[14px] font-medium leading-[18px] nunitoNormal mt-[6px] text-center'>Promotes metabolic health Helps control blood sugar levels</p>
                </div>
                    
                <div className='w-[206px] h-[240px] mx-auto'>
                    <div>
                        <div className='w-[123px] h-[123px] rounded-full bg_explore flex items-center absolute z-10 ml-[40px]'>
                            <img className='w-[118px] h-[71px]' src={img3} alt="img" />
                        </div>
                            <img className='relative ml-[80px] w-[51px] h-[30px] top-[-15px]' src={number3} alt="number" />
                    </div>
                        <h2 className='text-[25px] font-bold leading-[30px] alegreyaBold mt-[110px] text-center w-[206px]' >Walnut</h2>
                        <p className='w-[206px] h-[40px] text-[14px] font-medium leading-[18px] nunitoNormal mt-[6px] text-center'>Promotes metabolic health Helps control blood sugar levels</p>
                </div>
                    
                <div className='w-[206px] h-[240px] mx-auto'>
                    <div>
                        <div className='w-[123px] h-[123px] rounded-full bg_explore flex items-center absolute z-10 ml-[40px]'>
                            <img className='w-[118px] h-[71px]' src={img4} alt="img" />
                        </div>
                            <img className='relative ml-[80px] w-[51px] h-[30px] top-[-15px]' src={number4} alt="number" />
                    </div>
                        <h2 className='text-[25px] font-bold leading-[30px] alegreyaBold mt-[110px] text-center w-[206px]' >Prunes</h2>
                        <p className='w-[206px] h-[40px] text-[14px] font-medium leading-[18px] nunitoNormal mt-[6px] text-center'>Promotes metabolic health Helps control blood sugar levels</p>
                </div>
                    
                <div className='w-[206px] h-[240px] mx-auto lg:mt-[50px] xl:mt-0'>
                    <div>
                        <div className='w-[123px] h-[123px] rounded-full bg_explore flex items-center absolute z-10 ml-[40px]'>
                            <img className='w-[118px] h-[71px]' src={img5} alt="img" />
                        </div>
                            <img className='relative ml-[80px] w-[51px] h-[30px] top-[-15px]' src={number5} alt="number" />
                    </div>
                        <h2 className='text-[25px] font-bold leading-[30px] alegreyaBold mt-[110px] text-center w-[206px]' >Prunes</h2>
                        <p className='w-[206px] h-[40px] text-[14px] font-medium leading-[18px] nunitoNormal mt-[6px] text-center'>Promotes metabolic health Helps control blood sugar levels</p>
                </div>
                    
                <div className='w-[206px] h-[240px] mx-auto lg:mt-[50px]'>
                    <div>
                        <div className='w-[123px] h-[123px] rounded-full bg_explore flex items-center absolute z-10 ml-[40px]'>
                            <img className='w-[118px] h-[71px]' src={img6} alt="img" />
                        </div>
                            <img className='relative ml-[80px] w-[51px] h-[30px] top-[-15px]' src={number6} alt="number" />
                    </div>
                        <h2 className='text-[25px] font-bold leading-[30px] alegreyaBold mt-[110px] text-center w-[206px]' >Plum</h2>
                        <p className='w-[206px] h-[40px] text-[14px] font-medium leading-[18px] nunitoNormal mt-[6px] text-center'>Promotes metabolic health Helps control blood sugar levels</p>
                </div>
                    
                <div className='w-[206px] h-[240px] mx-auto lg:mt-[50px]'>
                    <div>
                        <div className='w-[123px] h-[123px] rounded-full bg_explore flex items-center absolute z-10 ml-[40px]'>
                            <img className='w-[118px] h-[71px]' src={img7} alt="img" />
                        </div>
                            <img className='relative ml-[80px] w-[51px] h-[30px] top-[-15px]' src={number7} alt="number" />
                    </div>
                        <h2 className='text-[25px] font-bold leading-[30px] alegreyaBold mt-[110px] text-center w-[206px]' >Apricot</h2>
                        <p className='w-[206px] h-[40px] text-[14px] font-medium leading-[18px] nunitoNormal mt-[6px] text-center'>Promotes metabolic health Helps control blood sugar levels</p>
                </div>
                    
                <div className='w-[206px] h-[240px] mx-auto lg:mt-[50px]'>
                    <div>
                        <div className='w-[123px] h-[123px] rounded-full bg_explore flex items-center absolute z-10 ml-[40px]'>
                            <img className='w-[118px] h-[71px]' src={img8} alt="img" />
                        </div>
                            <img className='relative ml-[80px] w-[51px] h-[30px] top-[-15px]' src={number8} alt="number" />
                    </div>
                        <h2 className='text-[25px] font-bold leading-[30px] alegreyaBold mt-[110px] text-center w-[206px]' >Acerola Cherry</h2>
                        <p className='w-[206px] h-[40px] text-[14px] font-medium leading-[18px] nunitoNormal mt-[6px] text-center'>Promotes metabolic health Helps control blood sugar levels</p>
                </div>
                    
                <div className='w-[206px] h-[240px] mx-auto lg:mt-[50px]'>
                    <div>
                        <div className='w-[123px] h-[123px] rounded-full bg_explore flex items-center absolute z-10 ml-[40px]'>
                            <img className='w-[118px] h-[71px]' src={img9} alt="img" />
                        </div>
                            <img className='relative ml-[80px] w-[51px] h-[30px] top-[-15px]' src={number9} alt="number" />
                    </div>
                        <h2 className='text-[25px] font-bold leading-[30px] alegreyaBold mt-[110px] text-center w-[206px]' >Black Current</h2>
                        <p className='w-[206px] h-[40px] text-[14px] font-medium leading-[18px] nunitoNormal mt-[6px] text-center'>Promotes metabolic health Helps control blood sugar levels</p>
                </div>
                    
                <div className='w-[206px] h-[240px] mx-auto lg:mt-[50px]'>
                    <div>
                        <div className='w-[123px] h-[123px] rounded-full bg_explore flex items-center absolute z-10 ml-[40px]'>
                            <img className='w-[118px] h-[71px]' src={img10} alt="img" />
                        </div>
                            <img className='relative ml-[80px] w-[51px] h-[30px] top-[-15px]' src={number10} alt="number" />
                    </div>
                        <h2 className='text-[25px] font-bold leading-[30px] alegreyaBold mt-[110px] text-center w-[206px]' >Anjeer/Fig</h2>
                        <p className='w-[206px] h-[40px] text-[14px] font-medium leading-[18px] nunitoNormal mt-[6px] text-center'>Promotes metabolic health Helps control blood sugar levels</p>
                </div>
            </div>
        </div>
            
        <div className='md:flex block items-center lg:gap-[50px] gap-4 py-[9px] border-b-[1px] border-[#CED0C8] px-6'>
            <div>
                <img className='lg:w-[168px] w-[260px] h-[168px]' src={img13} alt="img1" />
            </div>
            <div>
                <div className='flex justify-between items-center'>
                    <h2 className='lg:text-[45px] md:text-[35px] font-bold leading-[54px] alegreyaBold'>Berries</h2>
                    <p className='text-[16px] font-bold leading-[19px] text_gre alegreyaBold'>EXPLORE MORE +</p>
                </div>
                <p className='lg:text-[18px] text-[17px] font-normal leading-[24px] nunitoNormal mt-[15px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore mag na aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.</p>
            </div>
        </div> 
            
        <div className='md:flex block items-center lg:gap-[50px] gap-4 py-[9px] border-b-[1px] border-[#CED0C8] px-6'>
            <div>
                <img className='lg:w-[168px] w-[260px] h-[168px]' src={img14} alt="img1" />
            </div>
            <div>
                <div className='flex justify-between items-center'>
                    <h2 className='lg:text-[45px] md:text-[35px] font-bold leading-[54px] alegreyaBold'>Fruits</h2>
                    <p className='text-[16px] font-bold leading-[19px] text_gre alegreyaBold'>EXPLORE MORE +</p>
                </div>
                <p className='lg:text-[18px] text-[17px] font-normal leading-[24px] nunitoNormal mt-[15px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore mag na aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.</p>
            </div>
        </div> 
            
        <div className='md:flex block items-center lg:gap-[50px] gap-4 py-[9px] border-b-[1px] border-[#CED0C8] px-6'>
            <div>
                <img className='lg:w-[168px] w-[260px] h-[168px]' src={img15} alt="img1" />
            </div>
            <div>
                <div className='flex justify-between items-center'>
                    <h2 className='lg:text-[45px] md:text-[35px] font-bold leading-[54px] alegreyaBold'>Seeds</h2>
                    <p className='text-[16px] font-bold leading-[19px] text_gre alegreyaBold'>EXPLORE MORE +</p>
                </div>
                <p className='lg:text-[18px] text-[17px] font-normal leading-[24px] nunitoNormal mt-[15px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore mag na aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.</p>
            </div>
        </div> 
            
        <div className='md:flex block items-center lg:gap-[50px] gap-4 py-[9px] border-b-[1px] border-[#CED0C8] px-6'>
            <div>
                <img className='lg:w-[168px] w-[260px] h-[168px]' src={img16} alt="img1" />
            </div>
            <div>
                <div className='flex justify-between items-center'>
                    <h2 className='lg:text-[45px] md:text-[35px] font-bold leading-[54px] alegreyaBold'>Vegetables</h2>
                    <p className='text-[16px] font-bold leading-[19px] text_gre alegreyaBold'>EXPLORE MORE +</p>
                </div>
                <p className='lg:text-[18px] text-[17px] font-normal leading-[24px] nunitoNormal mt-[15px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore mag na aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.</p>
            </div>
        </div> 
            
        <div className='md:flex block items-center lg:gap-[50px] gap-4 py-[9px] border-b-[1px] border-[#CED0C8] px-6'>
            <div>
                <img className='lg:w-[168px] w-[260px] h-[168px]' src={img17} alt="img1" />
            </div>
            <div>
                <div className='flex justify-between items-center'>
                    <h2 className='lg:text-[45px] md:text-[35px] font-bold leading-[54px] alegreyaBold'>Greens/Leaves</h2>
                    <p className='text-[16px] font-bold leading-[19px] text_gre alegreyaBold'>EXPLORE MORE +</p>
                </div>
                <p className='lg:text-[18px] text-[17px] font-normal leading-[24px] nunitoNormal mt-[15px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore mag na aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.</p>
            </div>
        </div> 
        <div className='md:flex block items-center lg:gap-[50px] gap-4 py-[9px] border-b-[1px] border-[#CED0C8] px-6'>
            <div>
                <img className='lg:w-[168px] w-[260px] h-[168px]' src={img18} alt="img1" />
            </div>
            <div>
                <div className='flex justify-between items-center'>
                    <h2 className='lg:text-[45px] md:text-[35px] font-bold leading-[54px] alegreyaBold'>Other</h2>
                    <p className='text-[16px] font-bold leading-[19px] text_gre alegreyaBold'>EXPLORE MORE +</p>
                </div>
                <p className='lg:text-[18px] text-[17px] font-normal leading-[24px] nunitoNormal mt-[15px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore mag na aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.</p>
            </div>
        </div> 

    </div>
    );
};

export default Explore;

 
           {/*  </div>
            <div className='w-[1094px] mx-auto flex items-center gap-[50px] border-b-[1px] border-[#CED0C8] py-[9px]'>
                <div>
                    <img className='w-[202px] h-[178px]' src={img2} alt="img2" />
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-[45px] font-bold leading-[54px] alegreyaBold'>Nuts/Dryfruits</h2>
                        <p className='text-[16px] font-bold leading-[19px] text_gre alegreyaBold'>EXPLORE MORE +</p>
                    </div>
                    <p className='text-[17px] font-normal leading-[24px] nunitoNormal'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore mag na aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.</p>
                </div>
            </div>
            <div className='w-[1094px] mx-auto flex items-center gap-[50px] border-b-[1px] border-[#CED0C8] py-[9px]'>
                <div>
                    <img className='w-[224px] h-[149px]' src={img3} alt="img3" />
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-[45px] font-bold leading-[54px] alegreyaBold'>Berries</h2>
                        <p className='text-[16px] font-bold leading-[19px] text_gre alegreyaBold'>EXPLORE MORE +</p>
                    </div>
                    <p className='text-[17px] font-normal leading-[24px] nunitoNormal'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore mag na aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.</p>
                </div>
            </div>
            <div className='w-[1094px] mx-auto flex items-center gap-[50px] border-b-[1px] border-[#CED0C8] py-[9px]'>
                <div>
                    <img className='w-[213px] h-[145px]' src={img4} alt="img4" />
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-[45px] font-bold leading-[54px] alegreyaBold'>Fruits</h2>
                        <p className='text-[16px] font-bold leading-[19px] text_gre alegreyaBold'>EXPLORE MORE +</p>
                    </div>
                    <p className='text-[17px] font-normal leading-[24px] nunitoNormal'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore mag na aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.</p>
                </div>
            </div>
            <div className='w-[1094px] mx-auto flex items-center gap-[50px] border-b-[1px] border-[#CED0C8] py-[9px]'>
                <div>
                    <img className='w-[212px] h-[128px]' src={img5} alt="img5" />
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-[45px] font-bold leading-[54px] alegreyaBold'>Seeds</h2>
                        <p className='text-[16px] font-bold leading-[19px] text_gre alegreyaBold'>EXPLORE MORE +</p>
                    </div>
                    <p className='text-[17px] font-normal leading-[24px] nunitoNormal'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore mag na aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.</p>
                </div>
            </div>
            <div className='w-[1094px] mx-auto flex items-center gap-[50px] border-b-[1px] border-[#CED0C8] py-[9px]'>
                <div>
                    <img className='w-[218px] h-[148px]' src={img6} alt="img6" />
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-[45px] font-bold leading-[54px] alegreyaBold'>Vegetables</h2>
                        <p className='text-[16px] font-bold leading-[19px] text_gre alegreyaBold'>EXPLORE MORE +</p>
                    </div>
                    <p className='text-[17px] font-normal leading-[24px] nunitoNormal'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore mag na aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.</p>
                </div>
            </div>
            <div className='w-[1094px] mx-auto flex items-center gap-[50px] border-b-[1px] border-[#CED0C8] py-[9px]'>
                <div>
                    <img className='w-[223px] h-[149px]' src={img7} alt="img7" />
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-[45px] font-bold leading-[54px] alegreyaBold'>Greens/Leaves</h2>
                        <p className='text-[16px] font-bold leading-[19px] text_gre alegreyaBold'>EXPLORE MORE +</p>
                    </div>
                    <p className='text-[17px] font-normal leading-[24px] nunitoNormal'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore mag na aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.</p>
                </div>
            </div>
                <div className='w-[1094px] mx-auto flex items-center gap-[50px] border-b-[1px] border-[#CED0C8] py-[9px]'>
                <div>
                    <img className='w-[198px] h-[143px]' src={img8} alt="img8" />
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-[45px] font-bold leading-[54px] alegreyaBold'>Other</h2>
                        <p className='text-[16px] font-bold leading-[19px] text_gre alegreyaBold'>EXPLORE MORE +</p>
                    </div>
                    <p className='text-[17px] font-normal leading-[24px] nunitoNormal'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore mag na aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.</p>
                </div>
            </div> */}