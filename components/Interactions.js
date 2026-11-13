'use client'
import { useEffect } from 'react'
import { mouse } from '../lib/mouse'

// Page-wide enhancements: reveals, counters, scroll bar, card tilt, magnetic buttons,
// custom cursor, and the section-to-section page transition.
export default function Interactions() {
  useEffect(() => {
    const d = document, $ = (s) => d.querySelector(s), $$ = (s) => [...d.querySelectorAll(s)], R = d.documentElement
    const RM = matchMedia('(prefers-reduced-motion:reduce)').matches
    const undo = []
    const on = (t, e, f, o) => { t.addEventListener(e, f, o); undo.push(() => t.removeEventListener(e, f, o)) }

    const io = new IntersectionObserver((es) => es.forEach((x) => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target) } }), { threshold: 0.1 })
    $$('.rv').forEach((e) => io.observe(e))
    const co = new IntersectionObserver((es) => es.forEach((x) => {
      if (!x.isIntersecting) return
      co.unobserve(x.target)
      const el = x.target, n = +el.dataset.n, dc = +(el.dataset.d || 0), t0 = performance.now()
      const f = (t) => { const p = Math.min(1, (t - t0) / 1400); el.textContent = (n * (1 - Math.pow(1 - p, 3))).toFixed(dc); if (p < 1) requestAnimationFrame(f) }
      f(t0)
    }), { threshold: 0.6 })
    if (!RM) $$('.num').forEach((n) => co.observe(n))
    undo.push(() => { io.disconnect(); co.disconnect() })

    const bar = $('#bar')
    on(window, 'scroll', () => {
      bar.style.transform = `scaleX(${Math.min(1, scrollY / (d.body.scrollHeight - innerHeight))})`
      R.style.setProperty('--sy', scrollY)
    }, { passive: true })

    $$('.card').forEach((c) => {
      on(c, 'mousemove', (e) => {
        const r = c.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top
        c.style.setProperty('--mx', x + 'px'); c.style.setProperty('--my', y + 'px')
        if (c.dataset.t && !RM) c.style.transform = `perspective(800px) rotateX(${(0.5 - y / r.height) * 9}deg) rotateY(${(x / r.width - 0.5) * 9}deg) translateY(-4px)`
      })
      on(c, 'mouseleave', () => { c.style.transform = '' })
    })
    $$('.mag').forEach((b) => {
      on(b, 'mousemove', (e) => { if (RM) return; const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px,${(e.clientY - r.top - r.height / 2) * 0.35}px)` })
      on(b, 'mouseleave', () => { b.style.transform = '' })
    })

    let cur, ring, gl, raf, rx = 0, ry = 0
    if (matchMedia('(pointer:fine)').matches && !RM) {
      d.body.classList.add('cc')
      cur = d.createElement('div'); ring = d.createElement('div'); gl = d.createElement('div')
      cur.className = 'cur'; ring.className = 'ring'; gl.className = 'mg'
      d.body.append(gl, cur, ring)
      const f = () => { rx += (mouse.x - rx) * 0.15; ry += (mouse.y - ry) * 0.15; ring.style.transform = `translate(${rx}px,${ry}px)`; raf = requestAnimationFrame(f) }
      f()
      on(d, 'mouseover', (e) => ring.classList.toggle('big', !!e.target.closest('a,button,.card')))
      undo.push(() => { cancelAnimationFrame(raf); d.body.classList.remove('cc'); cur.remove(); ring.remove(); gl.remove() })
    }
    const hero = $('.hero')
    on(window, 'mousemove', (e) => {
      mouse.x = e.clientX; mouse.y = e.clientY
      mouse.px = mouse.x / innerWidth - 0.5; mouse.py = mouse.y / innerHeight - 0.5
      if (hero) { hero.style.setProperty('--px', mouse.px); hero.style.setProperty('--py', mouse.py) }
      if (cur) { cur.style.transform = `translate(${mouse.x}px,${mouse.y}px)`; gl.style.transform = `translate(${mouse.x}px,${mouse.y}px)` }
    })

    const ct = $('#ct')
    on(d, 'click', (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const h = a.getAttribute('href'), t = h.length > 1 && d.querySelector(h)
      if (!t) return
      e.preventDefault()
      const go = () => { scrollTo({ top: t.getBoundingClientRect().top + scrollY - 60, behavior: 'instant' }); history.replaceState(null, '', h) }
      if (RM) return go()
      if (d.startViewTransition) {
        const x = e.clientX || innerWidth / 2, y = e.clientY || innerHeight / 2
        const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
        d.startViewTransition(go).ready.then(() => R.animate(
          { clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
          { duration: 800, easing: 'cubic-bezier(.7,0,.2,1)', pseudoElement: '::view-transition-new(root)' }))
        return
      }
      ct.style.transformOrigin = 'bottom'; ct.style.transform = 'scaleY(1)'
      setTimeout(() => { go(); ct.style.transformOrigin = 'top'; ct.style.transform = 'scaleY(0)' }, 520)
    })
    return () => undo.forEach((f) => f())
  }, [])
  return null
}
