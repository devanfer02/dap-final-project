import { useEffect } from "react"
import SectionTitle from "../components/SectionTitle"
import { faqIcons, profiles } from "../utils/assets/assets.about.js"
import '../style/about.css'

function Line() {
  return (
    <div className="line-blue mt-5 mb-5">
    </div>
  )
}

function AboutSection() {
  return (
    <section className="container row mx-auto about-section">
      <div className="col-md-6 justify-content-center">
        <section className="about-content container p-5">
          <h1 className="title-about">About</h1>
          <p className="desc-about">
          Hamdalla Agil is a comic artist and illustrator based in Malang, Indonesia. He is very passionate about drawing characters and creating digital comics. With a very unique style, he skillfully utilizes software like Adobe Photoshop, Clip Studio Paint, and Procreate to bring his artistic visions to life.
          </p>
        </section>
      </div>
      <div className="col-md-6">
        <section className="picture-content">
          <img src={profiles[0].src} alt="photo-profile" className="photo-profile rounded-3 img-fluid"/>
        </section>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="container justify-content-center mt-5 mb-5">
      <section className="d-flex justify-content-center">
        <img src={profiles[1].src} alt=""  className="img-fluid rounded-circle"/>
      </section>
      <Line/>
      <section className="container mt-5">
        <div className="row container text-center">
          <div className="col-md-4 justify-content-center text-center">
            <img src={faqIcons[2].src} alt="" className="faq-icon"/>
            <h2 className="faq-title">Drawing Tablet</h2>
            <div className="faq-list">
              <li>Ipad Air 5 11"</li>
              <li>One by Wacom (Small)</li>
            </div>
          </div>
          <div className="col-md-4">
            <img src={faqIcons[1].src} alt="" className="faq-icon"/>
            <h2 className="faq-title">Drawing</h2>
            <div className="faq-list">
              <li>Adobe</li>
              <li>Photoshop</li>
              <li>Procreate</li>
              <li>Clip Studio Paint</li>
            </div>
          </div>
          <div className="col-md-4">
            <img src={faqIcons[0].src} alt="" className="faq-icon"/>
            <h2 className="faq-title">Animation</h2>
            <div className="faq-list">
              <li>Adobe Photoshop</li>
              <li>Procreate Dreams</li>
              <li>Adobe Premeire Pro</li>
            </div>
          </div>
        </div>
        <div className="row mt-5 container text-center">
          <div className="col-md-6">
            <img src={faqIcons[3].src} alt="" className="faq-icon"/>
            <h2 className="faq-title">Work</h2>
            <div className="faq-list">
              <li>Boom Studio</li>
              <li>DC Comic</li>
            </div>
          </div>
          <div className="col-md-6">
            <img src={faqIcons[3].src} alt="" className="faq-icon"/>
            <h2 className="faq-title">Organization</h2>
            <div className="faq-list">
              <li>Raion Community</li>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="container mt-1 mb-5" id="contact">
      <section className="text-center">
        <p>please contact me for work and collaboration : 
          <p className="text-black">hamdalla.agil@gmail.com</p>
        </p>
      </section>
      <form className="justify-content-center p-5 container">
        <div className="mb-3">
          <input type="text" className="form-control" id="name" placeholder="Name"/>
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" id="email" placeholder="Email"/>
        </div>
        <div className="mb-3">
          <textarea name="" id="" className="form-control" cols="30" rows="5" placeholder="Message"/>
        </div>
        <button type="submit" className="btn btn-custom">Send</button>
      </form>
    </section>
  )
}

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Me'
  }, [])

  return (
    <section className="leaf-background">
      <AboutSection/>
      <SectionTitle title="FAQ"/>
      <FAQSection/>
      <SectionTitle title="Contact Me"/>
      <ContactSection/>
    </section>
  )
}

