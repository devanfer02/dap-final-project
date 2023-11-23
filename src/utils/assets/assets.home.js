import hero1 from '../../assets/images/hero1.jpg'
import hero2 from '../../assets/images/hero2.jpg'
import illust1 from '../../assets/images/illust1.jpg'
import illust2 from '../../assets/images/illust2.jpg'
import illust3 from '../../assets/images/illust3.jpg'
import illust4 from '../../assets/images/illust4.jpg'
import illust5 from '../../assets/images/illust5.jpg'
import webLogo from '../../assets/icons/logo.svg'
import greet from '../../assets/images/greet1.jpg'
import storeAd from '../../assets/images/store.jpg'

const _artCategories = ['Illustration', 'Fan Art', 'Game Art']

export const heroes = [
  hero1, hero2
]

export const illustrations = [
  {
    src: illust1,
    title: "Starlizght",
    category: _artCategories[0],
    paragraf: 
    `I made this illustration for my favorite person in my life. 
    This piece have a place in my heart so does she.`
  },
  {
    src: illust2,
    title: "Ophi's Slash",
    category: _artCategories[0],
    paragraf: 
    `I made this illustration for my personal artwork in my own series called FEAR. 
    In this piece, I want to show more action of the character and I really love the effect of the action line. 
    It gives power to the character. `
  },
  {
    src: illust3,
    title: "Gojohime",
    category: _artCategories[1],
    paragraf: 
    `Gojo and Utahime in Jujutsu Kaisen share excellent interactions in the series, in my opinion.
    However, despite their compelling dynamic, they receive less screen time. 
    To celebrate their potential and my love for them, I've decided to create a fan art piece.`
  },
  {
    src: illust5,
    title: "Fall",
    category: _artCategories[0],
    paragraf: `I miss her a lot in fall.`
  },
  {
    src: illust4,
    title: "Coal & Cogs",
    category: _artCategories[2],
    paragraf: 
    `Coal & Cogs is an indie game project that I made with my colleague in campus. 
    This game was created for a competition in a game development organization called Raion Community, and we were awarded first place.`
  }
]

export const others = {
  ad: storeAd,
  webLogo,
  greet, 
}