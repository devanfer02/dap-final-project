import { useEffect, useState } from "react"
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
        <section className="home-about-container justify-content-center pb-5 container">
            <div className="introduction-container container align-items-center justify-content-center">
              <h1 className="font-dk-96 welcome-title">Welcome</h1>
              { greetDiv() }
              <p className="font-about">
              This is Hamdalla Agil an illustrator based in indonesia. 
              You can explore more of his artworks through this website and get to know more about him.
              </p>
              <Link to="/about" className="btn-custom-about col-xl-1 ">
                About Me
              </Link>
            </div>
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
  const getSlidesPerView = () => {
    const isPhone = window.innerWidth <= 550

    if (isPhone) return 2
    else return 4
  }

  const getDisplayClass = () => {
    const isPhone = window.innerWidth <= 550

    if (isPhone) return 'd-none'
    else return ''
  }

  const [ illustration, setIllustration ] = useState(assets.illustraions[0])

  const notActive = (currentIllustration, sliderIllustration) => {
    return currentIllustration.title !== sliderIllustration.title ? 'not-active' : ''
  }

  return (
    <section className="section-illust">
      <section className="section-illustration container">
        <section className="current-illustration d-flex">
          <div className="container-current-illust ">
            <img src={illustration.src} alt={illustration.title} className="current-illustration-img" draggable="false"/>
          </div>
          <div className="maintaner-height "></div>
          <div className={`illustration-info ${getDisplayClass()}`}>
            <h2 className="illustration-title">{illustration.title}</h2>
            <p className="illustration-category">{illustration.category}</p>
            <p className="illustration-description">{illustration.paragraf}</p>
            <Link className="btn-custom-illust" to='/portfolio'>
              &nbsp;See More&nbsp;
            </Link>
          </div>
        </section>
        <Swiper
          slidesPerView={getSlidesPerView()}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          navigation
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="swiper-illustration"
        >
          { assets.illustraions.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="illust-container">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  draggable="false" 
                  className={`illust-slider ${notActive(illustration, item)}`}
                  onClick={() => setIllustration(item)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  )
}

export default function HomePage() {
  const renderSpace = (times) => {
    return Array(times + 1).join('\u00a0')
  }

  const space = renderSpace(50)

  const SectionTitle = ({ title }) => {
    return (
      <div className="container section-title-container">
        <h1 className="section-title">{title}</h1>
        <p className="underlined">{space}</p>
      </div>
    )
  }

  useEffect(() => {
    document.title = 'Home'
  }, [])
  
  return (
    <>
      <HomeCarousel/>
      <SectionTitle title={'Introduction'}/>
      <HomeAbout/>
      <SectionTitle title={'Portfolio'}/>
      <HomeIllustrations/>
    </>
  )
}
