import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { heroes, illustrations, others } from "../utils/assets/assets.home";
import { socials } from "../utils/assets/assets.socials";
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
      { heroes.map((hero, index) => (
        <SwiperSlide key={index}> 
          <div className='overlay'></div>
          <img src={hero} className="slider-img" alt="hero" draggable="false" loading="lazy"/>
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
          { socials.map((social) => (
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
  const [ isPhone, setIsPhone ] = useState(window.innerWidth <= 550)
  
  const greetDiv = () => {
    return (
      <div className="">
        <img src={others.greet} alt="greet" className="img-about" loading="lazy"/>
      </div>
    )
  }

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth <= 550)
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  
  if (isPhone) {
    return (
      <section className="section-home">
        <section className="home-about-container justify-content-center pb-5">
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
  const getDisplayClass = () => {
    const isLessThan = window.innerWidth <= 810

    if (isLessThan) return 'd-none'
    else return ''
  }

  const getSlidesPerView = () => {
    const isPhone = window.innerWidth <= 550

    if (isPhone) return 2
    else return 4
  }

  const notActive = (currentIllustration, sliderIllustration) => {
    return currentIllustration.title !== sliderIllustration.title ? 'not-active' : ''
  }

  const [ illustration, setIllustration ] = useState(illustraions[0])
  const [ displayClass, setDisplayClass ] = useState(getDisplayClass())
  const [ slidesPerView, setSlidesPerView ] = useState(getSlidesPerView)

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView())
      setDisplayClass(getDisplayClass())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <section className="section-illust">
      <section className="section-illustration container">
        <section className="current-illustration d-flex">
          <div className="container-current-illust">
            <img 
              src={illustration.src} 
              alt={illustration.title} 
              className="current-illustration-img" 
              draggable="false"
              loading="lazy"
            />
          </div>
          <div className="maintaner-height "></div>
          <div className={`illustration-info ${displayClass}`}>
            <h2 className="illustration-title">{illustration.title}</h2>
            <p className="illustration-category">{illustration.category}</p>
            <p className="illustration-description">{illustration.paragraf}</p>
            <Link className="btn-custom-illust" to='/portfolio'>
              &nbsp;See More&nbsp;
            </Link>
          </div>
        </section>
        <Swiper
          slidesPerView={slidesPerView}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          navigation
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="swiper-illustration"
        >
          { illustraions.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="illust-container">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  draggable="false" 
                  className={`illust-slider ${notActive(illustration, item)}`}
                  onClick={() => setIllustration(item)}
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  )
}

function PlsHelpImBroke() {
  return (
    <section className="pls-help">
      <div className="pls-help-text">
        <h1 className="pls-help-title">
          Please Help Me, I have to pay my bills
        </h1>
        <p className="pls-help-little">
          Buy my prints or stickers please!
        </p>
      </div>
    </section>
  )
}

function HomeStore() {
  return (
    <section className="store-section container">
      <section className="store-information">
        <h5 className="store-info">The prints are live!</h5>
        <p className="store-desc">check out all hamdallagil's artwork here!</p>
        <Link to="/store" className="btn-custom-about">
          Store
        </Link>
      </section>
      <section className="store-image-ad">
        <img src={others.ad} alt="ad-store" className="store-image" loading="lazy"/>
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
      <PlsHelpImBroke/>
      <SectionTitle title={'Store'}/>
      <HomeStore/>
    </>
  )
}
