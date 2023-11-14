import { useEffect } from 'react'
import '../style/notfound.css'

export default function NotFoundPage() {
  useEffect(() => {
    document.title = 'Not Found'
  }, [])
  
  return (
    <>
      <div className="notfound">
        <h1 className="title font-dk-96">404 : NOT FOUND</h1>
      </div>
    </>
  )
}