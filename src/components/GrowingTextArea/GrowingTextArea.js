import "./GrowingTextArea.scss"

import { useEffect, useRef, useState } from "react"

const GrowingTextArea = ({ className, style, ...props }) => {
  const textareaRef = useRef(null)
  const [content, setContent] = useState("Design & Research")

  useEffect(() => {
    textareaRef.current.style.height = "0px"
    const scrollHeight = textareaRef.current.scrollHeight
    textareaRef.current.style.height = scrollHeight + "px"
  }, [content])

  const changeHandler = (e) => {
    setContent(e.target.value)
  }

  return (
    <textarea
      ref={textareaRef}
      className={`trello-app-editable growing-textarea-input ${className}`}
      style={style}
      {...props}
      value={content}
      onChange={changeHandler}
    />
  )
}
export default GrowingTextArea
