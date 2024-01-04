// import React from 'react';
// import SwiperCore, { Navigation, Pagination } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.min.css';
// import 'swiper/components/navigation/navigation.min.css';
// import 'swiper/components/pagination/pagination.min.css';
// import 'swiper/swiper-bundle.min.css'; 
// import 'swiper/css';

// SwiperCore.use([Navigation, Pagination]);

// const Swipercarousel = () => {
//   return (
//     <div className="">
//       <Swiper
//         direction="horizontal"
//         navigation
//         pagination={{ clickable: true }}
//         className="swiper-container"
//       >
//         <SwiperSlide className="swiper-slide">Slide 1</SwiperSlide>
//         <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
//         <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
    
//       </Swiper>
//     </div>
//   );
// };

// export default Swipercarousel;

import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import the core Swiper CSS
import 'swiper/css/navigation'; // Import Swiper Navigation module CSS
import 'swiper/css/pagination'; // Import Swiper Pagination module CSS
import 'swiper/css/scrollbar'; // Import Swiper Scrollbar module CSS
import 'swiper/css/effect-coverflow'; // Import Swiper Coverflow effect module CSS
import 'swiper/css/effect-fade'; // Import Swiper Fade effect module CSS
import 'swiper/css/effect-flip'; // Import Swiper Flip effect module CSS
import 'swiper/css/effect-cube'; // Import Swiper Cube effect module CSS
import 'swiper/css/effect-fade'; // Import Swiper Fade effect module CSS

SwiperCore.use([Navigation, Pagination]);

const Swipercarousel = () => {
  return (
    <div className="swiper-container">
      <Swiper
        direction="horizontal"
        navigation
        pagination={{ clickable: true }}
        className="swiper-wrapper"
      >
        <SwiperSlide className="swiper-slide">Slide 1</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
        {/* Add more SwiperSlides */}
      </Swiper>
    </div>
  );
};

export default Swipercarousel;

