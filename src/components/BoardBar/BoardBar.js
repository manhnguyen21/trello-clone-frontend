import GrowingInput from "components/GrowingInput/GrowingInput"
import TrelloButton from "components/TrelloButton/TrelloButton"
import { IconContext } from "react-icons"
import { AiFillThunderbolt, AiOutlineUserAdd } from "react-icons/ai"
import { BiRocket } from "react-icons/bi"
import { BsThreeDots } from "react-icons/bs"
import { FiChevronDown, FiUsers } from "react-icons/fi"
import { HiViewBoards } from "react-icons/hi"
import { IoFilterSharp } from "react-icons/io5"
import { TiStarOutline } from "react-icons/ti"
import { ICON_SIZE } from "utilities/constants"
import "./BoardBar.scss"

const boardNameInputStyle = { fontSize: 18, fontWeight: "bold" }

const BoardBar = () => {
  return (
    <nav className="navbar-board">
      <div className="navbar-board-container">
        <IconContext.Provider value={{ size: ICON_SIZE }}>
          <div className="navbar-board-container--left">
            <TrelloButton className="navbar-board-btn-item">
              <HiViewBoards className="navbar-board-btn-item--icon-start" />
              Board
              <FiChevronDown className="navbar-board-btn-item--icon-end" />
            </TrelloButton>
            <div className="navbar-board-btn-item board-name">
              <GrowingInput style={boardNameInputStyle} />
            </div>
            <TrelloButton className="navbar-board-btn-item only-icon">
              <TiStarOutline
                size={2}
                className="navbar-board-btn-item--icon-start star-icon"
              />
            </TrelloButton>
            <span className="navbar-board-btn-divider" />
            <TrelloButton className="navbar-board-btn-item btn-without-icon">
              Trello Workspace
            </TrelloButton>
            <span className="navbar-board-btn-divider" />
            <TrelloButton className="navbar-board-btn-item">
              <FiUsers className="navbar-board-btn-item--icon-start" />
              Workspace visible
            </TrelloButton>
            <span className="navbar-board-btn-divider" />
            <img
              className="user-avatar"
              src={require("assets/images/user-avatar.png")}
            />
            <TrelloButton className="navbar-board-btn-item btn-share">
              <AiOutlineUserAdd className="navbar-board-btn-item--icon-start" />
              Share
            </TrelloButton>
          </div>
          <div className="navbar-board-container--right">
            <TrelloButton className="navbar-board-btn-item">
              <AiFillThunderbolt className="navbar-board-btn-item--icon-start" />
              Automation
            </TrelloButton>
            <TrelloButton className="navbar-board-btn-item">
              <BiRocket className="navbar-board-btn-item--icon-start" />
              Power-Ups
            </TrelloButton>
            <span className="navbar-board-btn-divider" />
            <TrelloButton className="navbar-board-btn-item">
              <IoFilterSharp className="navbar-board-btn-item--icon-start" />
              Filter
            </TrelloButton>
            <span className="navbar-board-btn-divider" />
            <TrelloButton className="navbar-board-btn-item">
              <BsThreeDots className="navbar-board-btn-item--icon-start" />
              Show Menu
            </TrelloButton>
          </div>
        </IconContext.Provider>
      </div>
    </nav>
  )
}

export default BoardBar
