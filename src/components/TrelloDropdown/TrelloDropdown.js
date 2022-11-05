import TrelloButton from "components/TrelloButton/TrelloButton"
import "./TrelloDropdown.scss"

const TrelloDropdown = ({ children, header, dropDownContent }) => {
  return (
    <div className="trello-dropdown" tabIndex={-1}>
      {children}
      <div className={`trello-dropdown-container `}>
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
