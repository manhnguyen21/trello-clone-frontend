import { useId } from "react"
import "./TrelloCheckBox.scss"

const TrelloCheckBox = ({ className, label: Label, ...rest }) => {
  const uniqueId = useId()

  return (
    <div className={`trello-checkbox ${className || ""}`}>
      <input type="checkbox" id={uniqueId} {...rest} />
      <label htmlFor={uniqueId}></label>
      {Label}
    </div>
  )
}

export default TrelloCheckBox
