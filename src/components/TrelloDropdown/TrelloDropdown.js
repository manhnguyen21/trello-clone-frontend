import TrelloButton from "components/TrelloButton/TrelloButton"
import "./TrelloDropdown.scss"

const TrelloDropdown = ({ children, header, dropDownContent, isDrop }) => {
  return (
    <div className="trello-dropdown">
      {children}
      <div
        className={`trello-dropdown-container ${
          (isDrop && " trello-dropdown-container--active") || ""
        }`}
      >
        <div className="trello-dropdown-container__header">
          <span></span>
          <h2>{header}</h2>
          <TrelloButton type="transparent-darker">X</TrelloButton>
        </div>
        <div className="trello-dropdown-container__content">
          {dropDownContent}
        </div>
      </div>
    </div>
  )
}

export default TrelloDropdown
