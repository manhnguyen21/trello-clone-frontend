import "./Workspaces.scss"
const Workspaces = () => {
  return (
    <>
      <div className="workspace">
        <div className="workspace__title">Current workspace</div>
        <div className="workspace__details workspace__details--current">
          <div className="workspace__avatar">
            <span>T</span>
          </div>
          <div className="workspace__name">Trello workspace</div>
        </div>
      </div>
      <div className="workspace">
        <div className="workspace__title">Your workspace</div>
        <div className="workspace__details">
          <div className="workspace__avatar">
            <span>T</span>
          </div>
          <div className="workspace__name">Trello workspace</div>
        </div>
      </div>
    </>
  )
}

export default Workspaces
