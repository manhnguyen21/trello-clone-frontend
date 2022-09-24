import AddNewButton from "components/AddNewButton/AddNewButton"
import Card from "components/Card/Card"
import ConfirmModal from "components/Common/ConfirmModal"
import { useEffect, useRef, useState } from "react"
import { Dropdown, Form } from "react-bootstrap"
import { Container, Draggable } from "react-smooth-dnd"
import { updateColumn } from "services/column"
import { MODAL_ACTION_CONFIRM } from "utilities/constants"
import {
  handlePressEnter,
  selectText,
} from "utilities/contentEditableInlineText"
import { mapOrder } from "utilities/utils"
import "./Column.scss"

const Column = ({ column, onCardDrop, onColumnUpdateState }) => {
  const cards = mapOrder(column.cards, column.cardOrder)

  const firstCardTitleRef = useRef()
  const endCardTitleRef = useRef()

  const [columnTitle, setColumnTitle] = useState("")
  const [firstCardTitle, setFirstCardTitle] = useState("")
  const [endCardTitle, setEndCardTitle] = useState("")

  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [openAddNewFirstCard, setOpenAddNewFirstCard] = useState(false)
  const [openAddNewEndCard, setOpenAddNewEndCard] = useState(false)

  const toggleShowConfirmModal = () => setShowConfirmModal(!showConfirmModal)

  const toggleAddNewFirstCard = () =>
    setOpenAddNewFirstCard(!openAddNewFirstCard)

  const toggleAddNewEndCard = () => setOpenAddNewEndCard(!openAddNewEndCard)

  const handleColumnTitleChange = ({ target: { value } }) =>
    setColumnTitle(value)

  const handleColumnTitleBlur = () => {
    if (column.title === columnTitle) return

    const newColumState = { ...column, title: columnTitle }

    updateColumn(newColumState)
      .then((updatedColumn) => {
        onColumnUpdateState(updatedColumn)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error)
        setColumnTitle(column.title)
      })
  }

  const handleColumnTitleMouseDown = (e) => e.preventDefault()

  const handleConfirmModalAction = (type) => {
    if (type === MODAL_ACTION_CONFIRM) {
      updateColumn({ ...column, _destroy: true }).then((removedColumn) => {
        onColumnUpdateState(removedColumn)
      })
    }
    toggleShowConfirmModal()
  }

  const handleFirstCardTitleChange = ({ target: { value } }) =>
    setFirstCardTitle(value)

  const handleEndCardTitleChange = ({ target: { value } }) =>
    setEndCardTitle(value)

  const handleAddNewFirstCard = () => {
    const newCard = {
      id: Math.random(),
      boardId: column.boardId,
      columnId: column._id,
      title: firstCardTitle,
      cover: null,
    }

    const newCards = [newCard, ...column.cards]
    const newCardOrder = [newCard._id, ...column.cardOrder]

    onColumnUpdateState({
      ...column,
      cards: newCards,
      cardOrder: newCardOrder,
    })
    setFirstCardTitle("")
    toggleAddNewFirstCard()
  }

  const handleAddNewEndCard = () => {
    const newCard = {
      id: Math.random(),
      boardId: column.boardId,
      columnId: column._id,
      title: endCardTitle,
      cover: null,
    }

    const newCards = [...column.cards, newCard]
    const newCardOrder = [...column.cards, newCard._id]

    onColumnUpdateState({
      ...column,
      cards: newCards,
      cardOrder: newCardOrder,
    })
    setEndCardTitle("")
    toggleAddNewEndCard()
  }

  useEffect(() => {
    setColumnTitle(column.title)
  }, [column.title])

  useEffect(() => {
    openAddNewEndCard &&
      endCardTitleRef.current &&
      endCardTitleRef.current.select()
  }, [openAddNewEndCard])

  useEffect(() => {
    openAddNewFirstCard &&
      firstCardTitleRef.current &&
      firstCardTitleRef.current.select()
  }, [openAddNewFirstCard])

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
              <Dropdown.Item onClick={toggleAddNewFirstCard}>
                Add card
              </Dropdown.Item>
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
        {openAddNewFirstCard && (
          <>
            <Form.Control
              size="sm"
              as="textarea"
              row="3"
              placeholder="Enter card content..."
              className="card-title-text"
              ref={firstCardTitleRef}
              value={firstCardTitle}
              onClick={selectText}
              onKeyDown={handlePressEnter}
              onChange={handleFirstCardTitleChange}
              onBlur={handleAddNewFirstCard}
            />
            <AddNewButton
              addLabel={"Add new card"}
              onAddClick={handleAddNewFirstCard}
              onCloseClick={toggleAddNewFirstCard}
            />
            <div className="add-first-card-spacing" />
          </>
        )}
        <Container
          groupName="col"
          onDrop={(dropResult) => onCardDrop(column._id, dropResult)}
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

        {openAddNewEndCard && (
          <Form.Control
            size="sm"
            as="textarea"
            row="3"
            placeholder="Enter card content..."
            className="card-title-text"
            ref={endCardTitleRef}
            value={endCardTitle}
            onClick={selectText}
            onKeyDown={handlePressEnter}
            onChange={handleEndCardTitleChange}
            onBlur={handleAddNewEndCard}
          />
        )}
      </div>

      {openAddNewEndCard && (
        <AddNewButton
          addLabel={"Add new card"}
          onAddClick={handleAddNewEndCard}
          onCloseClick={toggleAddNewEndCard}
        />
      )}
      {!openAddNewEndCard && (
        <footer>
          <div className="footer-actions" onClick={toggleAddNewEndCard}>
            <i className="icon fa fa-plus" />
            Add another card
          </div>
        </footer>
      )}
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
