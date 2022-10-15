import ModalCardDetail from "components/Card/ModalCardDetail/ModalCardDetail"
import { useState } from "react"
import { MODAL_ACTION_CLOSE } from "utilities/constants"
import "./Card.scss"

const Card = ({ card }) => {
  const [show, setShow] = useState(false)

  const cardClickHandler = () => setShow(true)

  const cardDetailActionHandler = (type) => {
    if (type === MODAL_ACTION_CLOSE) setShow(false)
  }

  return (
    <>
      <div className="card-item" onClick={cardClickHandler}>
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
      <ModalCardDetail show={show} onAction={cardDetailActionHandler} />
    </>
  )
}

export default Card
