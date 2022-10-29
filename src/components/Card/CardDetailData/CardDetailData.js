import Avatar from "components/Avatar/Avatar"
import Label from "components/Label/Label"
import TrelloButton from "components/TrelloButton/TrelloButton"
import TrelloCheckBox from "components/TrelloCheckBox/TrelloCheckBox"
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
              <Avatar key={src} src={src} />
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
            <div className="labels__item labels__item--add ">
              <AiOutlinePlus size={16} />
            </div>
            {/* <TrelloButton className="labels__item labels__item--add card-button">
              <AiOutlinePlus size={16} />
            </TrelloButton> */}
          </div>
        </div>
        <div className="card-detail-data__item card-detail-data__item--full-width">
          <h3 className="card-detail-data__item-header">Due date</h3>
          <TrelloCheckBox
            label={
              <TrelloButton className="due-date-complete__date-picker card-button">
                Oct 18 at 8:42 PM
                <span className="due-date-complete__badge">over due</span>
                <BsChevronDown size={14} />
              </TrelloButton>
            }
          />
        </div>
      </div>
    </div>
  )
}

export default CardDetailData
