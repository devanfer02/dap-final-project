import { useEffect } from "react"
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import assets from "../utils/assets";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/pagination'
import '../style/sliderhero.css'
import '../style/carousel.css'
import '../style/home.css'

function SliderHero() {
  return (
    <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className='swiper-hero'
      >
      { assets.heroes.map((hero, index) => (
        <SwiperSlide key={index}> 
          <div className='overlay'></div>
          <img src={hero} className="slider-img" alt="hero" draggable="false"/>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

function CarouselText() {
  return (
    <section className="carousel-text">
      <h3 className="font-title">
        Hamdalla Agil
      </h3>
      <h1 className="centered-text font-desc">
        Illustrator &amp; <br/>
        Graphic Novel <br/>
        Artist
      </h1>
      <Link to="/portfolio" className="btn-custom-hero">
        Portfolio
      </Link>
      <div className='mt-5'>
        <ul className='nav justify-content-center mb-3'>
          { assets.socials.map((social) => (
            <li className='nav-item footer-item'>
              <Link to={social.href} target="_blank">
                <img className="" src={social.logo} alt="" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function HomeCarousel() {
  return (
    <section className="hero-carousel">
      <SliderHero/>
      <CarouselText/>
    </section>
  )
}

function HomeAbout() {
  const isPhone = window.innerWidth <= 550
  
  const greetDiv = () => {
    return (
      <div className="">
        <img src={assets.greet} alt="greet" className="img-about"/>
      </div>
    )
  }
  
  if (isPhone) {
    return (
      <section className="section-home">
        <section className="home-about-container">
            <h1 className="font-dk-96 welcome-title">Welcome</h1>
            { greetDiv() }
            <p className="font-about">
            This is Hamdalla Agil an illustrator based in indonesia. 
            You can explore more of his artworks through this website and get to know more about him.
            </p>
            <Link to="/about" className="btn-custom-about">
              About Me
            </Link>
        </section>
      </section>
    )
  }
  
  return (
    <section className="section-home">
      <section className="home-about-container">
        <div className="p-5 home-content">
          <h1 className="font-dk-96">Welcome</h1>
          <p className="font-about">
          This is Hamdalla Agil an illustrator based in indonesia. 
          You can explore more of his artworks through this website and get to know more about him.
          </p>
          <Link to="/about" className="btn-custom-about">
            About Me
          </Link>
        </div>
        { greetDiv() }
      </section>
    </section>
  )
}

function HomeIllustrations() {
  return (
    <section>
      
    </section>
  )
}

export default function HomePage() {
  useEffect(() => {
    document.title = 'Home'
  }, [])
  
  return (
    <>
      <HomeCarousel/>
      <HomeAbout/>
      <HomeIllustrations/>
    </>
  )
}
