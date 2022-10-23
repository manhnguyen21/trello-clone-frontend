import "./TrelloButton.scss"

const TrelloButton = ({ className, type, children, ...props }) => {
  return (
    <button
      className={`trello-btn ${className} ${type || "darker"}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default TrelloButton
