import GrowingTextArea from "components/GrowingTextArea/GrowingTextArea"
import TrelloButton from "components/TrelloButton/TrelloButton"
import { MdNotes } from "react-icons/md"
import "./CardDetailDescription.scss"
const CardDetailDescription = ({ className }) => {
  return (
    <div className={`modal-card-detail-container ${className ?? ""}`}>
      <i className="modal-card-detail-container__icon">
        <MdNotes />
      </i>
      <div className="modal-card-detail-container__title">
        <div className="modal-card-detail-container__title modal-card-detail-container__title--text">
          Description
        </div>
      </div>
      <div className="card-description-input">
        <GrowingTextArea
          rows={4}
          placeholder="Add module detailed module description..."
        />
      </div>
      <div className="card-description-manipulation">
        <div>
          <TrelloButton type="primary">Save</TrelloButton>
          <TrelloButton className="card-description-manipulation__button--cancel">
            Cancel
          </TrelloButton>
        </div>
        <div>
          <TrelloButton>Formatting help</TrelloButton>
        </div>
      </div>
    </div>
  )
}

export default CardDetailDescription
