import TrelloButton from "components/TrelloButton/TrelloButton"
import { ImAttachment } from "react-icons/im"
import { MdPictureInPicture } from "react-icons/md"
import "./CardDetailAttachments.scss"

const Attachment = ({ src }) => {
  return (
    <div className="attachment">
      <img className="attachment__thumbnail" src={src} alt={src} />
      <div className="attachment-left">
        <div className="attachment-description">
          <span className="attachment_thumbnail-name">
            photo-1486728297118-82a07bc48a28.jpeg
          </span>
          <div className="attachment__thumbnail-details">
            <span>Added Oct 16 at 8:10 AM</span>
            <span>Comment</span>
            <span>Delete</span>
            <span>Edit</span>
          </div>
        </div>
        <div className="attachment__cover-toggle">
          <MdPictureInPicture />
          <span>Make cover</span>
        </div>
      </div>
    </div>
  )
}

const attachmentsImgs = [
  "https://trello.com/1/cards/633306db529319017ae953c0/attachments/634abb94eb23ca009ffb25ad/download/photo-1665834739827-5e03d5f520aa.jpeg",
  "https://trello.com/1/cards/633306db529319017ae953c0/attachments/634b5a0f1a511d0052764a78/download/photo-1486728297118-82a07bc48a28.jpeg",
  "https://trello.com/1/cards/633306db529319017ae953c0/attachments/633306db529319017ae954ed/download/Design.png",
]

const CardDetailAttachments = ({ className }) => {
  return (
    <div className={`modal-card-detail-container ${className}`}>
      <i className="modal-card-detail-container__icon">
        <ImAttachment />
      </i>
      <div className="modal-card-detail-container__title">
        <div className="modal-card-detail-container__title modal-card-detail-container__title--text">
          Attachment
        </div>
      </div>
      <div className="attachments">
        {attachmentsImgs.map((src) => (
          <Attachment key={src} src={src} />
        ))}
      </div>
      <TrelloButton className={"attachment-add-btn"}>
        Add an attachment
      </TrelloButton>
    </div>
  )
}

export default CardDetailAttachments
