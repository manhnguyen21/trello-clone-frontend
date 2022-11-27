import Avatar from "components/Avatar/Avatar"
import TrelloCheckBox from "components/TrelloCheckBox/TrelloCheckBox"
import "./Filter.scss"

const FilterGroup = ({ label, onChange, items }) => {
  const handleChange = (e) => {
    console.log("e", e)
    onChange(e.target.value)
  }

  return (
    <div className="filter-group">
      <span>{label}</span>
      {!items && (
        <div className="filter-text">
          <input size="sm" type="text" className="trello-app-editable" />
          <span>Search cards, members, labels, and more.</span>
        </div>
      )}
      {items?.map((item) => {
        return (
          <div className="filter-item" key={item.id}>
            <TrelloCheckBox onChange={handleChange} />
            <Avatar key={item.icon} src={item.icon} /> <p>{item.text}</p>
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
        label={"member"}
        onChange={(checkedItems) => console.log("checkedItems", checkedItems)}
        items={[
          { icon: "icon", text: "No member" },
          { icon: "me", text: "card assign to me" },
        ]}
      />
    </div>
  )
}

export default Filter
