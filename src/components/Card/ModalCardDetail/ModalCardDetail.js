import { Modal } from "react-bootstrap"
import { MODAL_ACTION_CLOSE } from "utilities/constants"
import CardDetailBanner from "../CardDetailBanner/CardDetailBanner"
import CardDetailHeader from "../CardDetailHeader/CardDetailHeader"
import CardDetailMainContent from "../CardDetailMainContent/CardDetailMainContent"
import CardDetailSideBar from "../CardDetailSideBar/CardDetailSideBar"
import "./ModalCardDetail.scss"

const bannerUrl =
  "https://images.unsplash.com/photo-1486728297118-82a07bc48a28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80"

const ModalCardDetail = ({ show, onAction }) => {
  const handleClose = () => onAction(MODAL_ACTION_CLOSE)

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop={"static"}
      keyboard={false}
      animation={false}
      dialogClassName="modal-card-detail"
    >
      <CardDetailBanner bannerUrl={bannerUrl} onClose={handleClose} />
      <CardDetailHeader />
      <Modal.Body className="modal-card-detail__body">
        <CardDetailMainContent />
        <CardDetailSideBar />
      </Modal.Body>
    </Modal>
  )
}

export default ModalCardDetail
