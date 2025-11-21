'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="navigation">
      <div className="container">
        <h1>Проекты NextJS</h1>
        <div className="nav-buttons">
          <Link
            href="/"
            className={`nav-button ${pathname === '/' ? 'active' : ''}`}
          >
            Витрина магазина
          </Link>
          <Link
            href="/countries"
            className={`nav-button ${pathname.includes('/countries') ? 'active' : ''}`}
          >
            Страны и города
          </Link>
        </div>
      </div>
    </nav>
  )
}