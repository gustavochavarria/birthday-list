import ConfettiGenerator from 'confetti-js'
import React, {useRef, useEffect} from 'react'

export default function BackgroundConfetti({height, width}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const confetti = new ConfettiGenerator({
      height,
      width,
      target: canvasRef.current,
    })

    confetti.render()

    return () => confetti.clear()
  }, [height, width])

  return <canvas ref={canvasRef} width="100%" />
}
