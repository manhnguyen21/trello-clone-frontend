import CardDetailActivities from "../CardDetailActivities/CardDetailActivities"
import CardDetailAttachments from "../CardDetailAttachments/CardDetailAttachments"
import CardDetailCheckList from "../CardDetailChecklist/CardDetailChecklist"
import CardDetailData from "../CardDetailData/CardDetailData"
import CardDetailDescription from "../CardDetailDescription/CardDetailDescription"

const CardDetailMainContent = ({ className }) => {
  return (
    <div className={`${className ?? ""}`}>
      <CardDetailData />
      <CardDetailDescription />
      <CardDetailAttachments />
      <CardDetailCheckList />
      <CardDetailActivities />
    </div>
  )
}

export default CardDetailMainContent
