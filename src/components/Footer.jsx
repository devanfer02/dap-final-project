import { Link } from 'react-router-dom'
import assets from '../utils/assets'

import '../style/footer.css'

export default function Footer() {
  return (
    <footer className="footer-blu pb-3">
      <div className="container pt-5">
        <div className="row mb-3">
          <div className="col text-center mb-3">
            <img className="footer-logo" src={assets.webLogo} alt=""/>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col text-center">
            <h5 className="font-dk-12 title-section">Portfolio</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Illustration</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Character Design</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Comic</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Game Art</a></li>
            </ul>
          </div>
          <div className="col text-center">
            <h5 className="font-dk-12 title-section">Community</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">About</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Contact</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Faq</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Review</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">About</a></li>
            </ul>
          </div>
          <div className="col text-center">
            <h5 className="font-dk-12 title-section">Store</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Print</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Stickers</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <ul className="nav justify-content-center mb-3">
              {assets.socials.map((social) => (
                <li className="nav-item footer-item">
                  <Link to={social.href} target="_blank">
                    <img className="" src={social.logo} alt="" />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-center text-body-secondary font-dk-12">&copy; Hamdalla Agil 2023. Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  )
}