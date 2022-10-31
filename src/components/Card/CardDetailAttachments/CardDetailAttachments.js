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
  "https://trello.com/1/cards/633306db529319017ae953d6/attachments/63593c70a035690127928431/download/photo-1475924156734-496f6cac6ec1.jpeg",
  "https://trello.com/1/cards/633306db529319017ae953d6/attachments/63593c389dfd6f002a147829/previews/63593c389dfd6f002a147845/download/photo-1666704284662-2a45d17e1d10.jpeg.jpg",
  "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
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
      <TrelloButton className={"attachment-add-btn card-button"}>
        Add an attachment
      </TrelloButton>
    </div>
  )
}

export default CardDetailAttachments
