import CardDetailActivities from "../CardDetailActivities/CardDetailActivities"
import CardDetailAttachments from "../CardDetailAttachments/CardDetailAttachments"
import CardDetailData from "../CardDetailData/CardDetailData"
import CardDetailDescription from "../CardDetailDescription/CardDetailDescription"

const CardDetailMainContent = ({ className }) => {
  return (
    <div className={`card-detail-main-content ${className} `}>
      <CardDetailData className="card-detail-main-content__detail-data" />
      <CardDetailDescription className="card-detail-main-content__description" />
      <CardDetailAttachments className="card-detail-main-content__attachments" />
      <CardDetailActivities className="card-detail-main-content__activities" />
    </div>
  )
}

export default CardDetailMainContent
