import { Link } from 'react-router-dom'
import { socials, other } from '../utils/assets/assets.socials'

import '../style/footer.css'

export default function Footer() {
  const sections = {
    portfolio: {
      title: 'portfolio',
      links: [
        'Illustration', 'Character Design', 'Comic', 'Game Art'
      ]
    },
    about: {
      title: 'about',
      links: [
        'Contact', 'Faq', 'Review'
      ]
    },
    store: {
      title: 'store',
      links: [
        'Print', 'Stickers'
      ]
    }
  }

  return (
    <footer className="footer-blu pb-3">
      <div className="container pt-5">
        <div className="row mb-3">
          <div className="col text-center mb-3">
            <img className="footer-logo" src={other.webLogo} alt=""/>
          </div>
        </div>
        <div className="row mb-3">
          { Object.entries(sections).map(([key, section]) => (
            <div className="col text-center" key={key}>
              <Link style={{ textDecoration: 'none', color: '#0c0c0c' }} to={`/${section.title}`}>
                <h5 className="font-dk-12 title-section">{section.title}</h5>
              </Link>
              <ul className="nav flex-column">
                { section.links.map((link) => (
                  <li className="nav-item mb-2">
                    <Link 
                      to="" 
                      className="nav-link p-0 font-dk-12"
                      style={{ color: '#0c0c0c' }}
                    >
                      {link}
                    </Link>
                  </li>  
                ))}
              </ul>
            </div>  
          ))}
        </div>
        <div className="row">
          <div className="col text-center">
            <ul className="nav justify-content-center mb-3">
              {socials.map((social) => (
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