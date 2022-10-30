import ProgressBar from "components/ProgressBar/ProgressBar"
import TrelloButton from "components/TrelloButton/TrelloButton"
import { FiCheckSquare } from "react-icons/fi"
import "./CardDetailChecklist.scss"

const CardDetailCheckList = () => {
  return (
    <div className="checklist">
      <div className={`modal-card-detail-container checklist`}>
        <div className="checklist__header">
          <i className="modal-card-detail-container__icon">
            <FiCheckSquare />
          </i>
          <div className="modal-card-detail-container__title">
            <div className="modal-card-detail-container__title modal-card-detail-container__title--text">
              Checklist
            </div>
          </div>
          <div className="checklist__header-actions">
            <TrelloButton className="card-button">
              Hide checked items
            </TrelloButton>
            <TrelloButton className="card-button">Delete</TrelloButton>
          </div>
        </div>
      </div>
      <div className="checklist__content">
        <div className="checklist__progress-bar">
          <span>25%</span>
          <ProgressBar percent={25} />
        </div>
      </div>
    </div>
  )
}

export default CardDetailCheckList
