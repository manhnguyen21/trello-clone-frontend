import "./TrelloProgressBar.scss"

const TrelloProgressBar = ({ percent }) => {
  return (
    <div className="trello-progress-bar">
      <div
        className="trello-progress-bar__current"
        style={{
          width: `${percent}%`,
          borderRadius: `${percent === 100 ? "inherit" : ""}`,
        }}
      />
    </div>
  )
}

export default TrelloProgressBar
