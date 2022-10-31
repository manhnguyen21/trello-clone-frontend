import React, { useId } from "react"
import "./TrelloSwitch.scss"

const TrelloSwitch = () => {
  const uniqueId = useId()
  return (
    <div className="trello-switch">
      <input type="checkbox" id={uniqueId} />
      <label htmlFor={uniqueId} />
    </div>
  )
}

export default TrelloSwitch
