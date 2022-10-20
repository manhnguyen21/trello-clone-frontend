import Label from "components/Label/Label"
import { Form } from "react-bootstrap"
import { AiOutlinePlus } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import "./CardDetailData.scss"

const members = [
  "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png",
  "https://isrdc.iitb.ac.in/images/man.png",
  "https://w7.pngwing.com/pngs/312/283/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes-thumbnail.png",
  "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png",
]

const CardDetailData = () => {
  return (
    <div className={`modal-card-detail-container `}>
      <div className="card-detail-data">
        <div className="card-detail-data__item">
          <h3 className="card-detail-data__item-header">Members</h3>
          <div className="members">
            {/* <img
              className="members__item"
              src={require("assets/images/user-avatar.png")}
            /> */}
            {members.map((src) => (
              <img key={src} className="members__item" src={src} />
            ))}
            <a href="#" className="members__item members__item--add">
              <AiOutlinePlus size={16} />
            </a>
          </div>
        </div>
        <div className="card-detail-data__item">
          <h3 className="card-detail-data__item-header">Labels</h3>
          <div className="labels">
            <Label />
            <Label color="yellow" />
            <Label color="sky" />
            <Label color="purple" />
            {/* <Label color="red" />
            <Label color="blue" /> */}
            <div className="labels__item labels__item--add">
              <AiOutlinePlus size={16} />
            </div>
          </div>
        </div>
        <div className="card-detail-data__item">
          <h3 className="card-detail-data__item-header">Due date</h3>
          <div className="due-date-complete">
            <Form.Check type={"checkbox"} id={`complete-checkbox`} />
            <div className="due-date-complete__date-picker">
              Oct 18 at 8:42 PM
              <BsChevronDown size={14} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetailData
