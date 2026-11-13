'use client'
import { useEffect, useState } from 'react'

const PROFILE = 'Omshewale166'
const MONOGRAMS = { JavaScript: 'JS', TypeScript: 'TS', Python: 'Py', Java: 'Java', 'C++': 'C+', 'C#': 'C#', HTML: 'HT', CSS: 'CS', Go: 'Go', Dart: 'Da', PHP: 'PHP', Ruby: 'Rb', Rust: 'Rs', Swift: 'Sw', Kotlin: 'Kt', Shell: 'Sh' }

export default function Skills() {
  const [languages, setLanguages] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const controller = new AbortController()

    const loadRepositories = async () => {
      const allRepos = []
      let page = 1
      while (true) {
        const response = await fetch(`https://api.github.com/users/${PROFILE}/repos?per_page=100&page=${page}&sort=updated`, {
          headers: { Accept: 'application/vnd.github+json' },
          signal: controller.signal,
        })
        if (!response.ok) throw new Error('GitHub request failed')
        allRepos.push(...await response.json())
        if (!response.headers.get('Link')?.includes('rel="next"')) return allRepos
        page += 1
      }
    }

    loadRepositories()
      .then((repos) => {
        const counts = new Map()
        repos.filter((repo) => !repo.fork && !repo.archived && repo.language)
          .forEach((repo) => counts.set(repo.language, (counts.get(repo.language) || 0) + 1))

        const result = [...counts].map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
          .slice(0, 8)
        setLanguages(result)
        setStatus(result.length ? 'ready' : 'empty')
      })
      .catch((error) => {
        if (error.name !== 'AbortError') setStatus('error')
      })

    return () => controller.abort()
  }, [])

  const maxCount = Math.max(...languages.map((language) => language.count), 1)

  if (status === 'loading') return <p className="meta" role="status">Loading languages from GitHub…</p>
  if (status !== 'ready') return (
    <p className="meta" role="status">
      {status === 'empty' ? 'No public repository languages found.' : 'GitHub languages are temporarily unavailable.'}{' '}
      <a href={`https://github.com/${PROFILE}?tab=repositories`} target="_blank" rel="noopener noreferrer">View GitHub repositories</a>
    </p>
  )

  return (
    <div className="grid rv">
      {languages.map(({ name, count }) => {
        const relativeCount = count / maxCount
        return (
          <div className="card sk" data-t="1" key={name} style={{ '--o': 163.4 * (1 - relativeCount) }}>
            <div className="ic">
              <svg viewBox="0 0 60 60"><circle className="t" cx="30" cy="30" r="26" /><circle className="v" cx="30" cy="30" r="26" /></svg>
              <b>{MONOGRAMS[name] || name.slice(0, 2)}</b>
            </div>
            <h3>{name}</h3>
            <small>{count} {count === 1 ? 'repository' : 'repositories'}</small>
          </div>
        )
      })}
    </div>
  )
}
