import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Carousel.css";

// import study1 from "../../assets/study1.jpg";

// import study3 from "../../assets/study3.jpg";
// import study5 from "../../assets/study5.jpg";
// import study4 from "../../assets/study4.jpeg";
import h4 from "../../assets/c1.jpg";
import h2 from "../../assets/c2.jpg";
import h1 from "../../assets/c3.jpg";
import study3 from "../../assets/c4.jpg";
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
          <img src={h4} alt="study" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={h2} alt="study" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={study3} alt="study" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={h1} alt="study" />
        </SwiperSlide>

      </Swiper>

    </div>
  );
};

export default Carousel;