import { useId } from "react"
import "./TrelloCheckBox.scss"

const TrelloCheckBox = ({ label: Label, ...rest }) => {
  const uniqueId = useId()
  return (
    <div className="trello-checkbox">
      <input type="checkbox" id={uniqueId} {...rest} />
      <label htmlFor={uniqueId}></label>
      {Label}
    </div>
  )
}

export default TrelloCheckBox
