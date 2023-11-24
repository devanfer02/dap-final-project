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
  const [ currPortfolio, setCurrPortfolio ] = useState(portfolios[0])
  const [ porto, setPorto ] = useState({
    row: getRow(),
    currPortos: portfolios,
    array2d: get2DPortfolios(getRow(), portfolios),
    currCategory: categories[0]
  })

  const handleModal = (portfolio) => {
    setCurrPortfolio(portfolio)
  }

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
    const blurDivs = document.querySelectorAll('.blur-load')

    blurDivs.forEach(div => {
      const img = div.querySelector('img')

      function loaded() {
        div.classList.add('loaded')
      }

      if (img.complete) {
        loaded()
      } else {
        img.addEventListener('load', loaded)
      }
    })
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
              <div 
                className="blur-load div-portfolio-img mt-1 mb-1" 
                style={{ backgroundImage: `url(${portfolio.small})` }}
                onClick={() => handleModal(portfolio)}
                data-bs-toggle="modal" data-bs-target="#modalportfolio"
              >
                <img 
                  src={portfolio.src}
                  alt={portfolio.title}
                  className="w-100 img-fluid portfolio-img" 
                  loading="lazy"
                />
                <h4 className="hover-title">{portfolio.title}</h4>
              </div>
              
            ))}
          </div>
        ))}
        <div class={`modal fade`} id="modalportfolio" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content" onClick={(e) => e.stopPropagation()}>
              <div class="row">
                <div className="d-flex justify-content-end">
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="col-md-6">
                  <img 
                    src={currPortfolio.src} 
                    alt={currPortfolio.title} 
                    className="w-100 w-md-75"
                    draggable="false"
                  />
                </div>
                <div className="col-md-6 modal-portfolio-content">
                  <h1 className="modal-portfolio-title">{currPortfolio.title}</h1>
                  <p className="modal-portfolio-category">{currPortfolio.category}</p>
                  <p className="modal-portfolio-description">{currPortfolio.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="portfolio-title-container text-center">
        <section className="justify-content-center">
          <div className="col-md-12">
            <h1 className="portfolio-title">Portfolio</h1>
          </div>
        </section>
        <section className="justify-content-center">
          <div className="col-md-12">
            <ul className="nav justify-content-center">
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