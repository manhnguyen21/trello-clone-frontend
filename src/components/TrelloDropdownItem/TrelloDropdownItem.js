import TrelloButton from "components/TrelloButton/TrelloButton"
import { IconContext } from "react-icons"
import "./TrelloDropdownItem.scss"

const TrelloDropdownItem = ({ icon, title, content, disabled }) => {
  const disabledClassName = disabled ? "trello-dropdown-item--disabled" : ""
  return (
    <TrelloButton
      className={`trello-dropdown-item ${disabledClassName}`}
      type="transparent-darker"
    >
      <div className="trello-dropdown-item__header">
        <div className="trello-dropdown-item__icon">
          <IconContext.Provider value={{ size: 16 }}>
            {icon}
          </IconContext.Provider>
        </div>
        <div className="trello-dropdown-item__title">{title}</div>
      </div>
      <p className="trello-dropdown-item__content">{content}</p>
    </TrelloButton>
  )
}

export default TrelloDropdownItem
