import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Loading from './pages/Loading.jsx'
import NotFoundPage from './pages/NotFound'
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import AboutMe from './pages/whoami/AboutMe.jsx'

const HomePage = lazy(() => import('./pages/Home'))
const AboutPage = lazy(() => import('./pages/About'))
const PortfolioPage = lazy(() => import('./pages/Portfolio'))
const StorePage = lazy(() => import('./pages/Store'))

const DeveloperRedirect = ({url}) => {
  window.location.replace(url)
  return null
}

const teams = [
  {
    role: 'developer',
    path: 'https://www.instagram.com/dvnf20/'
  },
  {
    role: 'designer',
    path: 'https://www.instagram.com/hamdallaagil/'
  }
]


const pages = [
  {
    path: '/',
    render: <HomePage/>
  },
  {
    path: 'about',
    render: <AboutPage/>
  },
  {
    path: 'portfolio',
    render: <PortfolioPage/>
  },
  {
    path: 'store',
    render: <StorePage/>
  },
  {
    path: '*',
    render: <NotFoundPage/>
  }
]

function App() {
  return (
    <>      
      <BrowserRouter>
        <Navbar/>
        <div>
          <Routes>
            { pages.map((page) => (
              <Route 
                path={page.path}
                element={
                  <Suspense fallback={<Loading/>}>{page.render}</Suspense> 
                }
              />
            ))}
            <Route 
              path="home"
              element={
                <Suspense fallback={<Loading/>}>{<HomePage/>}</Suspense> 
              }
            />
            <Route 
              path="whoami"
              element={
                <Suspense fallback={<Loading/>}>{<AboutMe/>}</Suspense> 
              }
            />
            { teams.map((person) => (
              <Route 
                path={person.role}
                element={
                  <DeveloperRedirect url={person.path}/>
                }
              />
            ))}
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
