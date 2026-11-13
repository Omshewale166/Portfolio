'use client'
import { useEffect, useState } from 'react'

const lock = (on) => {
  document.body.classList.toggle('lock', on)
  document.querySelectorAll('main,header,footer,#ov').forEach((el) => { el.inert = on })
}

export default function Gate() {
  const [pct, setPct] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (location.hash) {
      setLoaded(true)
      document.body.classList.add('entered')
      return
    }

    lock(true)
    const duration = matchMedia('(prefers-reduced-motion: reduce)').matches ? 600 : 2400
    const started = performance.now()
    let frame, timer
    const tick = (now) => {
      const progress = Math.min(1, (now - started) / duration)
      setPct(Math.round(100 * (1 - (1 - progress) ** 3)))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        timer = setTimeout(() => {
          setLoaded(true)
          document.body.classList.add('entered')
          lock(false)
        }, 300)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div id="ld" className={`ld${loaded ? ' off' : ''}`} role="status" aria-label="Loading">
      <div className="ldt" aria-hidden="true">
        {['n', 'e', 'X', 'u', 's'].map((letter, index) => (
          <span key={letter} className={letter === 'X' ? 'x' : undefined} style={{ '--i': index }}>{letter}</span>
        ))}
      </div>
      <div className="ldb"><i style={{ transform: `scaleX(${pct / 100})` }} /></div>
      <small className="ldp">{pct}%</small>
    </div>
  )
}
