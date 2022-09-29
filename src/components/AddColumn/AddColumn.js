import AddNewButton from "components/AddNewButton/AddNewButton"
import { useEffect, useRef, useState } from "react"
import {
  Col,
  Container as BootstrapContainer,
  Form,
  Row,
} from "react-bootstrap"
import { FiPlus } from "react-icons/fi"
import { createNewColumn } from "services/column"
import "./AddColumn.scss"

const AddColumn = ({ board, setBoard, columns, setColumns }) => {
  const inputTextRef = useRef()

  const [openForm, setOpenForm] = useState(false)
  const [columnTitle, setColumnTitle] = useState("")

  const toggle = () => setOpenForm(!openForm)
  const handleChangeInputText = ({ target: { value } }) => setColumnTitle(value)

  const handleKeyDownInputText = ({ code }) => {
    if (code !== "Enter") return
    handleAddButtonClick()
  }

  const handleAddButtonClick = () => {
    const column = {
      boardId: board._id,
      title: columnTitle,
    }

    createNewColumn(column).then((newColumn) => {
      const newColumns = [...columns, newColumn]
      setColumns(newColumns)
      setBoard({
        ...board,
        columns: newColumns,
        columnOrder: newColumns.map(({ id }) => id),
      })
      setColumnTitle("")
      toggle()
    })
  }

  useEffect(() => {
    if (inputTextRef.current && inputTextRef.current !== null) {
      inputTextRef.current.focus()
      inputTextRef.current.select()
    }
  }, [openForm])

  return (
    <BootstrapContainer className="trello-bootstrap-container">
      {!openForm && (
        <div
          className="add-new-column-container default-bg-color"
          onClick={toggle}
        >
          <div className={"add-another-list"}>
            <span>
              <FiPlus />
            </span>
            Add another list
          </div>
        </div>
      )}

      {openForm && (
        <Row>
          <BootstrapContainer className="add-new-column-container default-bg-color">
            <Row className="trello-bootstrap-row">
              <Col className="input-text">
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Enter column name..."
                  ref={inputTextRef}
                  value={columnTitle}
                  onChange={handleChangeInputText}
                  onKeyDown={handleKeyDownInputText}
                />
              </Col>
            </Row>
            <div className="add-list">
              <AddNewButton
                addLabel={"Add list"}
                onAddClick={handleAddButtonClick}
                onCloseClick={toggle}
              />
            </div>
          </BootstrapContainer>
        </Row>
      )}
    </BootstrapContainer>
  )
}

export default AddColumn
