import porto1 from '../../assets/images/portfolio1.jpg'
import porto2 from '../../assets/images/portfolio2.jpg'
import porto3 from '../../assets/images/portfolio3.jpg'
import porto4 from '../../assets/images/portfolio4.jpg'
import porto5 from '../../assets/images/portfolio5.jpg'
import porto6 from '../../assets/images/portfolio6.jpg'
import porto7 from '../../assets/images/portfolio7.jpg'
import porto8 from '../../assets/images/portfolio8.jpg'
import porto9 from '../../assets/images/portfolio9.jpg'
import porto10 from '../../assets/images/portfolio10.jpg'
import { illustrations, heroes } from './assets.home'

// BRRRR OPTIMIZATION GOESS BRRRR
import smallporto1 from '../../assets/images/small/portfolio1-small.jpg'
import smallporto2 from '../../assets/images/small/portfolio2-small.jpg'
import smallporto3 from '../../assets/images/small/portfolio3-small.jpg'
import smallporto4 from '../../assets/images/small/portfolio4-small.jpg'
import smallporto5 from '../../assets/images/small/portfolio5-small.jpg'
import smallporto6 from '../../assets/images/small/portfolio6-small.jpg'
import smallporto7 from '../../assets/images/small/portfolio7-small.jpg'
import smallporto8 from '../../assets/images/small/portfolio8-small.jpg'
import smallporto9 from '../../assets/images/small/portfolio9-small.jpg'
import smallporto10 from '../../assets/images/small/portfolio10-small.jpg'
import smallillust1 from '../../assets/images/small/illust1-small.jpg'
import smallillust2 from '../../assets/images/small/illust2-small.jpg'
import smallillust3 from '../../assets/images/small/illust3-small.jpg'
import smallillust4 from '../../assets/images/small/illust4-small.jpg'
import smallhero1 from '../../assets/images/small/hero1-small.jpg'

const _artCategories = ['Illustration', 'Fan Art', 'Game Art', 'Character Design', 'Comic']

export const portfolios = [
  {
    title: 'COBA DONG',
    category: _artCategories[0],
    desc: '',
    src: porto1,
    small: smallporto1
  },
  {
    title: '',
    category: _artCategories[0],
    desc: '',
    src: porto2,
    small: smallporto2
  },
  {
    title: '',
    category: _artCategories[0],
    desc: '',
    src: porto3,
    small: smallporto3
  },
  {
    title: '',
    category: _artCategories[0],
    desc: '',
    src: porto4,
    small: smallporto4
  },
  {
    title: '',
    category: _artCategories[0],
    desc: '',
    src: porto5,
    small: smallporto5
  },
  {
    title: '',
    category: _artCategories[0],
    desc: '',
    src: porto6,
    small: smallporto6
  },
  {
    title: '',
    category: _artCategories[3],
    desc: '',
    src: porto7,
    small: smallporto7
  },
  {
    title: '',
    category: _artCategories[0],
    desc: '',
    src: porto8,
    small: smallporto8
  },
  {
    title: '',
    category: _artCategories[0],
    desc: '',
    src: porto9,
    small: smallporto9
  },
  {
    title: '',
    category: _artCategories[0],
    desc: '',
    src: porto10,
    small: smallporto10
  },
  {
    title: illustrations[0].title,
    category: illustrations[0].category,
    desc: illustrations[0].paragraf,
    src: illustrations[0].src,
    small: smallillust1
  },
  {
    title: illustrations[1].title,
    category: illustrations[1].category,
    desc: illustrations[1].paragraf,
    src: illustrations[1].src,
    small: smallillust2
  },
  {
    title: illustrations[2].title,
    category: illustrations[2].category,
    desc: illustrations[2].paragraf,
    src: illustrations[2].src,
    small: smallillust3
  },
  {
    title: illustrations[3].title,
    category: illustrations[3].category,
    desc: illustrations[3].paragraf,
    src: heroes[0].src,
    small: smallhero1
  },
  {
    title: illustrations[4].title,
    category: illustrations[4].category,
    desc: illustrations[4].paragraf,
    src: illustrations[4].src,
    small: smallillust4
  },
]