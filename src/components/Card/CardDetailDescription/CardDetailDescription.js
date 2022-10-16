import GrowingTextArea from "components/GrowingTextArea/GrowingTextArea"
import { MdNotes } from "react-icons/md"
import "./CardDetailDescription.scss"
const CardDetailDescription = ({ className }) => {
  return (
    <div className={`modal-card-detail-container ${className ?? ""}`}>
      <i className="modal-card-detail-container__icon">
        <MdNotes />
      </i>
      <div className="modal-card-detail-container__title">
        <div className="card-description-title">Description</div>
      </div>
      <div className="card-description-input">
        <GrowingTextArea rows={4} />
      </div>
    </div>
  )
}

export default CardDetailDescription
