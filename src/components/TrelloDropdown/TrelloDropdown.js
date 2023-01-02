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

  const handleBlur = (e) => {
    // if the blur was because of outside focus
    // currentTarget is the parent element, relatedTarget is the clicked element
    if (!e.currentTarget.contains(e.relatedTarget)) {
      handleClose()
    }
  }

  return (
    <div
      ref={wrapperRef}
      className={`trello-dropdown`}
      tabIndex={-1}
      onBlur={handleBlur}
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
          style={{ maxHeight: contentHeight }}
          className="trello-dropdown-container__content"
        >
          {dropDownContent}
        </div>
      </div>
    </div>
  )
}

TrelloDropdown.Item = TrelloDropdownItem

export default TrelloDropdown
