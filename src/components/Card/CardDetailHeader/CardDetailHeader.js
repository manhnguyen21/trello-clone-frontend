import GrowingTextArea from "components/GrowingTextArea/GrowingTextArea"
import { AiOutlineEye } from "react-icons/ai"
import { CgClapperBoard } from "react-icons/cg"
import "./CardDetailHeader.scss"

const CardDetailHeader = ({ className }) => {
  return (
    <div className={`card-detail-header ${className}`}>
      <i className="card-detail-header__icon">
        <CgClapperBoard />
      </i>
      <div className="card-detail-header__title">
        <GrowingTextArea className="card-detail-header__title--text" />
      </div>
      <div className="card-detail-header__content">
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
