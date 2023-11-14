import { useEffect } from "react";

export default function PortfolioPage() {
  useEffect(() => {
    document.title = 'My Portfolio'
  }, [])

  return (
    <>
      <div>
        <h1>Hello Portfolio</h1>
      </div>
    </>
  )
}