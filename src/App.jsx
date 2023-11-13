import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFoundPage from './pages/NotFound'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import PortfolioPage from './pages/Portfolio'
import StorePage from './pages/Store'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/portfolio' element={<PortfolioPage/>}></Route>
          <Route path='/store' element={<StorePage/>}></Route>
          <Route path='*' element={<NotFoundPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
