import TrelloButton from "components/TrelloButton/TrelloButton"
import { FiX } from "react-icons/fi"
import "./AddNewButton.scss"

const AddNewButton = ({ addLabel, onAddClick, onCloseClick }) => {
  return (
    <div className="add-new-button">
      <TrelloButton
        className={"add-new-button--button"}
        size="sm"
        onClick={onAddClick}
      >
        {addLabel}
      </TrelloButton>
      <span onClick={onCloseClick}>
        <FiX />
      </span>
    </div>
  )
}

export default AddNewButton
