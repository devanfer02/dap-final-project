import { useEffect } from "react";
import { heroes } from "../utils/assets/assets.home";
import store1 from '../assets/images/store1.jpg'
import '../style/store.css'

export default function StorePage() {
  useEffect(() => {
    document.title = 'Store'
  }, [])

  return (
    <>
      <section className="store-hero">
        <img className="store-img" src={heroes[0].src} alt={heroes[0].src} />
        <div className="overlay"></div>
      </section>
      <section className="container">
        <div className="store-title text-center mb-5">
          <h1 className="store-dk">Welcome To My Store</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-4">
            <div className="image1">
              <img src={store1} alt="" className="w-100"/>
              <h1 className="store-category">Inprint</h1>
            </div>
          </div>
          <div className="col-md-6 text-center mb-4">
            <div className="image2">
              <img src={store1} alt="" className="w-100"/>
              <h1 className="store-category">Stickers</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}