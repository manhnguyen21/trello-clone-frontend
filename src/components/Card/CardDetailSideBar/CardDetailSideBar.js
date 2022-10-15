const CardDetailSideBar = ({ className }) => {
  return (
    <div className={`card-detail-sidebar ${className}`}>
      <div className="card-detail-sidebar__label">
        <p>Add to card</p>
      </div>
      <div className="card-detail-sidebar__buttons">
        <ul>
          <li>
            <a href="#">Members</a>
          </li>
          <li>
            <a href="#">Labels</a>
          </li>
          <li>
            <a href="#">Checklist</a>
          </li>
          <li>
            <a href="#">Dates</a>
          </li>
          <li>
            <a href="#">attachments</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CardDetailSideBar
