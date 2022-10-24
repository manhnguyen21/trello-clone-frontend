import CommentInput from "components/CommentInput/CommentInput"
import TrelloButton from "components/TrelloButton/TrelloButton"
import { GrList } from "react-icons/gr"

import "./CardDetailActivities.scss"

const Comment = () => {
  return <div className="comment">Trello-comment</div>
}

const Log = () => {
  return <div className="log">log</div>
}

const CardDetailActivities = ({ className }) => {
  return (
    <>
      <div className={`modal-card-detail-container ${className || ""}`}>
        <div className="activities__header">
          <i className="modal-card-detail-container__icon">
            <GrList />
          </i>
          <div className="modal-card-detail-container__title">
            <div className="modal-card-detail-container__title modal-card-detail-container__title--text">
              Activities
            </div>
          </div>
          <TrelloButton>Show details</TrelloButton>
        </div>
      </div>
      <div className="activities__comments">
        <CommentInput />
        <Comment />
        <Comment />
        <Log />
      </div>
    </>
  )
}

export default CardDetailActivities
