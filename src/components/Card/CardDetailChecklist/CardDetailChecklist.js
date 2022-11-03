import GrowingTextArea from "components/GrowingTextArea/GrowingTextArea"
import TrelloButton from "components/TrelloButton/TrelloButton"
import TrelloCheckBox from "components/TrelloCheckBox/TrelloCheckBox"
import ProgressBar from "components/TrelloProgressBar/TrelloProgressBar"
import { useState } from "react"
import { IconContext } from "react-icons"
import { AiOutlineClockCircle } from "react-icons/ai"
import { BiTimeFive } from "react-icons/bi"
import { BsEmojiSmile, BsPeople, BsThreeDots } from "react-icons/bs"
import { FiCheckSquare } from "react-icons/fi"
import { GoMention } from "react-icons/go"
import { GrClose } from "react-icons/gr"
import { RiUserAddLine } from "react-icons/ri"
import "./CardDetailChecklist.scss"

const CheckItem = ({ addNew, content }) => {
  const [edit, setEdit] = useState(false)

  return (
    <div className={`check-item ${!addNew ? "check-item--edit" : ""}`}>
      {!addNew && (
        <div className="check-item__checkbox">
          <TrelloCheckBox />
        </div>
      )}
      <div className="check-item__content">
        {!edit && addNew && (
          <TrelloButton onClick={() => setEdit(true)}>Add an item</TrelloButton>
        )}
        {!edit && !addNew && (
          <>
            <div className="check-item__text" onClick={() => setEdit(true)}>
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
          </>
        )}
        {edit && (
          <GrowingTextArea
            className={`check-item__input-box ${
              !addNew ? "check-item__input-box--edit" : ""
            }`}
            placeholder="Add an item"
            rows={2}
          >
            <div className="check-item__input-controls">
              <div className="check-item-actions">
                <TrelloButton type="primary" onClick={() => setEdit(false)}>
                  {addNew ? `Add` : "Save"}
                </TrelloButton>
                <TrelloButton
                  type="transparent-darker"
                  onClick={() => setEdit(false)}
                >
                  {addNew ? "Cancel" : <GrClose />}
                </TrelloButton>
              </div>
              <div className="check-item-input-options">
                <IconContext.Provider value={{ size: 14 }}>
                  <TrelloButton type="transparent-darker">
                    <RiUserAddLine />
                    Assign
                  </TrelloButton>
                  <TrelloButton type="transparent-darker">
                    <AiOutlineClockCircle />
                    Due Date
                  </TrelloButton>
                </IconContext.Provider>
                <IconContext.Provider value={{ size: 12 }}>
                  <TrelloButton type="transparent-darker">
                    <BsEmojiSmile />
                  </TrelloButton>
                  <TrelloButton type="transparent-darker">
                    <GoMention />
                  </TrelloButton>
                  <TrelloButton type="transparent-darker">
                    <BsThreeDots />
                  </TrelloButton>
                </IconContext.Provider>
              </div>
            </div>
          </GrowingTextArea>
        )}
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
      <CheckItem addNew />
    </div>
  )
}

export default CardDetailCheckList
