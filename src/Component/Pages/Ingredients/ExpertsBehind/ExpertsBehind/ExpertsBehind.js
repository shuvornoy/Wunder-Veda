import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import experts from '../../../../../assets/experts/experts.png';
import ellipse from '../../../../../assets/experts/Ellipse 17.png';
import img from '../../../../../assets/how-we/behind/image_18.png';
import aboutus from '../../../../../assets/experts/aboutus.png';

const ExpertsBehind = () => {
    return (
        <div className='w-full h-[950px] bg-[#CED0C8]'>
            <div className='lg:w-[774px] w-full mx-auto text-center text-[#1E2819]'>
                <h2 className='lg:text-[60px] md:text-[50px] text-[40px] leading-[72px] font-bold alegreyaBold pt-[105px]'>Experts Behind the Product</h2>
                <p className='text-[18px] leading-[24px] font-normal z-10 nunitoNormal w-full h-[47px]'>Habitasse platea dictumst quisque sagittis purus sit. Dignissim enim sit amet venenatis. In est ante in nibh mauris cursus mattis.</p>
            </div>

            <div className='w-full mx-auto mt-[58px]'>
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
                      <div className='flex ml-[365px]'>
                          <div>
                              <div>
                                   <img className='w-[420px] h-[543px] relative z-10' src={experts} alt="experts" />
                              </div>
                               <img className='absolute w-[464px] h-[245px] top-[60px] left-[154px]' src={img} alt="img" />
                          </div>
                          <div className='w-[829px] mt-[58px]'>
                              <h2 className='text-[45px] font-bold leading-[54px] alegreyaBold'>Lorem Ipsum Dolor Sit</h2>
                              <p className='text-[18px] leading-[24px] font-medium nunitoMedium my-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut.</p>
                              <div className='flex items-center gap-4'>
                                  <div>
                                      <img className='w-[68px] h-[68px]' src={ellipse} alt="ellipse" />
                                  </div>
                                  <div>
                                      <h2 className='text-[25px] font-bold leading-[30px] text-[#ED7B23] alegreyaBold'>Researcher Name</h2>
                                      <h3 className='text-[18px] font-medium leading-[24px] nunitoMedium'>Designation | Department</h3>
                                  </div>
                              </div>
                              <div className='ml-[-170px] mt-[-50px]'>
                                  <img className='w-[396px] h-[369px]' src={aboutus} alt="aboutus" />
                              </div>
                          </div>
                      </div>
                    </SwiperSlide>
                  <SwiperSlide>
                      <div className='flex ml-[365px]'>
                          <div>
                              <div>
                                   <img className='w-[420px] h-[543px] relative z-10' src={experts} alt="experts" />
                              </div>
                               <img className='absolute w-[464px] h-[245px] top-[60px] left-[154px]' src={img} alt="img" />
                          </div>
                          <div className='w-[829px] mt-[58px]'>
                              <h2 className='text-[45px] font-bold leading-[54px] alegreyaBold'>Lorem Ipsum Dolor Sit</h2>
                              <p className='text-[18px] leading-[24px] font-medium nunitoMedium my-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut.</p>
                              <div className='flex items-center gap-4'>
                                  <div>
                                      <img className='w-[68px] h-[68px]' src={ellipse} alt="ellipse" />
                                  </div>
                                  <div>
                                      <h2 className='text-[25px] font-bold leading-[30px] text-[#ED7B23] alegreyaBold'>Researcher Name</h2>
                                      <h3 className='text-[18px] font-medium leading-[24px] nunitoMedium'>Designation | Department</h3>
                                  </div>
                              </div>
                              <div className='ml-[-170px] mt-[-50px]'>
                                  <img className='w-[396px] h-[369px]' src={aboutus} alt="aboutus" />
                              </div>
                          </div>
                      </div>
                    </SwiperSlide>
                  <SwiperSlide>
                      <div className='flex ml-[365px]'>
                          <div>
                              <div>
                                   <img className='w-[420px] h-[543px] relative z-10' src={experts} alt="experts" />
                              </div>
                               <img className='absolute w-[464px] h-[245px] top-[60px] left-[154px]' src={img} alt="img" />
                          </div>
                          <div className='w-[829px] mt-[58px]'>
                              <h2 className='text-[45px] font-bold leading-[54px] alegreyaBold'>Lorem Ipsum Dolor Sit</h2>
                              <p className='text-[18px] leading-[24px] font-medium nunitoMedium my-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut.</p>
                              <div className='flex items-center gap-4'>
                                  <div>
                                      <img className='w-[68px] h-[68px]' src={ellipse} alt="ellipse" />
                                  </div>
                                  <div>
                                      <h2 className='text-[25px] font-bold leading-[30px] text-[#ED7B23] alegreyaBold'>Researcher Name</h2>
                                      <h3 className='text-[18px] font-medium leading-[24px] nunitoMedium'>Designation | Department</h3>
                                  </div>
                              </div>
                              <div className='ml-[-170px] mt-[-50px]'>
                                  <img className='w-[396px] h-[369px]' src={aboutus} alt="aboutus" />
                              </div>
                          </div>
                      </div>
                    </SwiperSlide>
                  <SwiperSlide>
                      <div className='flex ml-[365px]'>
                          <div>
                              <div>
                                   <img className='w-[420px] h-[543px] relative z-10' src={experts} alt="experts" />
                              </div>
                               <img className='absolute w-[464px] h-[245px] top-[60px] left-[154px]' src={img} alt="img" />
                          </div>
                          <div className='w-[829px] mt-[58px]'>
                              <h2 className='text-[45px] font-bold leading-[54px] alegreyaBold'>Lorem Ipsum Dolor Sit</h2>
                              <p className='text-[18px] leading-[24px] font-medium nunitoMedium my-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut.</p>
                              <div className='flex items-center gap-4'>
                                  <div>
                                      <img className='w-[68px] h-[68px]' src={ellipse} alt="ellipse" />
                                  </div>
                                  <div>
                                      <h2 className='text-[25px] font-bold leading-[30px] text-[#ED7B23] alegreyaBold'>Researcher Name</h2>
                                      <h3 className='text-[18px] font-medium leading-[24px] nunitoMedium'>Designation | Department</h3>
                                  </div>
                              </div>
                              <div className='ml-[-170px] mt-[-50px]'>
                                  <img className='w-[396px] h-[369px]' src={aboutus} alt="aboutus" />
                              </div>
                          </div>
                      </div>
                    </SwiperSlide>
                  <SwiperSlide>
                      <div className='flex ml-[365px]'>
                          <div>
                              <div>
                                   <img className='w-[420px] h-[543px] relative z-10' src={experts} alt="experts" />
                              </div>
                               <img className='absolute w-[464px] h-[245px] top-[60px] left-[154px]' src={img} alt="img" />
                          </div>
                          <div className='w-[829px] mt-[58px]'>
                              <h2 className='text-[45px] font-bold leading-[54px] alegreyaBold'>Lorem Ipsum Dolor Sit</h2>
                              <p className='text-[18px] leading-[24px] font-medium nunitoMedium my-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut.</p>
                              <div className='flex items-center gap-4'>
                                  <div>
                                      <img className='w-[68px] h-[68px]' src={ellipse} alt="ellipse" />
                                  </div>
                                  <div>
                                      <h2 className='text-[25px] font-bold leading-[30px] text-[#ED7B23] alegreyaBold'>Researcher Name</h2>
                                      <h3 className='text-[18px] font-medium leading-[24px] nunitoMedium'>Designation | Department</h3>
                                  </div>
                              </div>
                              <div className='ml-[-170px] mt-[-50px]'>
                                  <img className='w-[396px] h-[369px]' src={aboutus} alt="aboutus" />
                              </div>
                          </div>
                      </div>
                    </SwiperSlide>
                </Swiper>
          </div>
    </div>
    );
};

export default ExpertsBehind;