import "./GrowingTextArea.scss"

import { isFunction } from "lodash"
import { useEffect, useRef, useState } from "react"

const GrowingTextArea = ({
  // children,
  value,
  onChange,
  className,
  style,
  rows = 1,
  ...props
}) => {
  const textareaRef = useRef(null)
  const heightAtFirstMount = useRef(0)

  const [content, setContent] = useState(value)

  useEffect(() => {
    if (!textareaRef.current) return
    heightAtFirstMount.current = textareaRef.current.scrollHeight
  }, [])

  useEffect(() => {
    if (!content || content === "") {
      textareaRef.current.style.height = heightAtFirstMount.current + "px"
    } else {
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px"
    }
  }, [content])

  const changeHandler = ({ target: { value } }) => {
    setContent(value)
    isFunction(onChange) && onChange(value.replace(/\n/g, "<br />"))
  }

  return (
    <textarea
      ref={textareaRef}
      className={`trello-app-editable growing-textarea-input ${className}`}
      style={style}
      rows={rows}
      {...props}
      value={content}
      onChange={changeHandler}
    />
  )
}
export default GrowingTextArea
