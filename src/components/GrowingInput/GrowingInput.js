import { isFunction } from "lodash"
import { useEffect, useRef, useState } from "react"
import { selectText } from "utilities/contentEditableInlineText"
import "./GrowingInput.scss"

const GrowingInput = ({ style, onChange }) => {
  const [content, setContent] = useState("BẢNG CÔNG VIỆC CỦA ĐẠT HEHE =))")
  const [width, setWidth] = useState(24)
  const input = useRef()

  useEffect(() => {
    setWidth(input.current.offsetWidth)
  }, [content])

  const inputStyle = { width: width + 10, ...style }

  const changeHandler = ({ target: { value } }) => {
    setContent(value)
    isFunction(onChange) && onChange(value)
  }

  return (
    <>
      <span className="growing-text-hidden" style={style} ref={input}>
        {content}
      </span>
      <input
        size="sm"
        type="text"
        value={content}
        style={inputStyle}
        onFocus={selectText}
        onChange={changeHandler}
        className="trello-app-editable growing-text-input"
      />
    </>
  )
}

export default GrowingInput
