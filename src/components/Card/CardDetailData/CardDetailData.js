import { AiOutlinePlus } from "react-icons/ai"
import "./CardDetailData.scss"

const CardDetailData = () => {
  return (
    <div className={`modal-card-detail-container `}>
      <div className="card-detail-data">
        <div className="card-detail-data__item">
          <h3 className="card-detail-data__item-header">Members</h3>
          <div className="members">
            <img
              className="members__item"
              src={require("assets/images/user-avatar.png")}
            />
            <a href="#" className="members__item members__item--add">
              <AiOutlinePlus size={16} />
            </a>
          </div>
        </div>
        <div className="card-detail-data__item">
          <h3 className="card-detail-data__item-header">Labels</h3>
          <div className="labels">
            <div className="labels__item labels__item--primary" />
            <div className="labels__item labels__item--primary" />
            <div className="labels__item labels__item--primary" />
            <div className="labels__item labels__item--primary" />
            <div className="labels__item labels__item--primary" />
            <div className="labels__item labels__item--primary" />
            <div className="labels__item labels__item--add">
              <AiOutlinePlus size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetailData
