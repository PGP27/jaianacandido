import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCards, EffectFade, Navigation, Pagination } from 'swiper';
import "./styles.css";

const Publications = () => (
  <Swiper
    effect={"cards"}
    navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[EffectCards, Navigation, Pagination]}
    className="h-80 w-80 mySwiper"
  >
    <SwiperSlide className="">Slide 1</SwiperSlide>
    <SwiperSlide className="">Slide 2</SwiperSlide>
    <SwiperSlide className="">Slide 3</SwiperSlide>
    <SwiperSlide className="">Slide 4</SwiperSlide>
    <SwiperSlide className="">Slide 5</SwiperSlide>
    <SwiperSlide className="">Slide 6</SwiperSlide>
    <SwiperSlide className="">Slide 7</SwiperSlide>
    <SwiperSlide className="">Slide 8</SwiperSlide>
    <SwiperSlide className="">Slide 9</SwiperSlide>
  </Swiper>
);

export default Publications;
