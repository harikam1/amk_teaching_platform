import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Carousel.css";

import study1 from "../../assets/study1.jpg";

import study3 from "../../assets/study3.jpg";
import study5 from "../../assets/study5.jpg";
import study4 from "../../assets/study4.jpeg";

const Carousel = () => {
  return (
    <div className="carousel-container">

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >

        <SwiperSlide>
          <img src={study1} alt="study" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={study5} alt="study" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={study3} alt="study" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={study4} alt="study" />
        </SwiperSlide>

      </Swiper>

    </div>
  );
};

export default Carousel;