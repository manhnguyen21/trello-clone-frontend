import TrelloButton from "components/TrelloButton/TrelloButton"
import TrelloDropdownItem from "components/TrelloDropdownItem/TrelloDropdownItem"
import { isFunction } from "lodash"
import { useEffect, useRef, useState } from "react"
import { IconContext } from "react-icons"
import { IoCloseOutline } from "react-icons/io5"
import "./TrelloDropdown.scss"

const TrelloDropdown = ({
  active,
  header,
  children,
  className,
  dropDownContent,
  // the action which collapse the dropdown
  onClose,
}) => {
  const wrapperRef = useRef()

  const [contentHeight, setContentHeight] = useState()

  useEffect(() => {
    const updateDropdownContentHeight = (e) => {
      if (wrapperRef.current) {
        const height =
          e.target.window.innerHeight - (wrapperRef.current.offsetTop + 90)
        setContentHeight(height)
      }
    }

    updateDropdownContentHeight({ target: { window } })

    window.addEventListener("resize", updateDropdownContentHeight)

    return () =>
      window.removeEventListener("resize", updateDropdownContentHeight)
  }, [])

  const handleClose = () => {
    isFunction(onClose) && onClose()
  }

  return (
    <div
      tabIndex={-1}
      ref={wrapperRef}
      onBlur={handleClose}
      className={`trello-dropdown`}
    >
      {children}
      <div
        className={`trello-dropdown-container ${className || ""} ${
          (active && "trello-dropdown-container--active") || ""
        } `}
      >
        <div className="trello-dropdown-container__header">
          <span></span>
          <h2>{header}</h2>
          <TrelloButton type="transparent-brighter" onClick={handleClose}>
            <IconContext.Provider value={{ size: "1.25rem" }}>
              <IoCloseOutline />
            </IconContext.Provider>
          </TrelloButton>
        </div>
        <div
          className="trello-dropdown-container__content"
          style={{ maxHeight: contentHeight }}
        >
          {dropDownContent}
        </div>
      </div>
    </div>
  )
}

TrelloDropdown.Item = TrelloDropdownItem

export default TrelloDropdown
