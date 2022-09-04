export const selectText = ({ target }) => target.select()

export const handlePressEnter = ({ key, target }) =>
  key === "Enter" && target.blur()
