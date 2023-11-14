import { useEffect } from "react";

export default function StorePage() {
  useEffect(() => {
    document.title = 'Store'
  }, [])

  return (
    <>
      <div>
        <h1>Store Page</h1>
      </div>
    </>
  )
}