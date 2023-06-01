import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import experts from '../../../../assets/experts/experts.png';
import ellipse from '../../../../assets/experts/Ellipse 17.png';
import img from '../../../../assets/experts/image 18.png';
import aboutus from '../../../../assets/experts/aboutus.png';
import group from '../../../../assets/experts/Group.png';
import pngegg from '../../../../assets/experts/pngegg.png';
import './Expert.css'


const Experts = () => {
  return (
    <div className='xl:h-[961px] h-[947px] relative '>
            <div className='lg:w-[774px] w-full mx-auto text-center text-[#1E2819] px-6 xl:px-0'>
                <h2 className='lg:text-[60px] md:text-[50px] text-[50px] xl:leading-[72px] leading-[50px] font-bold alegreyaBold xl:pt-[121px] pt-[51px]'>Experts Behind the Product</h2>
                <p className='xl:text-[18px] text-[16px] xl:leading-[24px] leading-[22px] font-normal z-10 nunitoNormal w-full xl:h-[47px] h-[74px]'>Habitasse platea dictumst quisque sagittis purus sit. Dignissim enim sit amet venenatis. In est ante in nibh mauris cursus mattis.</p>
            </div>

            <div className=''>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper w-full mx-auto "
                >
                  <SwiperSlide>
                      <div className='md:flex xl:ml-[365px]'>
                          <div>
                              <div >
                                   <img className='xl:w-[420px] w-[202px] xl:h-[543px] h-[269px] relative z-10 ml-[70px] xl:ml-0' src={experts} alt="experts" />
                              </div>
                               <img className='absolute xl:w-[464px] w-[230px] xl:h-[245px] h-[122px] xl:top-[60px] top-[30px] xl:left-[154px] left-[-35px]' src={img} alt="img" />
                          </div>
                          <div className='xl:w-[829px] w-[390px] mt-[58px]'>
                              <h2 className='text-[45px] font-bold leading-[54px] alegreyaBold md:block hidden'>Lorem Ipsum Dolor Sit</h2>
                              <p className='text-[18px] leading-[24px] font-medium nunitoMedium my-5 md:block hidden'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut.</p>
                                
                                    <p className='text-[16px] leading-[24px] font-medium nunitoMedium my-5 md:hidden block px-6 xl:px-0 w-[383px] text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                            
                                <div className='flex items-center gap-4 justify-center mx-auto xl:justify-start'>
                                  <div>
                                      <img className='xl:w-[68px] w-[56px] xl:h-[68px] h-[56px]' src={ellipse} alt="ellipse" />
                                  </div>
                                  <div>
                                      <h2 className='xl:text-[25px] text-[20px] font-bold leading-[30px] text-[#ED7B23] alegreyaBold'>Researcher Name</h2>
                                      <h3 className='xl:text-[18px] text-[15px] font-medium leading-[24px] nunitoMedium'>Designation | Department</h3>
                                  </div>
                              </div>
                              <div className=''>
                                  <img className='xl:w-[396px] w-[196px] xl:h-[369px] h-[183px] xl:right-[170px] right-[-200px] xl:top-[-48px] top-[-420px] relative' src={aboutus} alt="aboutus" />
                              </div>
                          </div>
                      </div>
                    </SwiperSlide>
                  <SwiperSlide>
                      <div className='md:flex xl:ml-[365px]'>
                          <div>
                              <div >
                                   <img className='xl:w-[420px] w-[202px] xl:h-[543px] h-[269px] relative z-10 ml-[70px] xl:ml-0' src={experts} alt="experts" />
                              </div>
                               <img className='absolute xl:w-[464px] w-[230px] xl:h-[245px] h-[122px] xl:top-[60px] top-[30px] xl:left-[154px] left-[-35px]' src={img} alt="img" />
                          </div>
                          <div className='xl:w-[829px] w-[390px] mt-[58px]'>
                              <h2 className='text-[45px] font-bold leading-[54px] alegreyaBold md:block hidden'>Lorem Ipsum Dolor Sit</h2>
                              <p className='text-[18px] leading-[24px] font-medium nunitoMedium my-5 md:block hidden'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut.</p>
                                
                                    <p className='text-[16px] leading-[24px] font-medium nunitoMedium my-5 md:hidden block px-6 xl:px-0 w-[383px] text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                            
                                <div className='flex items-center gap-4 justify-center mx-auto xl:justify-start'>
                                  <div>
                                      <img className='xl:w-[68px] w-[56px] xl:h-[68px] h-[56px]' src={ellipse} alt="ellipse" />
                                  </div>
                                  <div>
                                      <h2 className='xl:text-[25px] text-[20px] font-bold leading-[30px] text-[#ED7B23] alegreyaBold'>Researcher Name</h2>
                                      <h3 className='xl:text-[18px] text-[15px] font-medium leading-[24px] nunitoMedium'>Designation | Department</h3>
                                  </div>
                              </div>
                              <div className=''>
                                  <img className='xl:w-[396px] w-[196px] xl:h-[369px] h-[183px] xl:right-[170px] right-[-200px] xl:top-[-48px] top-[-420px] relative' src={aboutus} alt="aboutus" />
                              </div>
                          </div>
                      </div>
                    </SwiperSlide>
                  <SwiperSlide>
                      <div className='md:flex xl:ml-[365px]'>
                          <div>
                              <div >
                                   <img className='xl:w-[420px] w-[202px] xl:h-[543px] h-[269px] relative z-10 ml-[70px] xl:ml-0' src={experts} alt="experts" />
                              </div>
                               <img className='absolute xl:w-[464px] w-[230px] xl:h-[245px] h-[122px] xl:top-[60px] top-[30px] xl:left-[154px] left-[-35px]' src={img} alt="img" />
                          </div>
                          <div className='xl:w-[829px] w-[390px] mt-[58px]'>
                              <h2 className='text-[45px] font-bold leading-[54px] alegreyaBold md:block hidden'>Lorem Ipsum Dolor Sit</h2>
                              <p className='text-[18px] leading-[24px] font-medium nunitoMedium my-5 md:block hidden'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut.</p>
                                
                                    <p className='text-[16px] leading-[24px] font-medium nunitoMedium my-5 md:hidden block px-6 xl:px-0 w-[383px] text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                            
                                <div className='flex items-center gap-4 justify-center mx-auto xl:justify-start'>
                                  <div>
                                      <img className='xl:w-[68px] w-[56px] xl:h-[68px] h-[56px]' src={ellipse} alt="ellipse" />
                                  </div>
                                  <div>
                                      <h2 className='xl:text-[25px] text-[20px] font-bold leading-[30px] text-[#ED7B23] alegreyaBold'>Researcher Name</h2>
                                      <h3 className='xl:text-[18px] text-[15px] font-medium leading-[24px] nunitoMedium'>Designation | Department</h3>
                                  </div>
                              </div>
                              <div className=''>
                                  <img className='xl:w-[396px] w-[196px] xl:h-[369px] h-[183px] xl:right-[170px] right-[-200px] xl:top-[-48px] top-[-420px] relative' src={aboutus} alt="aboutus" />
                              </div>
                          </div>
                      </div>
                    </SwiperSlide>
                  <SwiperSlide>
                      <div className='md:flex xl:ml-[365px]'>
                          <div>
                              <div >
                                   <img className='xl:w-[420px] w-[202px] xl:h-[543px] h-[269px] relative z-10 ml-[70px] xl:ml-0' src={experts} alt="experts" />
                              </div>
                               <img className='absolute xl:w-[464px] w-[230px] xl:h-[245px] h-[122px] xl:top-[60px] top-[30px] xl:left-[154px] left-[-35px]' src={img} alt="img" />
                          </div>
                          <div className='xl:w-[829px] w-[390px] mt-[58px]'>
                              <h2 className='text-[45px] font-bold leading-[54px] alegreyaBold md:block hidden'>Lorem Ipsum Dolor Sit</h2>
                              <p className='text-[18px] leading-[24px] font-medium nunitoMedium my-5 md:block hidden'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut.</p>
                                
                                    <p className='text-[16px] leading-[24px] font-medium nunitoMedium my-5 md:hidden block px-6 xl:px-0 w-[383px] text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                            
                                <div className='flex items-center gap-4 justify-center mx-auto xl:justify-start'>
                                  <div>
                                      <img className='xl:w-[68px] w-[56px] xl:h-[68px] h-[56px]' src={ellipse} alt="ellipse" />
                                  </div>
                                  <div>
                                      <h2 className='xl:text-[25px] text-[20px] font-bold leading-[30px] text-[#ED7B23] alegreyaBold'>Researcher Name</h2>
                                      <h3 className='xl:text-[18px] text-[15px] font-medium leading-[24px] nunitoMedium'>Designation | Department</h3>
                                  </div>
                              </div>
                              <div className=''>
                                  <img className='xl:w-[396px] w-[196px] xl:h-[369px] h-[183px] xl:right-[170px] right-[-200px] xl:top-[-48px] top-[-420px] relative' src={aboutus} alt="aboutus" />
                              </div>
                          </div>
                      </div>
                    </SwiperSlide>
                  <SwiperSlide>
                      <div className='md:flex xl:ml-[365px]'>
                          <div>
                              <div >
                                   <img className='xl:w-[420px] w-[202px] xl:h-[543px] h-[269px] relative z-10 ml-[70px] xl:ml-0' src={experts} alt="experts" />
                              </div>
                               <img className='absolute xl:w-[464px] w-[230px] xl:h-[245px] h-[122px] xl:top-[60px] top-[30px] xl:left-[154px] left-[-35px]' src={img} alt="img" />
                          </div>
                          <div className='xl:w-[829px] w-[390px] mt-[58px]'>
                              <h2 className='text-[45px] font-bold leading-[54px] alegreyaBold md:block hidden'>Lorem Ipsum Dolor Sit</h2>
                              <p className='text-[18px] leading-[24px] font-medium nunitoMedium my-5 md:block hidden'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut.</p>
                                
                                    <p className='text-[16px] leading-[24px] font-medium nunitoMedium my-5 md:hidden block px-6 xl:px-0 w-[383px] text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                            
                                <div className='flex items-center gap-4 justify-center mx-auto xl:justify-start'>
                                  <div>
                                      <img className='xl:w-[68px] w-[56px] xl:h-[68px] h-[56px]' src={ellipse} alt="ellipse" />
                                  </div>
                                  <div>
                                      <h2 className='xl:text-[25px] text-[20px] font-bold leading-[30px] text-[#ED7B23] alegreyaBold'>Researcher Name</h2>
                                      <h3 className='xl:text-[18px] text-[15px] font-medium leading-[24px] nunitoMedium'>Designation | Department</h3>
                                  </div>
                              </div>
                              <div className=''>
                                  <img className='xl:w-[396px] w-[196px] xl:h-[369px] h-[183px] xl:right-[170px] right-[-200px] xl:top-[-48px] top-[-420px] relative' src={aboutus} alt="aboutus" />
                              </div>
                          </div>
                      </div>
                    </SwiperSlide>
                  <SwiperSlide>
                      <div className='md:flex xl:ml-[365px]'>
                          <div>
                              <div >
                                   <img className='xl:w-[420px] w-[202px] xl:h-[543px] h-[269px] relative z-10 ml-[70px] xl:ml-0' src={experts} alt="experts" />
                              </div>
                               <img className='absolute xl:w-[464px] w-[230px] xl:h-[245px] h-[122px] xl:top-[60px] top-[30px] xl:left-[154px] left-[-35px]' src={img} alt="img" />
                          </div>
                          <div className='xl:w-[829px] w-[390px] mt-[58px]'>
                              <h2 className='text-[45px] font-bold leading-[54px] alegreyaBold md:block hidden'>Lorem Ipsum Dolor Sit</h2>
                              <p className='text-[18px] leading-[24px] font-medium nunitoMedium my-5 md:block hidden'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut.</p>
                                
                                    <p className='text-[16px] leading-[24px] font-medium nunitoMedium my-5 md:hidden block px-6 xl:px-0 w-[383px] text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                            
                                <div className='flex items-center gap-4 justify-center mx-auto xl:justify-start'>
                                  <div>
                                      <img className='xl:w-[68px] w-[56px] xl:h-[68px] h-[56px]' src={ellipse} alt="ellipse" />
                                  </div>
                                  <div>
                                      <h2 className='xl:text-[25px] text-[20px] font-bold leading-[30px] text-[#ED7B23] alegreyaBold'>Researcher Name</h2>
                                      <h3 className='xl:text-[18px] text-[15px] font-medium leading-[24px] nunitoMedium'>Designation | Department</h3>
                                  </div>
                              </div>
                              <div className=''>
                                  <img className='xl:w-[396px] w-[196px] xl:h-[369px] h-[183px] xl:right-[170px] right-[-200px] xl:top-[-48px] top-[-420px] relative' src={aboutus} alt="aboutus" />
                              </div>
                          </div>
                      </div>
                    </SwiperSlide>

                
                </Swiper>
          </div>
          <div>
              <img className='absolute xl:w-[160px] w-[60px] xl:h-[542px] h-[210px] xl:right-0 right-0 xl:mt-[-1050px] mt-[-200px]' src={group} alt="group" />
              <img className='absolute xl:top-[100px] top-[860px] xl:right-[176px] right-[60px] xl:w-[221px] w-[85px] xl:h-[165px] h-[63px]' src={pngegg} alt="pngegg" />
               
          </div>
    </div>
  );
};
export default Experts;