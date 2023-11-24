import { useEffect } from "react"
import pp from '../assets/images/flag_{selflovedude}.jpg'
import '../style/about.css'

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Me'
  }, [])

  return (
    <>
      <section className="about-section justify-content-center">
        <section className="row justify-content-center p-5">
          <div className="col-md-6 justify-content-center">
            <section className="about-content container p-5">
              <h1 className="title-about">About</h1>
              <p className="desc-about">
              Hamdalla Agil an illustrator based in indonesia.
              You can explore more of his artworks through this website and get to know more about him.
              </p>
            </section>
          </div>
          <div className="col-md-6 justify-content-center">
            <section className="picture-content">
              <img src={pp} alt="photo-profile" className="photo-profile img-fluid"/>
            </section>
          </div>
        </section>
      </section>
    </>
  )
}

