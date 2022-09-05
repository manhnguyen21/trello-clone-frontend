import { Button, Col, Row } from "react-bootstrap"
import "./AddNewButton.scss"

const AddNewButton = ({ addLabel, onAddClick, onCloseClick }) => {
  return (
    <Row className="trello-bootstrap-row">
      <Col>
        <Button variant="success" size="sm" onClick={onAddClick}>
          {addLabel}
        </Button>
      </Col>
      <Col xs={3} onClick={onCloseClick}>
        <i className="icon fa fa-times" />
      </Col>
    </Row>
  )
}

export default AddNewButton
