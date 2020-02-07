import React from "react"

/**
 * Component Card, return single card component
 * @constant
 * @type {function}
 * @returns {JSX}
 */

const Card = ({card}) => {
  return ( 
    <li>
      <img src={card.imageUrl} alt={card.name} />
      <div className="card-details">
        <ul>
          <li><strong>Name:</strong>{card.name}</li>
          <li><strong>Test:</strong>{card.text}</li>
          <li><strong>SetName:</strong>{card.set.name}</li>
          <li><strong>Type:</strong>{card.type}</li>
        </ul>
      </div> 
    </li>
  )
}
export default Card