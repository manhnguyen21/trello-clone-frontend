import TrelloButton from "components/TrelloButton/TrelloButton"
import { Col, Row } from "react-bootstrap"
import "./BoardBar.scss"

const BoardBar = () => {
  return (
    <nav className="navbar-board">
      <Row className="trello-bootstrap-row justify-content-between">
        <Col xs={6}>
          <Row className="justify-content-start">
            <Col className="btn-item">
              <TrelloButton>Board</TrelloButton>
            </Col>
            <Col className="btn-item">
              <TrelloButton>ThanhDat-Workspace</TrelloButton>
            </Col>
            <Col className="btn-item">
              <TrelloButton>Start</TrelloButton>
            </Col>
            <Col className="btn-item">
              <TrelloButton>trello Workspace</TrelloButton>
            </Col>
            <Col className="btn-item">
              <TrelloButton>Workspace visible</TrelloButton>
            </Col>
            <Col className="btn-item">
              <TrelloButton>User Avatar</TrelloButton>
            </Col>
            <Col className="btn-item">
              <TrelloButton>Share</TrelloButton>
            </Col>
          </Row>
        </Col>
        <Col xs={4}>
          <Row className="justify-content-end">
            <Col className="btn-item">
              <TrelloButton>Poser-Ups</TrelloButton>
            </Col>
            <Col className="btn-item">
              <TrelloButton>Automation</TrelloButton>
            </Col>
            <Col className="btn-item">
              <TrelloButton>Filter</TrelloButton>
            </Col>
            <Col className="btn-item">
              <TrelloButton>Show Menu</TrelloButton>
            </Col>
          </Row>
        </Col>
      </Row>
    </nav>
  )
}

export default BoardBar
