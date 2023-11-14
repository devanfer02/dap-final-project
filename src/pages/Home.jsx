import { useEffect } from "react"
import HomeCarousel from "../components/HomeCarousel"

export default function HomePage() {
  useEffect(() => {
    document.title = 'Home Page'
  }, [])
  
  return (
    <>
      <HomeCarousel/>
      <div>
        <h1>Hello World</h1>
      </div>
    </>
  )
}
