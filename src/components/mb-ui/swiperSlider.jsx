'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '/public/images/gite-jules-romains/cottage-outdoor-3.jpg';

import 'swiper/scss';
import 'swiper/css/parallax';
import 'swiper/css/pagination';
import '/src/styles/swiperSlider.css';

import NextImage from 'next/image';

import { clsx } from 'clsx';
import { Autoplay, Pagination, Parallax } from 'swiper/modules';
import Image from '@/components/mb-ui/image';

export default function SwiperSlider() {
    const swiperOptions = {
        /*autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },*/
        pagination: {
            clickable: true,
            el: '.custom-swiper-pagination',
        },
        parallax: true,
        loop: true,
        spaceBetween: 0,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                centeredSlides: false,
            },
            576: {
                centeredSlides: false,
            },
            768: {
                centeredSlides: false,
            },
            992: {
                centeredSlides: false,
            },
            1400: {
                centeredSlides: true,
            },
        },
    };
    return (
        <Swiper
            modules={[Pagination, Parallax, Autoplay]}
            {...swiperOptions}
            className="swiperSlider"
        >
            <SwiperSlide className={'h-full w-full overflow-hidden bg-dark'}>
                <div
                    className={clsx('h-full w-full')}
                    data-swiper-parallax="250"
                    data-parallax="0.75"
                    data-swiper-parallax-opacity="1"
                >
                    <div className={'relative h-full w-full opacity-60'}>
                        <NextImage
                            fill
                            data-swiper-parallax="250"
                            data-parallax="0.15"
                            data-swiper-parallax-opacity="1"
                            alt="toto"
                            className={'object-cover'}
                            src={image1}
                        />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className={'h-full w-full overflow-hidden bg-dark'}>
                <div
                    className={clsx('h-full w-full')}
                    data-swiper-parallax="250"
                    data-parallax="0.75"
                    data-swiper-parallax-opacity="1"
                >
                    <div className={'relative h-full w-full opacity-60'}>
                        <NextImage
                            fill
                            data-swiper-parallax="250"
                            data-parallax="0.15"
                            data-swiper-parallax-opacity="1"
                            alt="toto"
                            className={'object-cover'}
                            src={image1}
                        />
                    </div>
                </div>
            </SwiperSlide>
            <div className="absolute bottom-0 left-1/2 z-50 -translate-x-1/2">
                <div className="flex items-center justify-center">
                    <div className="swiper-button-next flex h-20 w-20 cursor-pointer items-center justify-center bg-white text-lg font-bold text-foreground after:absolute after:right-0 after:h-1/3 after:w-px after:bg-foreground after:content-['']">
                        ←
                    </div>
                    <div className="swiper-button-next flex h-20 w-20 cursor-pointer items-center justify-center bg-white text-lg font-bold text-foreground">
                        →
                    </div>
                </div>
            </div>
        </Swiper>
    );
}
