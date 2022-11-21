import Boards from "components/Boards/Boards"
import Templates from "components/Templates/Templates"
import TrelloButton from "components/TrelloButton/TrelloButton"
import TrelloDropdown from "components/TrelloDropdown/TrelloDropdown"
import Workspaces from "components/Workspaces/Workspaces"
import useMediaQuery from "hooks/useMediaQuery"
import { useState } from "react"
import { Form, InputGroup } from "react-bootstrap"
import { IconContext } from "react-icons"
import { AiOutlinePlus } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { BsPeople } from "react-icons/bs"
import { FiChevronDown, FiSearch } from "react-icons/fi"
import { IoMdNotificationsOutline } from "react-icons/io"
import { RiInformationLine } from "react-icons/ri"
import { TbLayoutBoardSplit } from "react-icons/tb"
import { VscNotebookTemplate } from "react-icons/vsc"
import "./AppBar.scss"

const WORKSPACE = "workspace"
const RECENT = "recent"
const STARRED = "starred"
const TEMPLATES = "templates"
const CREATE = "create"

const recentBoards = [
  {
    key: 1,
    thumb:
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg",
    name: "ThanhDat-Workspace",
    description: "Trello Templates",
    starred: true,
  },
  {
    key: 2,
    thumb:
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x322/47f09f0e3910259568294477d0bdedac/photo-1576502200916-3808e07386a5.jpg",
    name: "Kanban Template",
    description: "",
    starred: true,
  },
  {
    key: 3,
    thumb:
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/e8a76cd7622d8889d42c2977427bb584/photo-1515079424831-8fce6574676d.jpg",
    name: "Trello Agile Sprint Board",
    description: "Trello Templates",
    starred: true,
  },
  {
    key: 5,
    thumb:
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x336/24baa6609b89fb8eb0cc0aceb70eaf36/photo-1557682250-33bd709cbe85.jpg",
    name: "Project Management",
    description: "",
    starred: false,
  },
  {
    key: 6,
    thumb:
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x336/24baa6609b89fb8eb0cc0aceb70eaf36/photo-1557682250-33bd709cbe85.jpg",
    name: "Project Management",
    description: "",
    starred: false,
  },
  {
    key: 7,
    thumb:
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x336/24baa6609b89fb8eb0cc0aceb70eaf36/photo-1557682250-33bd709cbe85.jpg",
    name: "Project Management",
    description: "",
    starred: false,
  },
  {
    key: 8,
    thumb:
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg",
    name: "ThanhDat-Workspace",
    description: "Trello Templates",
    starred: false,
  },
  {
    key: 9,
    thumb:
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x322/47f09f0e3910259568294477d0bdedac/photo-1576502200916-3808e07386a5.jpg",
    name: "Kanban Template",
    description: "",
    starred: false,
  },
  {
    key: 10,
    thumb:
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/e8a76cd7622d8889d42c2977427bb584/photo-1515079424831-8fce6574676d.jpg",
    name: "Trello Agile Sprint Board",
    description: "Trello Templates",
    starred: false,
  },
  {
    key: 11,
    thumb:
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x336/24baa6609b89fb8eb0cc0aceb70eaf36/photo-1557682250-33bd709cbe85.jpg",
    name: "Project Management",
    description: "",
  },
  {
    key: 12,
    thumb:
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x336/24baa6609b89fb8eb0cc0aceb70eaf36/photo-1557682250-33bd709cbe85.jpg",
    name: "Project Management",
    description: "",
  },
  {
    key: 13,
    thumb:
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg",
    name: "ThanhDat-Workspace",
    description: "Trello Templates",
  },
]

const createContent = [
  {
    key: 1,
    icon: <TbLayoutBoardSplit />,
    title: "Create boards",
    content:
      "A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything.",
  },
  {
    key: 2,
    icon: <VscNotebookTemplate />,
    title: "Start with a template",
    content: "Get started faster with a board template.",
  },
  {
    key: 3,
    icon: <BsPeople />,
    title: "Create Workspace",
    content:
      "A Workspace is a group of boards and people. Use it to organize your company, side hustle, family, or friends.",
  },
]

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
                dropDownContent={<Workspaces />}
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
                header={"Recent boards"}
                dropDownContent={<Boards boards={recentBoards} />}
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
                  <Boards boards={recentBoards.filter((i) => i.starred)} />
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
                dropDownContent={<Templates />}
                active={isActive(TEMPLATES)}
                onClose={() => {
                  setActiveFeature(null)
                }}
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
                dropDownContent={createContent.map(
                  ({ key, icon, title, content }) => (
                    <TrelloDropdown.Item
                      key={key}
                      icon={icon}
                      title={title}
                      content={content}
                    />
                  )
                )}
                // active
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
