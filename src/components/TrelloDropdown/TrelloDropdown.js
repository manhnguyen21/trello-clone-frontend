import TrelloButton from "components/TrelloButton/TrelloButton"
import { IconContext } from "react-icons"
import { IoCloseOutline } from "react-icons/io5"
import "./TrelloDropdown.scss"

const TrelloDropdown = ({ children, header, dropDownContent }) => {
  const handleClose = () => document.activeElement.blur()

  return (
    <div className="trello-dropdown" tabIndex={-1}>
      {children}
      <div className={`trello-dropdown-container `}>
        <div className="trello-dropdown-container__header">
          <span></span>
          <h2>{header}</h2>
          <TrelloButton type="transparent-brighter" onClick={handleClose}>
            <IconContext.Provider value={{ size: "1.25rem" }}>
              <IoCloseOutline />
            </IconContext.Provider>
          </TrelloButton>
        </div>
        <div className="trello-dropdown-container__content">
          {dropDownContent}
        </div>
      </div>
    </div>
  )
}

export default TrelloDropdown
