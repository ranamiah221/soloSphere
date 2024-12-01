import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide/Slide';
import bgImg1 from '../../assets/images/carousel1.jpg';
import bgImg2 from '../../assets/images/carousel2.jpg';
import bgImg3 from '../../assets/images/carousel3.jpg';

const Banner = () => {
    return (
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slide bgImg={bgImg1} title='Get Your Web Development Projects Done In Minutes'></Slide></SwiperSlide>
        <SwiperSlide><Slide bgImg={bgImg2} title='Get Your Graphics Projects Done In Minutes'></Slide></SwiperSlide>
        <SwiperSlide><Slide bgImg={bgImg3} title='Get Your Digital development Projects Done In Minutes'></Slide></SwiperSlide>
      </Swiper>
    );
};

export default Banner;