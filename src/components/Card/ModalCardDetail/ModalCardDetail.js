import { Modal } from "react-bootstrap"
import { MODAL_ACTION_CLOSE } from "utilities/constants"
import CardDetailBanner from "../CardDetailBanner/CardDetailBanner"
import CardDetailHeader from "../CardDetailHeader/CardDetailHeader"
import CardDetailMainContent from "../CardDetailMainContent/CardDetailMainContent"
import CardDetailSideBar from "../CardDetailSideBar/CardDetailSideBar"
import "./ModalCardDetail.scss"

const bannerUrl =
  "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

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
