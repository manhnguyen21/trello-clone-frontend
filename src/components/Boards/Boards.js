import TrelloButton from "components/TrelloButton/TrelloButton"
import { useEffect, useState } from "react"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import "./Boards.scss"

const Board = ({ board }) => {
  const [starred, setStarred] = useState(false)
  const toggleStarred = () => setStarred(!starred)

  useEffect(() => {
    if (board.starred) {
      setStarred(board.starred)
    }
  }, [board.starred])

  return (
    <div className="board">
      <div
        className="board-thumb"
        style={{ backgroundImage: `url(${board?.thumb})` }}
      />
      <div className="board-info">
        <div>{board?.name}</div>
        {board?.description && <span>{board.description}</span>}
      </div>
      <TrelloButton className={"board-template-btn"}>Template</TrelloButton>
      {!starred && (
        <AiOutlineStar onClick={toggleStarred} className="board-star" />
      )}
      {starred && (
        <AiFillStar
          onClick={toggleStarred}
          tabIndex={-1}
          className="board-star board-star--starred"
        />
      )}
    </div>
  )
}

const Boards = ({ boards }) => {
  return (
    <ul className="boards">
      {boards.map(({ key, ...board }) => (
        <li key={key}>
          <Board board={board} />
        </li>
      ))}
    </ul>
  )
}

export default Boards
