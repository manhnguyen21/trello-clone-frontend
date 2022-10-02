import TrelloButton from "components/TrelloButton/TrelloButton"
import { IconContext } from "react-icons"
import { FiChevronDown } from "react-icons/fi"
import "./AppBar.scss"

const AppBar = () => {
  return (
    <nav className="navbar-app">
      <div className="navbar-app-container">
        <IconContext.Provider value={{ size: 15 }}>
          <div className="navbar-app-container--left">
            <TrelloButton className="navbar-app-btn-item">
              <div className="trello-icon" />
            </TrelloButton>

            <TrelloButton className="navbar-app-btn-item">
              Workspace
              <FiChevronDown className="navbar-app-btn-item--icon-end" />
            </TrelloButton>
            <TrelloButton className="navbar-app-btn-item">
              Recent
              <FiChevronDown className="navbar-app-btn-item--icon-end" />
            </TrelloButton>
            <TrelloButton className="navbar-app-btn-item">
              Starred
              <FiChevronDown className="navbar-app-btn-item--icon-end" />
            </TrelloButton>
            <TrelloButton className="navbar-app-btn-item">
              Templates
              <FiChevronDown className="navbar-app-btn-item--icon-end" />
            </TrelloButton>
            <TrelloButton className="navbar-app-btn-item active">
              Create
            </TrelloButton>
          </div>
          <div className="navbar-app-container--right">
            <img
              className="user-avatar"
              src={require("assets/images/user-avatar.png")}
            />
          </div>
        </IconContext.Provider>
      </div>
    </nav>
  )
}

export default AppBar
