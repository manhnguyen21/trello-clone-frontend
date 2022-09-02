import React from "react"
import {
  Col,
  Container as BootstrapContainer,
  Row,
  Form,
  Button,
} from "react-bootstrap"
import "./AddColumn.scss"

const AddColumn = () => {
  return (
    <BootstrapContainer className="trello-bootstrap-container">
      <Row>
        <BootstrapContainer className="add-new-column-container">
          <Row className="add-new-column-row border-top-left-right">
            <Col className="toggle-button">
              <i className="icon fa fa-plus" />
              Add new column
            </Col>
          </Row>
        </BootstrapContainer>
      </Row>
      <Row>
        <BootstrapContainer className="add-new-column-container default-bg-color">
          <Row className="add-new-column-row">
            <Col className="input-text">
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter column name..."
              />
            </Col>
          </Row>
          <Row className="add-new-column-row">
            <Col xs={6}>
              <Button variant="success" size="sm">
                Add
              </Button>
            </Col>
            <Col xs={6}>
              <i className="icon fa fa-times" />
            </Col>
          </Row>
        </BootstrapContainer>
      </Row>
    </BootstrapContainer>
  )
}

export default AddColumn
