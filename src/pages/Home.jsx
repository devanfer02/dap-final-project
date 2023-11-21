import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react'
import assets from "../utils/assets";
import 'swiper/css'
import '../style/carousel.css'
import '../style/home.css'
import SliderHero from "../components/SliderHero";

function CarouselImage({ src }) {
  return (
    <div className="hero-container">
      <div className="overlay"></div>
      <img className="hero-image" src={src} alt="pic" draggable="false"/>
    </div>
  )
}

function HomeCarousel() {

  return (
    <section className="hero-carousel">
      <SliderHero/>
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
    </section>
  )
}

function HomeAbout() {
  const [ currWidth, setCurrWidth ] = useState(window.innerWidth)
  const [ isPhone, setIsPhone ] = useState(currWidth <= 550)

  const greetDiv = () => {
    return (
      <div className="">
        <img src={assets.greet} alt="greet" className="img-about"/>
      </div>
    )
  }

  const handleResize = () => {
    setCurrWidth(window.innerWidth)
    setIsPhone(currWidth <= 550)
  }

  useEffect(() => {
    if (window.innerWidth !== currWidth) {
      handleResize()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  
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

export default function HomePage() {
  useEffect(() => {
    document.title = 'Home'
  }, [])
  
  return (
    <>
      <HomeCarousel/>
      <HomeAbout/>
    </>
  )
}
