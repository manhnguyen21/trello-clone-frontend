import ActivityLog from "components/ActivityLog/ActivityLog"
import Comment from "components/Comment/Comment"
import CommentInput from "components/CommentInput/CommentInput"
import TrelloButton from "components/TrelloButton/TrelloButton"
import { GrList } from "react-icons/gr"

import "./CardDetailActivities.scss"

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
        <ActivityLog />
        <ActivityLog />
        <Comment />
        <Comment />
        <ActivityLog />
        <Comment />
        <ActivityLog />
      </div>
    </>
  )
}

export default CardDetailActivities
