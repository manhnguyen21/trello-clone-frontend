import React from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import HTMLReactParser from "html-react-parser"
import { MODAL_ACTION_CLOSE, MODAL_ACTION_CONFIRM } from "utilities/constants"

const ConfirmModal = ({ title, content, show, onAction }) => {
  const handleClose = () => onAction(MODAL_ACTION_CLOSE)
  const handleConfirm = () => onAction(MODAL_ACTION_CONFIRM)

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop={"static"}
      keyboard={false}
      animation={false}
    >
      <Modal.Header closeButton>
        <Modal.Title className="h5">{HTMLReactParser(title)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{HTMLReactParser(content)}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ConfirmModal
