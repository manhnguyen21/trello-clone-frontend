import PropTypes from "prop-types"
import "./Label.scss"

const Label = ({ width = "3rem", color = "green" }) => {
  return <div className={`label ${color}`} style={{ width }}></div>
}

Label.propTypes = {
  width: PropTypes.string,
  color: PropTypes.oneOf([
    "green",
    "dark-green",
    "yellow",
    "orange",
    "red",
    "purple",
    "blue",
    "dark-blue",
    "sky",
    "pink",
  ]),
}

export default Label
