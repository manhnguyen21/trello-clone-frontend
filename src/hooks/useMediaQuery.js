const { useState, useEffect } = require("react")

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const matchQueryList = window.matchMedia(query)

    const handleChange = (e) => setMatches(e.matches)

    if (matchQueryList.matches !== matches) {
      handleChange(matchQueryList)
    }

    matchQueryList.addListener(handleChange)

    return () => {
      matchQueryList.removeListener(handleChange)
    }
  }, [matches, query])

  return matches
}

export default useMediaQuery
