'use client'
import { useEffect, useState } from 'react'

const ALL = [['home', 'Home'], ['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'], ['experience', 'Experience'],
  ['education', 'Education'], ['certs', 'Certifications'], ['achievements', 'Achievements'], ['resume', 'Resume'], ['contact', 'Contact']]
const TOP = ['home', 'about', 'projects', 'resume', 'contact']

export default function Nav() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && setOpen(false)
    addEventListener('keydown', k)
    return () => removeEventListener('keydown', k)
  }, [])
  return (
    <>
      <header>
        <a className="lg" href="#home">OM SHEWALE</a>
        <nav aria-label="Primary">
          {ALL.filter(([id]) => TOP.includes(id)).map(([id, n]) => <a key={id} href={'#' + id}>{n}</a>)}
        </nav>
        <button className="menu" id="mn" aria-expanded={open} aria-controls="ov" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
      </header>
      <div id="ov" className={open ? 'on' : ''} role="dialog" aria-label="All pages" onClick={(e) => e.target.closest('a') && setOpen(false)}>
        <ul>{ALL.map(([id, n]) => <li key={id}><a href={'#' + id}>{n}</a></li>)}</ul>
      </div>
    </>
  )
}
