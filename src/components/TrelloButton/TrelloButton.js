import "./TrelloButton.scss"

const TrelloButton = ({ children, ...props }) => {
  return (
    <button className="trello-button" {...props}>
      {children}
    </button>
  )
}

export default TrelloButton
