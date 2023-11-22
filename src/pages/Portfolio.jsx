import { useEffect } from "react";
import assets from '../utils/assets'

export default function PortfolioPage() {
  useEffect(() => {
    document.title = 'My Portfolio'
  }, [])

  return (
    <>
      {assets.illustraions.map((illustration) => (
        <div>
          <img src={illustration.src} alt="" style={{maxWidth: '20vh'}}/>
          <img src={illustration.src} alt="" style={{maxWidth: '20vh'}}/>
          <img src={illustration.src} alt="" style={{maxWidth: '20vh'}}/>
          <img src={illustration.src} alt="" style={{maxWidth: '20vh'}}/>
        </div>
      ))}
    </>
  )
}