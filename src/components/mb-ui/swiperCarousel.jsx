'use client';

import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/css/pagination';
import '/src/styles/swiperCarousel.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function SwiperCarousel() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="swiperCarousel"
            >
                <SwiperSlide>
                    <div className={'h-[40vh]'}>Slide</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'h-[40vh]'}>Slide</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'h-[40vh]'}>Slide</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'h-[40vh]'}>Slide</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'h-[40vh]'}>Slide</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'h-[40vh]'}>Slide</div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
