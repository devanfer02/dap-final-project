import { useEffect } from "react"

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Me'
  }, [])

  return (
    <>
      <div>
        <h1>Hello About</h1>
      </div>
    </>
  )
}

