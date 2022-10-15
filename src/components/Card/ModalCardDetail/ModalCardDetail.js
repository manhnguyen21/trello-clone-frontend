import { Modal } from "react-bootstrap"
import { MODAL_ACTION_CLOSE } from "utilities/constants"
import CardDetailBanner from "../CardDetailBanner/CardDetailBanner"
import CardDetailHeader from "../CardDetailHeader/CardDetailHeader"
import CardDetailMainContent from "../CardDetailMainContent/CardDetailMainContent"
import CardDetailSideBar from "../CardDetailSideBar/CardDetailSideBar"

const ModalCardDetail = ({ show, onAction }) => {
  const handleClose = () => onAction(MODAL_ACTION_CLOSE)

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop={"static"}
      keyboard={false}
      animation={false}
      className="modal-card-detail"
    >
      <CardDetailBanner className="modal-card-detail__banner" />
      <CardDetailHeader className="modal-card-detail__header" />
      <Modal.Body className="modal-card-detail__body">
        <CardDetailMainContent className="modal-card-detail__main-content" />
        <CardDetailSideBar className="modal-card-detail__sidebar" />
      </Modal.Body>
    </Modal>
  )
}

export default ModalCardDetail
