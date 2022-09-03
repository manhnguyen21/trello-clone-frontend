import React, { useEffect, useRef, useState } from "react"
import {
  Button,
  Col,
  Container as BootstrapContainer,
  Form,
  Row,
} from "react-bootstrap"
import "./AddColumn.scss"

const AddColumn = ({ board, setBoard, columns, setColumns }) => {
  const [openForm, setOpenForm] = useState(false)
  const [columnTitle, setColumnTitle] = useState("")
  const inputTextRef = useRef()

  const toggle = () => setOpenForm(!openForm)

  const handleChangeInputText = ({ target: { value } }) => setColumnTitle(value)

  const handleKeyDownInputText = ({ code }) => {
    if (code !== "Enter") return
    handleAddButtonClick()
  }

  const handleAddButtonClick = () => {
    const column = {
      id: Math.random().toFixed(5),
      boardId: board.id,
      title: columnTitle,
      cardOrder: [],
      cards: [],
    }
    const newColumns = [...columns, column]
    setColumns(newColumns)
    setBoard({
      ...board,
      columns: newColumns,
      columnOrder: newColumns.map(({ id }) => id),
    })
    setColumnTitle("")
    toggle()
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
        <Row>
          <BootstrapContainer className="add-new-column-container">
            <Row className="add-new-column-row border-top-left-right">
              <Col className="toggle-button" onClick={toggle}>
                <i className="icon fa fa-plus" />
                Add new column
              </Col>
            </Row>
          </BootstrapContainer>
        </Row>
      )}

      {openForm && (
        <Row>
          <BootstrapContainer className="add-new-column-container default-bg-color">
            <Row className="add-new-column-row">
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
            <Row className="add-new-column-row">
              <Col xs={6}>
                <Button
                  variant="success"
                  size="sm"
                  onClick={handleAddButtonClick}
                >
                  Add
                </Button>
              </Col>
              <Col xs={6} onClick={toggle}>
                <i className="icon fa fa-times" />
              </Col>
            </Row>
          </BootstrapContainer>
        </Row>
      )}
    </BootstrapContainer>
  )
}

export default AddColumn
