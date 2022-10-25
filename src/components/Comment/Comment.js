import Avatar from "components/Avatar/Avatar"

import { FaRegSmileWink } from "react-icons/fa"
import "./Comment.scss"

const Comment = () => {
  return (
    <div className="comment">
      <Avatar
        src={"https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"}
      />
      <div className="comment-detail">
        <div className="comment-detail__author">
          Giang Thành Đạt <span className="">yesterday at 7:40 AM</span>
        </div>
        <div className="comment-detail__content">
          asdasdasdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssasdasdasdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssasdasdasdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssasdasdasdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssasdasdasdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssasdasdasdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssasdasdasdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssasdasdasdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssasdasdasdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
        </div>
        <div className="comment-detail__options">
          <span>
            <FaRegSmileWink />
          </span>
          <span>Edit</span>
          <span>Delete</span>
        </div>
      </div>
    </div>
  )
}

export default Comment
