import { useColor } from "color-thief-react"
import TrelloButton from "components/TrelloButton/TrelloButton"
import { IoCloseOutline } from "react-icons/io5"
import { MdOutlinePictureInPicture } from "react-icons/md"
import "./CardDetailBanner.scss"

const CardDetailBanner = ({ className, bannerUrl, onClose }) => {
  const {
    data: backgroundColor,
    loading,
    error,
  } = useColor(bannerUrl, "rgbString", {
    crossOrigin: true,
  })

  if (error) return "error..."

  if (loading) {
    return <div className={`${className} skeleton-animation`} />
  }

  const bannerStyle = { backgroundColor, backgroundImage: `url(${bannerUrl})` }

  return (
    <div className={`card-detail-banner ${className}`} style={bannerStyle}>
      <TrelloButton className="card-detail-banner__close-btn" onClick={onClose}>
        <IoCloseOutline />
      </TrelloButton>
      <div className="card-detail-banner__cover-menu">
        <TrelloButton>
          <MdOutlinePictureInPicture />
          Cover
        </TrelloButton>
      </div>
    </div>
  )
}

export default CardDetailBanner
