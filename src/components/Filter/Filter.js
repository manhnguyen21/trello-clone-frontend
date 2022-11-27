import Avatar from "components/Avatar/Avatar"
import Label from "components/Label/Label"
import TrelloCheckBox from "components/TrelloCheckBox/TrelloCheckBox"
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
        icon: <AiOutlineUser />,
        text: "No member",
      },
      {
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
        icon: <RiCalendarTodoFill />,
        text: "No dates",
      },
      {
        icon: <FiClock />,
        style: { backgroundColor: "rgb(235, 90, 70)", color: "white" },
        text: "Overdue",
      },
      {
        icon: <FiClock />,
        style: { backgroundColor: "rgb(242, 214, 0)", color: "white" },
        text: "Due in the next day",
      },
      {
        icon: <FiClock />,
        text: "Due in the next week",
      },
      {
        icon: <FiClock />,
        text: "Due in the next month",
      },
      {
        text: "Marked as complete",
      },
      {
        text: "Not marked as complete",
      },
    ],
  },
  {
    groupName: "Labels",
    items: [
      {
        text: <Label width="100%" />,
      },
      {
        text: <Label width="100%" color="dark-blue" />,
      },
      {
        text: <Label width="100%" color="purple" />,
      },
    ],
  },
]

const FilterGroup = ({ label, onChange, items }) => {
  const handleChange = (e) => {
    onChange(e.target.value)
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
            className={`filter-item ${label === "Labels" ? "label" : ""}`}
            key={item.id}
          >
            <TrelloCheckBox onChange={handleChange} />
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

const Filter = () => {
  return (
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
}

export default Filter
