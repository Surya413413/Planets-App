// Write your code here

import './index.css'

const PlanetItem = props => {
  const {itemsDetails} = props
  const { name, imageUrl, description} = itemsDetails

  return (
    <div className="slider-container">
      <img className="img-class" src={imageUrl} alt={`planet ${name}`} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}
export default PlanetItem
