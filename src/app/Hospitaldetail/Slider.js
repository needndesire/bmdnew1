"use client"
import React from 'react'

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function HeaderComponent() {

    return (
        <>
            <section className='w-[100%] m-auto bg-black flex items-center h-[200px] '>
                <div className='w-[100%] m-auto  '>
                    <Swiper
                        spaceBetween={30}

                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={false}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper h-[200px] flex justify-center items-center z-0 "
                    >
                        <SwiperSlide>
                            <div className='h-[200px] '>
                                <figure><img src='https://mrwallpaper.com/images/thumbnail/work-hard-doctor-motivation-z7tgv7t5ztpd8ij8.webp' className='h-[200px] w-full'/></figure>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='text-center border border-black m-auto  text-white text-[13px] '>
                                <figure><img src='https://c1.wallpaperflare.com/preview/937/818/491/stethoscope-doctor-md-medical-health-hospital.jpg'className='h-[200px] w-full'/></figure>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='text-center border border-black m-auto  text-white text-[13px] '>
                                <figure><img src='https://media.gettyimages.com/id/1277414175/vector/stethoscope-heart-pulse-trace-concept-illustration.jpg?s=612x612&w=gi&k=20&c=HMoKch2FChD1ZmhG_00W7kboazNSHTEortcEmzj5sCU='className='h-[200px] w-full'/></figure>
                            </div>
                        </SwiperSlide>
                        





                    </Swiper>
                </div>
            </section>
        </>
    )

}
