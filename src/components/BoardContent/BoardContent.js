import { initialData } from "actions/initialData"
import Column from "components/Column/Column"
import { isEmpty } from "lodash"
import React from "react"
import { Container, Draggable } from "react-smooth-dnd"
import { mapOrder } from "utilities/sort"
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
    console.log(drop)
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
            <Column column={column} />
          </Draggable>
        ))}
      </Container>
    </div>
  )
}

export default BoardContent
