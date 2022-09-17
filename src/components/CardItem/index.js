// Write your code here.
import './index.css'

const TechnologyCards = props => {
  const {techCardDetails} = props
  const {title, description, imgUrl, className} = techCardDetails
  const techClassName = `card ${className}`

  return (
    <li className={techClassName}>
      <h1 className="title-heading">{title}</h1>
      <p className="title-description">{description}</p>
      <div className="img-container">
        <img className="img-resize" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default TechnologyCards
