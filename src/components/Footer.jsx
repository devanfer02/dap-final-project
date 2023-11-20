import { Link } from 'react-router-dom'
import '../style/footer.css'
import Logo from '../assets/icons/logo.svg'
import emailLogo from '../assets/icons/social/email.svg'
import tweetLogo from '../assets/icons/social/twitter.svg'
import instaLogo from '../assets/icons/social/instagram.svg'

export default function Footer() {
  return (
    <footer className="footer-blu pb-3">
      <div className='container row row-cols-1 row-cols-sm-2 row-cols-md-6 pt-5'>
        <div className="col mb-3">
        </div>
        <div className="col mb-3">
          <img className="footer-logo" src={Logo} alt=""/>
        </div>
        <div className="col mb-3">
        </div>
        <div className="col mb-3">
          <h5 className="font-dk-12 title-section">Portfolio</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Illustration</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Character Design</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Comic</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Game Art</a></li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5 className="font-dk-12 title-section">Community</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">About</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Contact</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Faq</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Review</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">About</a></li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5 className="font-dk-12 title-section">Store</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Print</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Stickers</a></li>
          </ul>
        </div>
      </div>
      <div className=''>
        <ul className='nav justify-content-center mb-3'>
          <li className='nav-item footer-item'>
            <Link to="https://www.instagram.com/" target="_blank">
              <img className="" src={instaLogo} alt="" />
            </Link>
          </li>
          <li className="nav-item footer-item">
            <Link to="" target="_blank">
              <img className="" src={emailLogo} alt="" />
            </Link>
          </li>
          <li className="nav-item footer-item">
            <Link to="https://twitter.com/" target="_blank">
              <img className="" src={tweetLogo} alt="" />
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-center text-body-secondary font-dk-12">&copy; Hamdalla Agil 2023. Privacy Policy</p>
    </footer>
  )
}