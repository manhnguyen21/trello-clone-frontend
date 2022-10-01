import { isFunction } from "lodash"
import { useEffect, useRef, useState } from "react"
import { Form } from "react-bootstrap"
import "./GrowingInput.scss"

const GrowingInput = ({ style, onChange }) => {
  const [content, setContent] = useState("")
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
      <Form.Control
        size="sm"
        type="text"
        className="trello-app-editable"
        style={inputStyle}
        autoFocus
        onChange={changeHandler}
      />
    </>
  )
}

export default GrowingInput
