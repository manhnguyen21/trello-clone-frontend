import TrelloButton from "components/TrelloButton/TrelloButton"
import useMediaQuery from "hooks/useMediaQuery"
import { Form, InputGroup } from "react-bootstrap"
import { IconContext } from "react-icons"
import { AiOutlinePlus } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { FiChevronDown, FiSearch } from "react-icons/fi"
import { IoMdNotificationsOutline } from "react-icons/io"
import { RiInformationLine } from "react-icons/ri"
import "./AppBar.scss"

const AppBar = () => {
  const hideCreate = useMediaQuery("(max-width: 1000px)")
  const hideTemplates = useMediaQuery("(max-width: 900px)")
  const hideStarred = useMediaQuery("(max-width: 890px)")
  const hideRecent = useMediaQuery("(max-width: 810px)")
  const hideWorkspace = useMediaQuery("(max-width: 700px)")
  const hideSearchBar = useMediaQuery("(max-width: 600px)")

  const showMoreButton =
    hideTemplates || hideStarred || hideRecent || hideWorkspace

  return (
    <nav className="app-bar">
      <div className="app-bar-container">
        <div className="app-bar-container--left">
          <IconContext.Provider value={{ className: "icon-end", size: 15 }}>
            <TrelloButton className="app-bar-btn-item">
              <div className="trello-icon" />
            </TrelloButton>
            {!hideWorkspace && (
              <TrelloButton className="app-bar-btn-item">
                Workspace
                <FiChevronDown />
              </TrelloButton>
            )}
            {!hideRecent && (
              <TrelloButton className="app-bar-btn-item">
                Recent
                <FiChevronDown />
              </TrelloButton>
            )}
            {!hideStarred && (
              <TrelloButton className="app-bar-btn-item">
                Starred
                <FiChevronDown />
              </TrelloButton>
            )}
            {!hideTemplates && (
              <TrelloButton className="app-bar-btn-item">
                Templates
                <FiChevronDown />
              </TrelloButton>
            )}
            {showMoreButton && (
              <TrelloButton className="app-bar-btn-item">
                More <FiChevronDown />
              </TrelloButton>
            )}
            {!hideCreate ? (
              <TrelloButton className="app-bar-btn-item active">
                Create
              </TrelloButton>
            ) : (
              <TrelloButton className="app-bar-btn-item active">
                <AiOutlinePlus style={{ marginLeft: 0 }} size={20} />
              </TrelloButton>
            )}
          </IconContext.Provider>
        </div>
        <div className="app-bar-container--right">
          <IconContext.Provider value={{ className: "icon-center", size: 20 }}>
            {!hideSearchBar ? (
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
            ) : (
              <TrelloButton className="app-bar-btn-item active">
                <BiSearch />
              </TrelloButton>
            )}
            {!hideSearchBar && (
              <TrelloButton className="app-bar-btn-item">
                <RiInformationLine />
              </TrelloButton>
            )}
            <TrelloButton className="app-bar-btn-item">
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
