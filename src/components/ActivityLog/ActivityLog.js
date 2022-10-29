import Avatar from "components/Avatar/Avatar"
import "./ActivityLog.scss"

const ActivityLog = () => {
  return (
    <div className="log">
      <Avatar
        src={"https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"}
      />
      <div className="log-description">
        <div className="log-description__activity">
          <span>Giang Thành Đạt</span> maker the due date complete
        </div>
        <span className="log-description__time">Oct 22 at 11:52 AM</span>
        <img
          className="log-description__attachment-img-preview"
          src="https://trello.com/1/cards/633306db529319017ae953d6/attachments/63593c70a035690127928431/download/photo-1475924156734-496f6cac6ec1.jpeg"
        />
        <div className="log-description__reply">
          <a href="#">Reply</a>
        </div>
      </div>
    </div>
  )
}

export default ActivityLog
