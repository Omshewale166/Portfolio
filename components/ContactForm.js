'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState('')
  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const subject = encodeURIComponent('Portfolio message from ' + f.get('nm'))
    const body = encodeURIComponent(`${f.get('ms')}\n\n${f.get('nm')}\n${f.get('em')}`)
    location.href = `mailto:omshewale28@gmail.com?subject=${subject}&body=${body}`
    setStatus('Opening your email app. If nothing opens, write to omshewale28@gmail.com.')
  }
  return (
    <form id="f" className="rv" onSubmit={submit}>
      <div className="fld"><input id="nm" name="nm" placeholder=" " required autoComplete="name" /><label htmlFor="nm">Name</label></div>
      <div className="fld"><input id="em" name="em" type="email" placeholder=" " required autoComplete="email" /><label htmlFor="em">Email address</label></div>
      <div className="fld"><textarea id="ms" name="ms" rows={4} placeholder=" " required /><label htmlFor="ms">Your message</label></div>
      <button className="btn mag" type="submit" style={{ border: 0, font: 'inherit', fontWeight: 700, cursor: 'pointer' }}>Send message</button>
      <p className="meta" id="st" role="status">{status}</p>
    </form>
  )
}
