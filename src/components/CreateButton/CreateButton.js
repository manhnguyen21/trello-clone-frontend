import TrelloButton from "components/TrelloButton/TrelloButton"
import { IconContext } from "react-icons"
import { TbLayoutBoardSplit } from "react-icons/tb"
import "./CreateButton.scss"

const CreateButton = () => {
  return (
    <TrelloButton className="create-container" type="transparent-darker">
      <div className="create-container__header">
        <div className="create-container__icon">
          <IconContext.Provider value={{ size: 20 }}>
            <TbLayoutBoardSplit />
          </IconContext.Provider>
        </div>
        <div className="create-container__title">Create board</div>
      </div>
      <p className="create-container__content">
        A board is made up of cards ordered on lists. Use it to manage projects,
        track information, or organize anything.
      </p>
    </TrelloButton>
  )
}

export default CreateButton
