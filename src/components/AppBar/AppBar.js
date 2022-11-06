import TrelloButton from "components/TrelloButton/TrelloButton"
import TrelloDropdown from "components/TrelloDropdown/TrelloDropdown"
import useMediaQuery from "hooks/useMediaQuery"
import { useState } from "react"
import { Form, InputGroup } from "react-bootstrap"
import { IconContext } from "react-icons"
import { AiOutlinePlus } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { FiChevronDown, FiSearch } from "react-icons/fi"
import { IoMdNotificationsOutline } from "react-icons/io"
import { RiInformationLine } from "react-icons/ri"
import "./AppBar.scss"

const WORKSPACE = "workspace"
const RECENT = "recent"
const STARRED = "starred"
const TEMPLATES = "templates"
const CREATE = "create"

const AppBar = () => {
  const hideCreate = useMediaQuery("(max-width: 1000px)")

  const hideTemplates = useMediaQuery("(max-width: 900px)")

  const hideStarred = useMediaQuery("(max-width: 890px)")

  const hideRecent = useMediaQuery("(max-width: 810px)")

  const hideWorkspace = useMediaQuery("(max-width: 700px)")

  const hideSearchBar = useMediaQuery("(max-width: 600px)")

  const [activeFeature, setActiveFeature] = useState("create")

  const showMoreButton =
    hideTemplates || hideStarred || hideRecent || hideWorkspace

  const isActive = (feature) => {
    return (activeFeature === feature && "trello-btn--focus") || ""
  }

  const handleClickFeature = ({ target: { id } }) => setActiveFeature(id)

  return (
    <nav className="app-bar">
      <div className="app-bar-container">
        <div className="app-bar-container--left">
          <IconContext.Provider value={{ className: "icon-end", size: 15 }}>
            <TrelloButton
              className="app-bar-btn-item"
              type="transparent-brighter"
            >
              <div className="trello-icon" />
            </TrelloButton>
            {!hideWorkspace && (
              <TrelloDropdown
                header={"Workspace"}
                dropDownContent={
                  <div className="workspace">
                    <div className="workspace__title">Your workspace</div>
                    <div className="workspace__details">
                      <div className="workspace__avatar">
                        <span>T</span>
                      </div>
                      <div className="workspace__name">Trello workspace</div>
                    </div>
                  </div>
                }
              >
                <TrelloButton
                  id={WORKSPACE}
                  onClick={handleClickFeature}
                  className={`app-bar-btn-item ${isActive(WORKSPACE)}`}
                  type="transparent-brighter"
                >
                  Workspace
                  <FiChevronDown />
                </TrelloButton>
              </TrelloDropdown>
            )}
            {!hideRecent && (
              <TrelloDropdown
                header={RECENT}
                dropDownContent={
                  <div className="workspace">
                    <div className="workspace__title">Your workspace</div>
                    <div className="workspace__details">
                      <div className="workspace__avatar">
                        <span>T</span>
                      </div>
                      <div className="workspace__name">Trello workspace</div>
                    </div>
                  </div>
                }
              >
                <TrelloButton
                  id={RECENT}
                  onClick={handleClickFeature}
                  className={`app-bar-btn-item ${isActive(RECENT)}`}
                  type="transparent-brighter"
                >
                  Recent
                  <FiChevronDown />
                </TrelloButton>
              </TrelloDropdown>
            )}
            {!hideStarred && (
              <TrelloDropdown
                header={STARRED}
                dropDownContent={
                  <div className="workspace">
                    <div className="workspace__title">Your workspace</div>
                    <div className="workspace__details">
                      <div className="workspace__avatar">
                        <span>T</span>
                      </div>
                      <div className="workspace__name">Trello workspace</div>
                    </div>
                  </div>
                }
              >
                <TrelloButton
                  id={STARRED}
                  onClick={handleClickFeature}
                  className={`app-bar-btn-item ${isActive(STARRED)}`}
                  type="transparent-brighter"
                >
                  Starred
                  <FiChevronDown />
                </TrelloButton>
              </TrelloDropdown>
            )}
            {!hideTemplates && (
              <TrelloDropdown
                header={TEMPLATES}
                dropDownContent={
                  <div className="workspace">
                    <div className="workspace__title">Your workspace</div>
                    <div className="workspace__details">
                      <div className="workspace__avatar">
                        <span>T</span>
                      </div>
                      <div className="workspace__name">Trello workspace</div>
                    </div>
                  </div>
                }
              >
                <TrelloButton
                  id={TEMPLATES}
                  onClick={handleClickFeature}
                  className={`app-bar-btn-item ${isActive(TEMPLATES)}`}
                  type="transparent-brighter"
                >
                  Templates
                  <FiChevronDown />
                </TrelloButton>
              </TrelloDropdown>
            )}
            {showMoreButton && (
              <TrelloButton className="app-bar-btn-item">
                More <FiChevronDown />
              </TrelloButton>
            )}
            {!hideCreate ? (
              <TrelloDropdown
                header={CREATE}
                dropDownContent={
                  <div className="workspace">
                    <div className="workspace__title">Your workspace</div>
                    <div className="workspace__details">
                      <div className="workspace__avatar">
                        <span>T</span>
                      </div>
                      <div className="workspace__name">Trello workspace</div>
                    </div>
                  </div>
                }
              >
                <TrelloButton
                  id={CREATE}
                  onClick={handleClickFeature}
                  className={`app-bar-btn-item ${isActive(CREATE)}`}
                  type="transparent-brighter"
                >
                  Create
                </TrelloButton>
              </TrelloDropdown>
            ) : (
              <TrelloButton
                className="app-bar-btn-item active"
                type="transparent-brighter"
              >
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
              <TrelloButton
                className="app-bar-btn-item "
                type="transparent-brighter"
              >
                <BiSearch />
              </TrelloButton>
            )}
            {!hideSearchBar && (
              <TrelloButton
                className="app-bar-btn-item icon-center"
                type="transparent-brighter"
              >
                <RiInformationLine />
              </TrelloButton>
            )}
            <TrelloButton
              className="app-bar-btn-item icon-center"
              type="transparent-brighter"
            >
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
