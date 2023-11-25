import '../style/sectiontitle.css'

export default function SectionTitle({ title }) {
  const renderSpace = (times) => {
    return Array(times + 1).join('\u00a0')
  }

  const space = renderSpace(50)
  
  return (
    <div className="container section-title-container">
      <h1 className="section-title">{title}</h1>
      <p className="underlined">{space}</p>
    </div>
  )
}