import "./ProgressBar.scss"

const ProgressBar = ({ percent }) => {
  return (
    <div className="trello-progress-bar">
      <div
        className="trello-progress-bar__current"
        style={{ width: `${percent}%` }}
      />
    </div>
  )
}

export default ProgressBar
