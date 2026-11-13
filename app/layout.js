import './globals.css'

const description = 'Portfolio of Om Shewale, an MCA student and full-stack developer in Mumbai building web apps, IoT systems and interfaces.'

export const metadata = {
  title: 'Om Shewale | Full-Stack Developer & UI Designer, Mumbai',
  description,
  openGraph: { title: 'Om Shewale | Portfolio', description: 'Web apps, IoT systems and interfaces by Om Shewale.' },
}
export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#000000', colorScheme: 'dark' }

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="js">
      <body>
        <noscript>
          <style>{`#ld{display:none!important}.js .rv,.js body:not(.entered) .hero>*{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  )
}
