import { useId } from "react"
import "./TrelloCheckBox.scss"

const TrelloCheckBox = ({ label: Label }) => {
  const uniqueId = useId()
  return (
    <div className="trello-checkbox">
      <input type="checkbox" id={uniqueId} />
      <label htmlFor={uniqueId}></label>
      {Label}
    </div>
  )
}

export default TrelloCheckBox
