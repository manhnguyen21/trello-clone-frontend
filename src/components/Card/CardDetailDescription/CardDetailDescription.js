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
        <GrowingTextArea
          rows={4}
          placeholder="Add module detailed module description..."
        />
      </div>
      <div className="card-description-manipulation">
        <div>
          <a
            href="#"
            className="card-description-manipulation__button card-description-manipulation__button--save"
          >
            Save
          </a>
          <a
            href="#"
            className="card-description-manipulation__button card-description-manipulation__button--cancel"
          >
            Cancel
          </a>
        </div>
        <div>
          <a
            href="#"
            className="card-description-manipulation__button card-description-manipulation__button--formatting-help"
          >
            Formatting help
          </a>
        </div>
      </div>
    </div>
  )
}

export default CardDetailDescription
