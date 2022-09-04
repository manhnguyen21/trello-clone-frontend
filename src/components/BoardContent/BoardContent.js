import { initialData } from "actions/initialData"
import AddColumn from "components/AddColumn/AddColumn"
import Column from "components/Column/Column"
import { isEmpty } from "lodash"
import React from "react"
import { Container, Draggable } from "react-smooth-dnd"
import { applyDrag, mapOrder } from "utilities/utils"
import "./BoardContent.scss"

const BoardContent = () => {
  const [board, setBoard] = React.useState()
  const [columns, setColumns] = React.useState([])

  React.useEffect(() => {
    const boardFromDb = initialData.boards.find(({ id }) => id === "board-1")

    if (boardFromDb) {
      const { columns, columnOrder } = boardFromDb
      const sortedColumns = mapOrder(columns, columnOrder)
      setBoard(boardFromDb)
      setColumns(sortedColumns)
    }
  }, [])

  if (isEmpty(board)) {
    return <div className="not-found">board not found</div>
  }

  const onColumnDrop = (drop) => {
    const newColumns = applyDrag(columns, drop)
    const newBoard = {
      ...board,
      columns: newColumns,
      columnOrder: newColumns.map(({ id }) => id),
    }
    setColumns(newColumns)
    setBoard(newBoard)
  }

  const onCardDrop = (columnId, cardDropResult) => {
    const { addedIndex, removedIndex } = cardDropResult

    if (addedIndex === null && removedIndex === null) return

    const currentColumn = columns.find(({ id }) => id === columnId)

    if (currentColumn === undefined) return

    const newCards = applyDrag(currentColumn.cards, cardDropResult)
    currentColumn.cards = newCards
    currentColumn.cardOrder = newCards.map(({ id }) => id)
    setColumns([...columns])
  }

  const onColumnUpdate = (columnToUpdate) => {
    if (columnToUpdate === undefined) return

    const columnIndex = columns.findIndex(({ id }) => id === columnToUpdate.id)

    if (columnIndex === undefined) return

    let newColumns = [...columns]

    if (columnToUpdate._destroy) {
      // destroy
      // newColumns = newColumns.filter(({ id }) => id !== columnToUpdate.id)
      newColumns.splice(columnIndex, 1)
    } else {
      // update
      // newColumns[columnIndex].title = columnToUpdate.title
      newColumns.splice(columnIndex, 1, columnToUpdate)
    }

    const newBoard = {
      ...board,
      columns: newColumns,
      columnOrder: newColumns.map(({ id }) => id),
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
        {columns.map((column) => (
          <Draggable key={column.id}>
            <Column
              column={column}
              onColumnUpdate={onColumnUpdate}
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
