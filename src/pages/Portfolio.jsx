import { useEffect, useState } from "react";
import { portfolios } from '../utils/assets/assets.portfolio'
import  '../style/portfolio.css'

export default function PortfolioPage() {
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

  const categories = ['All', 'Illustration', 'Character Design', 'Comic', 'Game Art']

  const [ porto, setPorto ] = useState({
    row: getRow(),
    currPortos: portfolios,
    array2d: get2DPortfolios(getRow(), portfolios),
    currCategory: categories[0]
  })

  const getActiveClass = (paramCategory) => {
    return porto.currCategory === paramCategory ? 'active-category' : ''
  }

  const filterCategories = (category) => {
    setPorto(prevState => ({...prevState, currCategory: category}))    
  }

  useEffect(() => {
    if (porto.currCategory === categories[0]) {

      setPorto(prevState => ({...prevState, currPortos: portfolios}))

    } else {
      
      const filteredPortfolio = portfolios.filter(portfolio => {
        return portfolio.category === porto.currCategory
      })
      setPorto(prevState => ({...prevState, currPortos: filteredPortfolio}))
      
    }
    const new2d = get2DPortfolios(porto.row, porto.currPortos)
    setPorto(prevState => ({...prevState, array2d: new2d}))
  }, [porto.currCategory, porto.currPortos])

  useEffect(() => {
    document.title = 'My Portfolio'
  })

  useEffect(() => {
    const handleResize = () => {
      const newRow = getRow()
      setPorto(prevState => ({...prevState, row: newRow}))
      const new2d = get2DPortfolios(newRow, porto.currPortos)
      setPorto(prevState => ({...prevState, array2d: new2d}))
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [portfolios])

  const renderImages = () => {
    if (porto.array2d[0].length == 0) {
      return (
        <div className="container justify-content-center text-center align-items-center p-5 grid-images mt-5">
          <h1 className="font-dk-48">No Content Yet 😔</h1>
        </div>
      )
    }

    return (
      <div className="row grid-images">
        { porto.array2d.map(portfolio1d => (
          <div className="col-lg-3 col-md-4 mb-4 mb-lg-0 d-flex flex-column h-100">
            { portfolio1d.map(portfolio => (
              <div>
                <img src={portfolio.src} alt="" className="w-100 mt-1 mb-1 portfolio-img" loading="lazy"/>
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
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
                    onClick={() => filterCategories(category)}
                  >  
                    {category}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>
      <section className="container mb-5">
        { renderImages() }
      </section>
    </>
  )
}