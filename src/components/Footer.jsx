import '../style/footer.css'
import emailLogo from '../assets/icons/social/email.svg'
import tweetLogo from '../assets/icons/social/twitter.svg'
import instaLogo from '../assets/icons/social/instagram.svg'

export default function Footer() {
  return (
    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top footer-blu">
      <div className="col mb-3">
      </div>
      <div className="col mb-3">
      </div>
      <div className="col mb-3">
        <h5 className="font-dk-12">Portfolio</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Illustration</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Character Design</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Comic</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Game Art</a></li>
        </ul>
      </div>
      <div className="col mb-3">
        <h5 className="font-dk-12">Community</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">About</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Contact</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Faq</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Review</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">About</a></li>
        </ul>
      </div>

      <div className="col mb-3">
        <h5 className="font-dk-12">Store</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Print</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary font-dk-12">Stickers</a></li>
        </ul>
      </div>

      <div>
        <img src={instaLogo} alt="" />
        <img src={emailLogo} alt="" />
        <img src={tweetLogo} alt="" />
      </div>

    </footer>
  )
}