import "./TrelloButton.scss"

const TrelloButton = ({ className, children, ...props }) => {
  return (
    <button className={`trello-button ${className}`} {...props}>
      {children}
    </button>
  )
}

export default TrelloButton
