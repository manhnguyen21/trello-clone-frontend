import Avatar from "components/Avatar/Avatar"
import TrelloCheckBox from "components/TrelloCheckBox/TrelloCheckBox"
import { IconContext } from "react-icons"
import { AiOutlineUser } from "react-icons/ai"
import "./Filter.scss"

const FilterGroup = ({ label, onChange, items }) => {
  const handleChange = (e) => {
    console.log("e", e)
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
          <div className="filter-item" key={item.id}>
            <TrelloCheckBox onChange={handleChange} />
            <IconContext.Provider value={{ size: 16 }}>
              <span className="filter-item__icon">{item.icon}</span>
            </IconContext.Provider>
            <span>{item.text}</span>
          </div>
        )
      })}
    </div>
  )
}

const Filter = () => {
  return (
    <div className="filter-container">
      <FilterGroup
        label={"Keyword"}
        onChange={(searchKeyWord) =>
          console.log("searchKeyWord", searchKeyWord)
        }
        text
      />
      <FilterGroup
        label={"Member"}
        onChange={(checkedItems) => console.log("checkedItems", checkedItems)}
        items={[
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
        ]}
      />
    </div>
  )
}

export default Filter
