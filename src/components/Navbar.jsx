import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'ABOUT', href: '#About' },
  { label: 'SPEAKING', href: '#Speaking' },
  { label: 'BOOK', href: '#Book' },
  { label: 'COACHING', href: '#Email' },
  { label: 'BLOG', href: '#Blog' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  const close = () => setOpen(false)
  return <>
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="rail nav-inner">
        <a className="nav-logo" href="#top" aria-label="Cap Hernandez home"><img src="/assets/logo-wordmark.png" alt="Cap Hernandez" /></a>
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => <a key={item.href} className="nav-link" href={item.href}>{item.label}</a>)}
          <a className="lime-button nav-cta" href="#Email">Contact</a>
        </nav>
        <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((value) => !value)}>{open ? <X size={18} /> : <Menu size={18} />}</button>
      </div>
    </header>
    <nav className={`mobile-drawer ${open ? 'open' : ''}`} aria-label="Mobile navigation">
      {navItems.map((item) => <a key={item.href} className="nav-link" href={item.href} onClick={close}>{item.label}</a>)}
      <a className="lime-button" href="#Email" onClick={close}>Contact</a>
    </nav>
  </>
}
