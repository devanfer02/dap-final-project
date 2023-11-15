import { useEffect } from "react"
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import Hero1 from '../assets/images/hero1.jpg'
import Hero2 from '../assets/images/hero2.jpg'
import Greet from '../assets/images/greet1.jpg'
import emailLogo from '../assets/icons/social/email.svg'
import tweetLogo from '../assets/icons/social/twitter.svg'
import instaLogo from '../assets/icons/social/instagram.svg'
import '../style/carousel.css'
import '../style/home.css'

function CarouselImage({ src }) {
  return (
    <div className="hero-container">
      <div className="overlay"></div>
      <img className="hero-image" src={src} alt="pic" draggable="false"/>
    </div>
  )
}

function HomeCarousel() {
  const [ index, setIndex ] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  return (
    <section className="hero-carousel">
      <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark" >
        <Carousel.Item>
          <CarouselImage src={Hero1}/>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage src={Hero2}/>
        </Carousel.Item>
      </Carousel>
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
            <li className='nav-item footer-item'>
              <Link to="">
                <img className="" src={instaLogo} alt="" />
              </Link>
            </li>
            <li className="nav-item footer-item">
              <Link>
                <img className="" src={emailLogo} alt="" />
              </Link>
            </li>
            <li className="nav-item footer-item">
              <Link>
                <img className="" src={tweetLogo} alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </section>
  )
}

function HomeAbout() {
  return (
    <section>
      <section className="home-about-container">

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
      <div>
        <h1>Hello World</h1>
      </div>
    </>
  )
}
