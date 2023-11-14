import { NavLink } from 'react-router-dom';
import Logo from '../assets/icons/logo.svg'
import '../style/navbar.css'

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="d-flex">
          <img src={Logo}alt="logo" className="img-fluid icon-nav" draggable='false'/>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto" style={{ paddingTop: '10px' }}>
            <li className="nav-item nav-item-custom">
              <h5>
                <NavLink className={`nav-link underline font-dk-24 nav-href `} to="/">
                  &nbsp;Home&nbsp;
                </NavLink>
              </h5>
            </li>
            <li className="nav-item nav-item-custom">
              <h5>
                <NavLink className={`nav-link underline font-dk-24 nav-href `} to="/portfolio">
                  &nbsp;Portfolio&nbsp;
              </NavLink>
              </h5>
            </li>
            <li className="nav-item nav-item-custom">
              <h5>
                <NavLink className={`nav-link underline font-dk-24 nav-href `} to="/about">&nbsp;About&nbsp;
                </NavLink>
              </h5>
            </li>
            <li className="nav-item nav-item-custom">
              <h5>
                <NavLink className={`nav-link underline font-dk-24 nav-href `} to="/store">
                  &nbsp;Store&nbsp;
                </NavLink>
              </h5>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}