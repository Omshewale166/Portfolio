'use client'
import { useEffect, useRef } from 'react'
import { mouse } from '../lib/mouse'

const VERT = `varying vec3 n,v;
void main(){n=normalize(normalMatrix*normal);vec4 m=modelViewMatrix*vec4(position,1.);v=-m.xyz;gl_Position=projectionMatrix*m;}`
const FRAG = `varying vec3 n,v;uniform float t;
void main(){float f=pow(1.-abs(dot(normalize(n),normalize(v))),2.);
vec3 a=vec3(.62+f*.38);
gl_FragColor=vec4(mix(vec3(.01,.01,.01),a,clamp(.25+f*.85,0.,1.)),1.);}`

// Three.js hero object: shader knot, wireframe sphere, ring and particle cloud.
export default function Hero3D() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const RM = matchMedia('(prefers-reduced-motion:reduce)').matches
    let stop = false, cleanup = () => {}
    import('three').then((THREE) => {
      if (stop) return
      try {
        const r = new THREE.WebGLRenderer({ canvas: el, alpha: true, antialias: true })
        const s = new THREE.Scene(), c = new THREE.PerspectiveCamera(45, 1, 0.1, 50), G = new THREE.Group()
        r.setPixelRatio(Math.min(devicePixelRatio, 2)); c.position.z = 7; s.add(G)
        const U = { t: { value: 0 } }
        const K = new THREE.Mesh(new THREE.TorusKnotGeometry(1.1, 0.36, 180, 28), new THREE.ShaderMaterial({ uniforms: U, vertexShader: VERT, fragmentShader: FRAG }))
        const Wf = new THREE.Mesh(new THREE.IcosahedronGeometry(2.1, 1), new THREE.MeshBasicMaterial({ color: 0xd4d4d4, wireframe: true, transparent: true, opacity: 0.3 }))
        const T = new THREE.Mesh(new THREE.TorusGeometry(2.7, 0.015, 8, 200), new THREE.MeshBasicMaterial({ color: 0xf5f5f5 }))
        T.rotation.x = 1.25
        const a = []
        for (let i = 0; i < 500; i++) {
          const u = Math.random() * 6.283, v = Math.acos(2 * Math.random() - 1), d = 3 + Math.random() * 0.8
          a.push(d * Math.sin(v) * Math.cos(u), d * Math.sin(v) * Math.sin(u), d * Math.cos(v))
        }
        const gm = new THREE.BufferGeometry()
        gm.setAttribute('position', new THREE.Float32BufferAttribute(a, 3))
        const Pt = new THREE.Points(gm, new THREE.PointsMaterial({ color: 0x888888, size: 0.035 }))
        G.add(K, Wf, T, Pt)
        let visible = true, raf = 0
        const render = () => {
          raf = 0
          if (!visible) return
          if (!RM) {
            U.t.value += 0.016
            K.rotation.x += 0.008; K.rotation.y += 0.012; Wf.rotation.y -= 0.004; T.rotation.z += 0.01; Pt.rotation.y += 0.0015
            G.rotation.y += (mouse.px * 0.9 + scrollY * 0.002 - G.rotation.y) * 0.05
            G.rotation.x += (mouse.py * 0.5 - G.rotation.x) * 0.05
          }
          r.render(s, c)
          if (!RM) raf = requestAnimationFrame(render)
        }
        const ro = new ResizeObserver(() => {
          const w = el.clientWidth, h = el.clientHeight
          r.setSize(w, h, false); c.aspect = w / h; c.updateProjectionMatrix()
          if (RM && visible) render()
        })
        ro.observe(el)
        const io = new IntersectionObserver((entries) => {
          visible = entries[0].isIntersecting
          if (visible) render()
          else { cancelAnimationFrame(raf); raf = 0 }
        })
        io.observe(el)
        render()
        cleanup = () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); r.dispose(); [K, Wf, T, Pt].forEach((m) => { m.geometry.dispose(); m.material.dispose() }) }
      } catch { el.hidden = true }
    })
    return () => { stop = true; cleanup() }
  }, [])
  return (
    <div className="vis" aria-hidden="true">
      <i className="rg" /><i className="rg" />
      <canvas id="cv" ref={ref} />
    </div>
  )
}
