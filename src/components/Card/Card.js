import React from "react"
import "./Card.scss"

const Card = ({ card }) => {
  return (
    <div className="card-item">
      {card.cover && (
        <img
          className="card-cover"
          draggable={false}
          src={card.cover}
          alt={card.title}
        />
      )}
      {card.title}
    </div>
  )
}

export default Card
