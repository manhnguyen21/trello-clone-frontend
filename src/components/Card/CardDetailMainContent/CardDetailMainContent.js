import CardDetailActivities from "../CardDetailActivities/CardDetailActivities"
import CardDetailAttachments from "../CardDetailAttachments/CardDetailAttachments"
import CardDetailData from "../CardDetailData/CardDetailData"
import CardDetailDescription from "../CardDetailDescription/CardDetailDescription"

const CardDetailMainContent = ({ className }) => {
  return (
    <div className={`${className ?? ""}`}>
      <CardDetailData />
      <CardDetailDescription />
      <CardDetailAttachments />
      <CardDetailActivities />
    </div>
  )
}

export default CardDetailMainContent
