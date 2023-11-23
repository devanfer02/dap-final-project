import { useEffect, useState } from "react";
import { portfolios } from '../utils/assets/assets.portfolio'
import  '../style/portfolio.css'

function SectionTitle() {
  const categories = ['All', 'Illustration', 'Character Design', 'Comic', 'Game Art']

  const [ currCategory, setCurrCategory ] = useState(categories[0])

  const getActiveClass = (paramCategory) => {
    return currCategory === paramCategory ? 'active-category' : ''
  }

  return (
    <section className="section-title-container text-center">
      <section className="row justify-content-center">
        <div className="col-md-12">
          <h1 className="portfolio-title">Portfolio</h1>
        </div>
      </section>
      <section className="row justify-content-center">
        <div className="col-md-12">
          <ul className="nav justify-content-center">
            { categories.map((category) => (
              <li className="nav-item">
                <p 
                  className={`nav-link ft-dk-categories ${getActiveClass(category)}`}
                  onClick={() => setCurrCategory(category)}
                >  
                  {category}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  )
}

export default function PortfolioPage() {
  useEffect(() => {
    document.title = 'My Portfolio'
  }, [])

  return (
    <>
      <SectionTitle/>
      
      { portfolios.map(portfolio => (
        <div className="blur-load" style={{ backgroundImage: `url(${portfolio.src})` }}>
          <img src={portfolio.src} alt="" className="portfolio-img" loading="lazy"/>
        </div>
      ))}
      
    </>
  )
}