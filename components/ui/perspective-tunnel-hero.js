import { DEMO } from '../../lib/config'

const PROJECTS = [
  {
    number: '01',
    id: 'speech-translation',
    title: 'Speech Translation App',
    kind: 'Language tools',
    status: 'Live',
    description: 'Translate spoken language in real time, then listen to or download the translated audio.',
    tags: ['Flask', 'JavaScript', 'gTTS'],
    href: 'https://github.com/Omshewale166/Speech-Translation-App',
    demo: DEMO.d1,
    visual: 'wave',
  },
  {
    number: '02',
    id: 'crashnotify',
    title: 'CrashNotify',
    kind: 'Road safety · IoT',
    status: 'In progress',
    description: 'An IoT system that detects vehicle collisions and shares the location with emergency contacts.',
    tags: ['Accelerometer', 'GPS', 'GSM'],
    href: 'https://github.com/Omshewale166/crashnotify',
    demo: DEMO.d2,
    visual: 'radar',
  },
  {
    number: '03',
    id: 'lung-cancer-analysis',
    title: 'Lung Cancer Analysis',
    kind: 'Health technology',
    status: 'In progress',
    description: 'An ongoing health-tech project focused on lung cancer research and detection.',
    tags: ['Healthcare', 'Research', 'Detection'],
    href: 'https://github.com/Omshewale166?tab=repositories',
    visual: 'lungs',
  },
]

function ProjectVisual({ type }) {
  if (type === 'wave') {
    return <div className="tunnel-wave" aria-hidden="true">{Array.from({ length: 19 }, (_, i) => <i key={i} />)}</div>
  }

  if (type === 'radar') {
    return <div className="tunnel-radar" aria-hidden="true"><i /><i /><i /></div>
  }

  return (
    <svg className="tunnel-lungs" viewBox="0 0 180 150" fill="none" aria-hidden="true">
      <path d="M88 18v38L68 74l-7 28c-3 13-16 20-28 13-12-7-17-24-12-43 5-20 18-42 31-45 11-3 18 5 19 19l17-14m4-14v38l20 18 7 28c3 13 16 20 28 13 12-7 17-24 12-43-5-20-18-42-31-45-11-3-18 5-19 19L92 46" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M90 54v72M90 70 70 87m20-17 20 17M90 88l-14 17m14-17 14 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="62" cy="92" r="3" fill="currentColor"/><circle cx="119" cy="83" r="3" fill="currentColor"/><circle cx="100" cy="111" r="2.5" fill="currentColor"/>
    </svg>
  )
}

export default function PerspectiveTunnelHero() {
  return (
    <div className="tunnel-gallery rv" role="region" aria-label="Featured projects">
      <div className="tunnel-grid">
        {PROJECTS.map((project) => (
          <article className={`card tunnel-card tunnel-${project.visual}`} id={project.id} key={project.id} data-t="1">
            <div className="tunnel-preview">
              <span className="tunnel-index">{project.number} <i> / 03</i></span>
              <ProjectVisual type={project.visual} />
              <span className="tunnel-kind">{project.kind}</span>
            </div>
            <div className="tunnel-content">
              <span className="tag">{project.status}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tunnel-tags">{project.tags.map((tag) => <span className="chip" key={tag}>{tag}</span>)}</div>
              <div className="project-links">
                {project.demo && <a className="btn" href={project.demo} target="_blank" rel="noopener noreferrer">Live demo</a>}
                <a className="btn gh" href={project.href} target="_blank" rel="noopener noreferrer">{project.number === '03' ? 'See my repositories' : 'View on GitHub'} <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
