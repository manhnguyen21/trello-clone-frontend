import GrowingTextArea from "components/GrowingTextArea/GrowingTextArea"
import { AiOutlineEye } from "react-icons/ai"
import { CgClapperBoard } from "react-icons/cg"
import "./CardDetailHeader.scss"

const CardDetailHeader = ({ className }) => {
  return (
    <div className={`modal-card-detail-container ${className ?? ""}`}>
      <i className="modal-card-detail-container__icon">
        <CgClapperBoard />
      </i>
      <div className="modal-card-detail-container__title">
        <GrowingTextArea
          className="card-header-title"
          value={"Design & Research"}
        />
      </div>
      <div className="card-header-content">
        <p>
          in list <a href="#">Design</a>
          <span>
            <AiOutlineEye />
          </span>
        </p>
      </div>
    </div>
  )
}
export default CardDetailHeader
