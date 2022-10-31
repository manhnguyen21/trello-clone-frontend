import propTypes from "prop-types"
import "./TrelloButton.scss"

const TrelloButton = ({ className, type = "darker", children, ...props }) => {
  return (
    <button className={`trello-btn ${className || ""} ${type}`} {...props}>
      {children}
    </button>
  )
}

TrelloButton.propTypes = {
  className: propTypes.string,
  type: propTypes.oneOf([
    "darker",
    "brighter",
    "transparent-darker",
    "transparent-brighter",
    "primary",
  ]),
}

export default TrelloButton
