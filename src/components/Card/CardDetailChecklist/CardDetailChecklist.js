import TrelloButton from "components/TrelloButton/TrelloButton"
import TrelloCheckBox from "components/TrelloCheckBox/TrelloCheckBox"
import ProgressBar from "components/TrelloProgressBar/TrelloProgressBar"
import { IconContext } from "react-icons"
import { BiTimeFive } from "react-icons/bi"
import { BsPeople, BsThreeDots } from "react-icons/bs"
import { FiCheckSquare } from "react-icons/fi"
import "./CardDetailChecklist.scss"

const CheckItem = ({ content }) => {
  return (
    <div className="check-item">
      <div className="check-item__checkbox">
        <TrelloCheckBox />
      </div>
      <div className="check-item__content">
        <div className="check-item__text">
          <span>{content}</span>
        </div>
        <div className="check-item__actions">
          <IconContext.Provider value={{ size: 12 }}>
            <TrelloButton>
              <BiTimeFive />
            </TrelloButton>
            <TrelloButton>
              <BsPeople />
            </TrelloButton>
            <TrelloButton>
              <BsThreeDots />
            </TrelloButton>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  )
}

const CardDetailCheckList = () => {
  return (
    <div className="checklist">
      <div className={`modal-card-detail-container`}>
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
      <div className="checklist__progress-bar">
        <span>25%</span>
        <ProgressBar percent={25} />
      </div>
      <CheckItem content={"check 1"} />
      <CheckItem content={"check 2"} />
      <CheckItem content={"👍"} />
      <CheckItem content={"⛔"} />
      <TrelloButton className={"modal-card-detail-container"}>
        Add an item
      </TrelloButton>
    </div>
  )
}

export default CardDetailCheckList
