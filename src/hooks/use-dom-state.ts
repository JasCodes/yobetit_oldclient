import { useState, useEffect } from 'react'

const getDOM = () => ({ readyState: document.readyState })

export const useDOMState = () => {
  const [readyState, setReadyState] = useState(getDOM())

  const handleDOM = () => {
    // document.readyState is a read-only property AFAICT.
    // Therefore, `setReadyState` has no effect on
    // `document.readyState`
    setReadyState(getDOM())
  }

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', handleDOM)
    return () => {
      document.removeEventListener('DOMContentLoaded', handleDOM)
    }
  }, [])

  return readyState
}
