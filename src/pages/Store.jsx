import { useEffect, useState } from "react";
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
        <div>
          <h1 className="store-dk">welcome to my store</h1>
          <img className="store-img" src={heroes[0].src} alt={heroes[0].src} />
          <div className="overlay"></div>
        </div>
      </section>
      <section className="leaf-background">
      <section className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-4">
            <div className="image-store">
              <h2 className="product-title">Print</h2> 
              <img src={store1} alt="" className="w-100"/>
              <h4 className="store-category mt-3">Inprint</h4>
              <p>Check out all of my artwork's prints</p>
            </div>
          </div>
          <div className="col-md-6 text-center mb-4">
            <div className="image-store">
              <h2 className="product-title">Stickers</h2>
              <img src={store1} alt="" className="w-100"/>
              <h4 className="store-category mt-3">Tokopedia</h4>
              <p>Check out all of my artwork's stickers</p>
            </div>
          </div>
        </div>
      </section>
      </section>
    </>
  )
}