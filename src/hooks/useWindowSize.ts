import { useState, useEffect } from 'react'

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: globalThis?.window?.innerWidth || 0,
    height: globalThis?.window?.innerHeight || 0
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: globalThis.window.innerWidth,
        height: globalThis.window.innerHeight
      })
    }

    globalThis.window.addEventListener('resize', handleResize)
    return () => globalThis.window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}
