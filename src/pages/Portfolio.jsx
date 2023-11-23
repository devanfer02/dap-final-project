import { useEffect, useState } from "react";
import { portfolios } from '../utils/assets/assets.portfolio'
import  '../style/portfolio.css'

function PortfoliosListCategory() {
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
          <ul className="nav justify-content-center w-90">
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

function PortfoliosSection() {
  const get2DPortfolios = (row, portos) => {
    const mapped2d = Array.from({ length: row}, () => [])

    for(let i = 0, j = 0; i < portos.length; i++, j = (j + 1) % row) {
      mapped2d[j].push(portos[i])
    }
    
    return mapped2d
  }

  const getRow = () => {
    const width = window.innerWidth
    return width <= 550 ? 1 : width <= 864 ? 3 : 4
  }

  const [ row, setRow ] = useState(getRow())
  const [ portfolio2D, setPortfolio2D ] = useState(get2DPortfolios(row, portfolios))

  useEffect(() => {
    const handleResize = () => {
      const newRow = getRow()
      setRow(newRow)
      const new2D = get2DPortfolios(newRow, portfolios)
      setPortfolio2D(new2D)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [portfolios])
  
  return (
    <section className="container mb-5">
      <div className="row">
        { portfolio2D.map(portfolio1D => (
          <div className="col-lg-3 col-md-4 mb-4 mb-lg-0 d-flex flex-column h-100">
            { portfolio1D.map(portfolio => (
              <img src={portfolio.src} alt="" className="w-100 mt-1 mb-1 portfolio-img" loading="lazy"/>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default function PortfolioPage() {
  useEffect(() => {
    document.title = 'My Portfolio'
  }, [])

  return (
    <>
      <PortfoliosListCategory/>
      <PortfoliosSection/>
    </>
  )
}