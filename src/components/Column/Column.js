import Card from "components/Card/Card"
import ConfirmModal from "components/Common/ConfirmModal"
import React, { useEffect, useState } from "react"
import { Dropdown, Form } from "react-bootstrap"
import { Container, Draggable } from "react-smooth-dnd"
import { MODAL_ACTION_CONFIRM } from "utilities/constants"
import {
  handlePressEnter,
  selectText,
} from "utilities/contentEditableInlineText"
import { mapOrder } from "utilities/utils"
import "./Column.scss"

const Column = ({ column, onCardDrop, onColumnUpdate }) => {
  const [columnTitle, setColumnTitle] = useState("")

  const cards = mapOrder(column.cards, column.cardOrder)

  const [showConfirmModal, setShowConfirmModal] = useState(false)

  const toggleShowConfirmModal = () => setShowConfirmModal(!showConfirmModal)

  const handleConfirmModalAction = (type) => {
    if (type === MODAL_ACTION_CONFIRM) {
      onColumnUpdate({ ...column, _destroy: true })
    }
    toggleShowConfirmModal()
  }

  const handleColumnTitleChange = ({ target: { value } }) =>
    setColumnTitle(value)

  const handleColumnTitleBlur = () => {
    onColumnUpdate({ ...column, title: columnTitle })
  }

  const handleColumnTitleMouseDown = (e) => e.preventDefault()

  useEffect(() => {
    setColumnTitle(column.title)
  }, [column.title])

  return (
    <div className="column">
      <header className="column-drag-handle">
        <div className="column-title">
          <Form.Control
            size="sm"
            type="text"
            placeholder="Enter column name..."
            className="trello-app-editable"
            value={columnTitle}
            spellCheck={"false"}
            onClick={selectText}
            onKeyDown={handlePressEnter}
            onBlur={handleColumnTitleBlur}
            onChange={handleColumnTitleChange}
            onMouseDown={handleColumnTitleMouseDown}
          />
        </div>
        <div className="column-dropdown-actions">
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              size="sm"
              className="dropdown-btn"
            />

            <Dropdown.Menu>
              <Dropdown.Item>Add card</Dropdown.Item>
              <Dropdown.Item onClick={toggleShowConfirmModal}>
                Remove column
              </Dropdown.Item>
              <Dropdown.Item>Move all card in this column</Dropdown.Item>
              <Dropdown.Item>Archive all card in this column</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </header>
      <div className="card-list">
        <Container
          groupName="col"
          onDrop={(dropResult) => onCardDrop(column.id, dropResult)}
          getChildPayload={(index) => cards[index]}
          dragClass="card-ghost"
          dropClass="card-ghost-drop"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: "card-drop-preview",
          }}
          dropPlaceholderAnimationDuration={200}
        >
          {cards.map((card, index) => (
            <Draggable key={index}>
              <Card card={card} />
            </Draggable>
          ))}
        </Container>
      </div>
      <footer>
        <div className="footer-actions">
          <i className="icon fa fa-plus" />
          Add another card
        </div>
      </footer>
      <ConfirmModal
        show={showConfirmModal}
        onAction={handleConfirmModalAction}
        title="remove column"
        content={`Are you sure, you want to remove <strong> ${column.title}  </strong> column!<br /> All related cards will also be remove!`}
      />
    </div>
  )
}

export default Column
