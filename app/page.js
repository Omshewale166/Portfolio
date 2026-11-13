import Gate from '../components/Gate'
import Nav from '../components/Nav'
import Hero3D from '../components/Hero3D'
import Skills from '../components/Skills'
import ContactForm from '../components/ContactForm'
import Interactions from '../components/Interactions'
import PerspectiveTunnelHero from '../components/ui/perspective-tunnel-hero'
import { Hero } from '../components/ui/hero-1'
import { LINKEDIN } from '../lib/config'

const ld = {
  '@context': 'https://schema.org', '@type': 'Person', name: 'Om Shewale', jobTitle: 'Full-Stack Developer',
  address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressCountry: 'IN' },
  knowsAbout: ['JavaScript', 'TypeScript', 'Node.js', 'Python', 'MongoDB', 'SQL'],
  sameAs: ['https://github.com/Omshewale166'],
}

function SocialLinks() {
  return (
    <div className="social-links">
      <a className="so" href="https://github.com/Omshewale166" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><svg><use href="#gh" /></svg></a>
      <a className="so" href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg><use href="#li" /></svg></a>
      <a className="so" href="mailto:omshewale28@gmail.com" aria-label="Email"><svg><use href="#ml" /></svg></a>
    </div>
  )
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <svg width="0" height="0" style={{position:'absolute'}} aria-hidden="true"><defs><symbol id="gh" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></symbol><symbol id="li" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></symbol><symbol id="ml" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 6l-10 7L2 6"/></symbol></defs></svg>
      <div className="mesh" aria-hidden="true"><i /><i /><i /><i /></div>
      <div id="bar" /><div id="ct" />
      <Gate />
      <Nav />
      <main>
<section className="hero" id="home">
<Hero eyebrow="Portfolio / Mumbai, India" title={<>Om <span className="gt">Shewale</span></>} subtitle="Full-stack developer and UI designer" lead="I'm an MCA student in Mumbai. I build web apps, IoT systems, and interfaces that feel fast and clear." ctaLabel="Explore projects" ctaHref="#projects" secondaryLabel="Get in touch" secondaryHref="#contact" note="Open to internships and collaborations"><SocialLinks /></Hero>
<Hero3D />
<div className="cue">Scroll</div>
</section>
<div className="wv" aria-hidden="true"></div>

<section id="about" style={{'--s':'var(--c)'}}>
<h2 className="rv">About <em>me</em></h2>
<div className="two rv">
<p>I'm doing my MCA at TIMSCDR, University of Mumbai, after finishing a bachelor's degree there in 2025. I like building things end to end: a Flask app that translates speech in real time, and an IoT system that alerts emergency services after a crash. Design pulls me just as much, so I work with Photoshop, Blender and Framer and have done workshops in UI/UX and Unity VR. Away from the keyboard I teach at an NGO, help run college tech events and play e-sports.</p>
<div className="grid" style={{gridTemplateColumns:'1fr 1fr'}}>
<div className="card"><div className="num" data-n="2">2</div><small>Projects built</small></div>
<div className="card"><div className="num" data-n="7.85" data-d="2">7.85</div><small>Current MCA SGPI</small></div>
<div className="card"><div className="num" data-n="3">3</div><small>Languages spoken</small></div>
<div className="card"><div className="num" data-n="4">4</div><small>Activities beyond class</small></div>
</div></div>
<div className="ms rv"><div><b>2020</b><small>Finished SSC</small></div><div><b>2022</b><small>Finished HSC, Science</small></div><div><b>2025</b><small>Bachelor's degree</small></div><div><b>Now</b><small>MCA and CrashNotify</small></div></div>
</section>

<section id="skills" style={{'--s':'var(--e)'}}>
<h2 className="rv">My <em>skills</em></h2>
<p className="meta">Languages detected in my public GitHub repositories.</p>
<Skills />
</section>

<section id="projects" style={{'--s':'var(--p)'}}>
<h2 className="rv">Selected <em>projects</em></h2>
<PerspectiveTunnelHero />
</section>

<section id="experience" style={{'--s':'var(--k)'}}>
<h2 className="rv">Experience</h2>
<div className="tl rv">
<div><h3>Organizing committee member, Vista</h3><p className="meta">Inter-collegiate technical festival.</p></div>
<div><h3>Teacher, NGO</h3><p className="meta">Supported co-curricular and extra-curricular activities and mentored students in their overall development.</p></div>
<div><h3>E-sports player and manager</h3><p className="meta">Competed in gaming tournaments while managing team coordination, strategy planning and event participation.</p></div>
<div><h3>Active member, DLLE</h3><p className="meta">Ongoing college involvement.</p></div>
</div>
</section>

<section id="education" style={{'--s':'var(--b)'}}>
<h2 className="rv"><em>Education</em></h2>
<div className="grid rv" style={{gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))'}}>
<div className="card"><span className="yr">2025</span><h3>MCA</h3><p className="meta">Thakur Institute of Management Studies Career Development & Research, University of Mumbai. Pursuing, 7.85 SGPI.</p></div>
<div className="card"><span className="yr">2025</span><h3>Bachelor's degree</h3><p className="meta">Chikitsak Samuha's Sir Sitaram and Lady Shantabai Patkar College & V. P. Varde College of Commerce and Economics, University of Mumbai. 7.1 CGPA.</p></div>
<div className="card"><span className="yr">2022</span><h3>HSC, Science</h3><p className="meta">Gokhale Education Society's Shri Bhausaheb Vartak Arts, Commerce & Science College. 62.33%.</p></div>
<div className="card"><span className="yr">2020</span><h3>SSC</h3><p className="meta">Mother Teresa English Primary and Secondary School. 71%.</p></div>
</div>
</section>

<section id="certs" style={{'--s':'var(--c)'}}>
<h2 className="rv">Certifi<em>cations</em></h2>
<div className="grid rv">
<div className="card"><div className="cb"><i className="rg"></i>UX</div><h3>UI / UX Design 2025</h3><small>Workshop</small></div>
<div className="card" style={{'--s':'var(--p)'}}><div className="cb"><i className="rg"></i>VR</div><h3>Unity VR Game Designer</h3><small>Workshop</small></div>
</div>
</section>

<section id="achievements" style={{'--s':'var(--e)'}}>
<h2 className="rv"><em>Achievements</em></h2>
<div className="grid rv">
<div className="card"><div className="ck">✓</div><h3>Shipped a live app</h3><p className="meta">Speech Translation App handles live speech, translation and audio download.</p></div>
<div className="card"><div className="ck">✓</div><h3>Building for road safety</h3><p className="meta">CrashNotify detects collisions and alerts emergency contacts.</p></div>
<div className="card"><div className="ck">✓</div><h3>Helped run Vista</h3><p className="meta">Organizing committee member for an inter-collegiate technical festival.</p></div>
<div className="card"><div className="ck">✓</div><h3>Managed an e-sports team</h3><p className="meta">Player and manager in competitive tournaments.</p></div>
</div>
</section>

<section id="resume" style={{'--s':'var(--p)'}}>
<h2 className="rv">Resume <em>snapshot</em></h2>
<div className="card two rv">
<div><p><b>Education</b><br /><span className="meta">MCA at TIMSCDR (pursuing), bachelor's degree 2025, University of Mumbai</span></p><br /><p><b>Core stack</b><br /><span className="meta">JavaScript, TypeScript, Node.js, Express.js, Python, MongoDB, SQL</span></p><br /><p><b>Projects</b><br /><span className="meta">Speech Translation App, CrashNotify</span></p></div>
<div><p>Want the full resume as a PDF? Send me a note and I'll reply with it.</p><a className="btn mag" href="mailto:omshewale28@gmail.com?subject=Resume%20request">Request resume</a></div>
</div>
</section>

<section id="contact" style={{'--s':'var(--k)'}}>
<div className="two">
<div className="rv"><h2>Let's build <em>something</em> bold</h2><p className="meta">Open to projects, internships and collaborations. Based in Mumbai, India.<br />omshewale28@gmail.com</p>
<SocialLinks /></div>
<ContactForm />
</div>
</section>
</main>
      <footer>© 2026 Om Shewale. Designed and built in Mumbai.<br />Built with WebGL shaders, the View Transitions API and scroll-driven CSS animations.</footer>
      <Interactions />
    </>
  )
}
