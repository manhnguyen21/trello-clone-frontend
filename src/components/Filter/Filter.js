import Avatar from "components/Avatar/Avatar"
import Label from "components/Label/Label"
import TrelloCheckBox from "components/TrelloCheckBox/TrelloCheckBox"
import { uniqueId } from "lodash"
import { useState } from "react"
import { IconContext } from "react-icons"
import { AiOutlineUser } from "react-icons/ai"
import { FiClock } from "react-icons/fi"
import { RiCalendarTodoFill } from "react-icons/ri"
import "./Filter.scss"

const filterGroups = [
  {
    groupName: "Member",
    items: [
      {
        id: uniqueId(),
        icon: <AiOutlineUser />,
        text: "No member",
      },
      {
        id: uniqueId(),
        icon: (
          <Avatar
            src={
              "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
            }
            alt={
              "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
            }
          />
        ),
        text: "Card assign to me",
      },
    ],
  },
  {
    groupName: "Due date",
    items: [
      {
        id: uniqueId(),
        icon: <RiCalendarTodoFill />,
        text: "No dates",
      },
      {
        id: uniqueId(),
        icon: <FiClock />,
        style: { backgroundColor: "rgb(235, 90, 70)", color: "white" },
        text: "Overdue",
      },
      {
        id: uniqueId(),
        icon: <FiClock />,
        style: { backgroundColor: "rgb(242, 214, 0)", color: "white" },
        text: "Due in the next day",
      },
      {
        id: uniqueId(),
        icon: <FiClock />,
        text: "Due in the next week",
      },
      {
        id: uniqueId(),
        icon: <FiClock />,
        text: "Due in the next month",
      },
      {
        id: uniqueId(),
        text: "Marked as complete",
      },
      {
        id: uniqueId(),
        text: "Not marked as complete",
      },
    ],
  },
  {
    groupName: "Labels",
    items: [
      {
        id: uniqueId(),
        text: <Label width="100%" />,
      },
      {
        id: uniqueId(),
        text: <Label width="100%" color="dark-blue" />,
      },
      {
        id: uniqueId(),
        text: <Label width="100%" color="purple" />,
      },
    ],
  },
]

const FilterGroup = ({ label, items }) => {
  const [checkedIds, setCheckedIds] = useState([])

  const handleItemCheck = (id) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((i) => i !== id))
    } else {
      setCheckedIds([...checkedIds, id])
    }
  }

  return (
    <div className="filter-group">
      <span className="filter-group__label">{label}</span>
      {!items && (
        <div className="filter-text">
          <input
            size="sm"
            type="text"
            className="trello-app-editable"
            placeholder="Enter a keyword..."
          />
          <span>Search cards, members, labels, and more.</span>
        </div>
      )}
      {items?.map((item) => {
        return (
          <div
            key={item.id}
            onClick={(e) => {
              e.preventDefault()
              handleItemCheck(item.id)
            }}
            className={`filter-item ${label === "Labels" ? "label" : ""}`}
          >
            <TrelloCheckBox
              checked={checkedIds.includes(item.id)}
              onChange={(e) => {
                e.preventDefault()
              }}
            />
            <div className="filter-item-content">
              {item.icon && (
                <IconContext.Provider value={{ size: 16 }}>
                  <span
                    className="filter-item-content__icon"
                    style={item.style}
                  >
                    {item.icon}
                  </span>
                </IconContext.Provider>
              )}
              <span className="filter-item-content__text">{item.text}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const Filter = () => (
  <div className="filter-container">
    <FilterGroup label={"Keyword"} text />
    {filterGroups.map((group) => (
      <FilterGroup
        key={group.groupName}
        label={group.groupName}
        items={group.items}
      />
    ))}
  </div>
)

export default Filter
