import TrelloButton from "components/TrelloButton/TrelloButton"
import { Form, InputGroup } from "react-bootstrap"
import { IconContext } from "react-icons"
import { FiChevronDown, FiSearch } from "react-icons/fi"
import { IoMdNotificationsOutline } from "react-icons/io"
import { RiInformationLine } from "react-icons/ri"
import "./AppBar.scss"

const AppBar = () => {
  return (
    <nav className="navbar-app">
      <div className="navbar-app-container">
        <div className="navbar-app-container--left">
          <IconContext.Provider value={{ className: "icon-end", size: 15 }}>
            <TrelloButton className="navbar-app-btn-item">
              <div className="trello-icon" />
            </TrelloButton>
            <TrelloButton className="navbar-app-btn-item">
              Workspace
              <FiChevronDown />
            </TrelloButton>
            <TrelloButton className="navbar-app-btn-item">
              Recent
              <FiChevronDown />
            </TrelloButton>
            <TrelloButton className="navbar-app-btn-item">
              Starred
              <FiChevronDown />
            </TrelloButton>
            <TrelloButton className="navbar-app-btn-item">
              Templates
              <FiChevronDown />
            </TrelloButton>
            <TrelloButton className="navbar-app-btn-item active">
              Create
            </TrelloButton>
          </IconContext.Provider>
        </div>

        <div className="navbar-app-container--right">
          <IconContext.Provider value={{ className: "icon-center", size: 20 }}>
            <InputGroup className="search-text-input-group">
              <FiSearch className="search-text-icon" id="search-text-addon" />
              <Form.Control
                type="text"
                placeholder="Search"
                spellCheck={"false"}
                aria-describedby="search-text-addon"
                className="search-text-input"
              />
            </InputGroup>
            <TrelloButton className="navbar-app-btn-item">
              <RiInformationLine />
            </TrelloButton>
            <TrelloButton className="navbar-app-btn-item">
              <IoMdNotificationsOutline />
            </TrelloButton>
            <img
              className="user-avatar"
              src={require("assets/images/user-avatar.png")}
            />
          </IconContext.Provider>
        </div>
      </div>
    </nav>
  )
}

export default AppBar
