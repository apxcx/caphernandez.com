import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { navItems } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])
  useEffect(() => {
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const isActive = (to) => location.pathname === to || (to === '/about' && location.hash === '#About')
  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="rail nav-inner">
          <Link className="nav-logo" to="/" aria-label="Cap Hernandez home">
            <img src="/assets/logo-wordmark.png" alt="Cap Hernandez" />
          </Link>
          <nav className="nav-links" aria-label="Primary navigation">
            {navItems.map((item) => <Link key={item.to} className={`nav-link ${isActive(item.to) ? 'active' : ''}`} to={item.to}>{item.label}</Link>)}
            <Link className="lime-button nav-cta" to="/contact">Contact</Link>
          </nav>
          <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>
      <nav className={`mobile-drawer ${open ? 'open' : ''}`} aria-label="Mobile navigation">
        {navItems.map((item) => <Link key={item.to} className="nav-link" to={item.to}>{item.label}</Link>)}
        <Link className="lime-button" to="/contact">Contact</Link>
      </nav>
    </>
  )
}
