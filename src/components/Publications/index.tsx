import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import Slide from './components/Slide';

const Publications = () => (
  <div>
    <Swiper
      effect={"coverflow"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      slidesPerView={3}
        centeredSlides
        style={{ height: "500px" }}
      modules={[EffectCoverflow, Navigation, Pagination]}
      className="h-[400px] w-[1400px]"
    >
      <SwiperSlide className="bg-red-100"></SwiperSlide>
      <SwiperSlide className="bg-red-200"></SwiperSlide>
      <SwiperSlide className="bg-red-300"></SwiperSlide>
      <SwiperSlide className="bg-red-400"></SwiperSlide>
      <SwiperSlide className="bg-red-500"></SwiperSlide>
      {/* <SwiperSlide><Slide image="bg-red-100" title="" desc="" link="" /></SwiperSlide>
      <SwiperSlide><Slide image="bg-red-200" title="" desc="" link="" /></SwiperSlide>
      <SwiperSlide><Slide image="bg-red-300" title="" desc="" link="" /></SwiperSlide>
      <SwiperSlide><Slide image="bg-red-400" title="" desc="" link="" /></SwiperSlide>
      <SwiperSlide><Slide image="bg-red-500" title="" desc="" link="" /></SwiperSlide>
      <SwiperSlide><Slide image="bg-red-600" title="" desc="" link="" /></SwiperSlide> */}
    </Swiper>
  </div>
);

export default Publications;
