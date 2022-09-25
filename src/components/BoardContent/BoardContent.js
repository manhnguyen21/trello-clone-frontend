import AddColumn from "components/AddColumn/AddColumn"
import Column from "components/Column/Column"
import { isEmpty } from "lodash"
import React from "react"
import { Container, Draggable } from "react-smooth-dnd"
import { getBoardById, updateBoard } from "services/board"
import { updateCard } from "services/card"
import { updateColumn } from "services/column"
import { applyDrag, mapOrder } from "utilities/utils"
import "./BoardContent.scss"

const BoardContent = () => {
  const [board, setBoard] = React.useState()
  const [columns, setColumns] = React.useState([])

  React.useEffect(() => {
    getBoardById({ id: "6327274493d41701b4f9454f" })
      .then((response) => {
        if (!response) return

        const { columns, columnOrder } = response
        const sortedColumns = mapOrder(columns, columnOrder)
        setBoard(response)
        setColumns(sortedColumns)
      })
      .catch((error) => {
        throw new Error(error)
      })
  }, [])

  if (isEmpty(board)) {
    return <div className="not-found">board not found</div>
  }

  const onColumnDrop = (drop) => {
    const newColumns = applyDrag(columns, drop)
    const newBoard = {
      ...board,
      columns: newColumns,
      columnOrder: newColumns.map(({ _id }) => _id),
    }

    // set new state
    setColumns(newColumns)
    setBoard(newBoard)

    updateBoard(newBoard).catch(() => {
      // occurred error during updating process
      // so the columns and board must set to previous state
      setColumns(columns)
      setBoard(board)
    })
  }

  const onCardDrop = (columnId, cardDropResult) => {
    const { addedIndex, payload, removedIndex } = cardDropResult

    if (addedIndex === null && removedIndex === null) return

    if (addedIndex === removedIndex) return

    const currentColumn = columns.find(({ _id }) => _id === columnId)

    if (currentColumn === undefined) return

    const newCards = applyDrag(currentColumn.cards, cardDropResult)
    currentColumn.cards = newCards
    currentColumn.cardOrder = newCards.map(({ _id }) => _id)

    setColumns([...columns])

    updateColumn(currentColumn)

    // If a card is dropped in the current column,
    // we will need to update the columnId of that card
    if (addedIndex !== null) {
      const cardItem = { ...payload, columnId: currentColumn._id }
      // update card here
      currentColumn.cards.splice(addedIndex, 1, cardItem)
      updateCard(cardItem)
    }
  }

  const onColumnUpdateState = (columnToUpdate) => {
    if (columnToUpdate === undefined) return

    const columnIndex = columns.findIndex(
      ({ _id }) => _id === columnToUpdate._id
    )

    if (columnIndex === -1) return

    let newColumns = [...columns]

    if (columnToUpdate._destroy) {
      // destroy
      // newColumns = newColumns.filter(({ id }) => id !== columnToUpdate._id)
      newColumns.splice(columnIndex, 1)
    } else {
      // update
      // newColumns[columnIndex].title = columnToUpdate.title
      newColumns.splice(columnIndex, 1, columnToUpdate)
    }

    const newBoard = {
      ...board,
      columns: newColumns,
      columnOrder: newColumns.map(({ _id }) => _id),
    }

    setBoard(newBoard)
    setColumns(newColumns)
  }

  return (
    <div className="board-content">
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        dragHandleSelector=".column-drag-handle"
        getChildPayload={(index) => columns[index]}
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: "columns-drop-preview",
        }}
      >
        {columns?.map((column) => (
          <Draggable key={column._id || Math.random(1000)}>
            <Column
              column={column}
              onColumnUpdateState={onColumnUpdateState}
              onCardDrop={onCardDrop}
            />
          </Draggable>
        ))}
      </Container>
      <AddColumn
        board={board}
        setBoard={setBoard}
        columns={columns}
        setColumns={setColumns}
      />
    </div>
  )
}

export default BoardContent
