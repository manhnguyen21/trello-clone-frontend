import TrelloButton from "components/TrelloButton/TrelloButton"
import { IconContext } from "react-icons"
import "./CreateButton.scss"

const CreateButton = ({ icon, title, content }) => {
  return (
    <TrelloButton className="create-container" type="transparent-darker">
      <div className="create-container__header">
        <div className="create-container__icon">
          <IconContext.Provider value={{ size: 20 }}>
            {icon}
          </IconContext.Provider>
        </div>
        <div className="create-container__title">{title}</div>
      </div>
      <p className="create-container__content">{content}</p>
    </TrelloButton>
  )
}

export default CreateButton
