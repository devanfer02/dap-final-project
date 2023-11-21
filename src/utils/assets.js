import hero1 from '../assets/images/hero1.jpg'
import hero2 from '../assets/images/hero2.jpg'
import greet from '../assets/images/greet1.jpg'
import emailLogo from '../assets/icons/social/email.svg'
import tweetLogo from '../assets/icons/social/twitter.svg'
import instaLogo from '../assets/icons/social/instagram.svg'
import webLogo from '../assets/icons/logo.svg'

const assets = {
  heroes: [
    hero1, hero2
  ],
  socials: [
    {href: 'https://www.instagram.com/', logo:instaLogo },
    {href: '', logo:emailLogo },
    {href: 'https://twitter.com/', logo:tweetLogo },
  ],
  webLogo,
  greet
}

export default assets;