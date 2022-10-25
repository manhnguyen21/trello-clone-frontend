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
      </div>
    </div>
  )
}

export default ActivityLog
