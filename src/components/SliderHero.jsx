import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import assets from "../utils/assets";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/pagination'
import '../style/sliderhero.css'

export default function SliderHero() {
  let key = 0
  
  return (
    <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className='swiper-hero'
      >
      { assets.heroes.map((hero) => (
        <SwiperSlide key={key++}> 
          <div className='overlay'></div>
          <img src={hero} className="slider-img" alt="hero" draggable="false"/>
        </SwiperSlide>
      ))}
    
    </Swiper>
  )
}