import "./Avatar.scss"

const Avatar = ({ className, src }) => (
  <img key={src} className={`avatar ${className || ""}`} src={src} />
)

export default Avatar
