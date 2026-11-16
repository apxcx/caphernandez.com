import { Link } from 'react-router-dom'
import { navItems } from '../data/content'
import Reveal from './Reveal'

export function FinalCta() {
  return <section className="final-cta" id="Email"><div className="rail final-grid"><Reveal><h2 className="display final-title">Uncap your authority.<br />Become known.</h2></Reveal><Reveal className="final-copy" delay={.08}><p>30-minute strategy call. Zero pressure. Walk away with a clear personal branding plan whether you work with us or not.</p><Link className="lime-button" to="/contact">Book your free strategy call <span aria-hidden="true">↗</span></Link></Reveal></div></section>
}

export default function Footer() {
  return <footer className="footer"><div className="rail"><div className="footer-top"><div><Link className="footer-logo" to="/"><img src="/assets/logo-wordmark.png" alt="Cap Hernandez" /></Link></div><div><h3 className="footer-heading">Speaking</h3><div className="footer-links"><Link to="/speaking">Speaking topics</Link><Link to="/speaking">Path one</Link><Link to="/workshops">Path two</Link><Link to="/books">Path three</Link></div></div><div><h3 className="footer-heading">Learn more</h3><div className="footer-links">{navItems.slice(0, 4).map((item) => <Link to={item.to} key={item.to}>{item.label}</Link>)}<Link to="/contact">Contact</Link></div></div><div><h3 className="footer-heading">Follow along</h3><div className="socials"><a href="https://www.facebook.com/" aria-label="Facebook">f</a><a href="https://twitter.com/" aria-label="Twitter">t</a><a href="https://www.instagram.com/" aria-label="Instagram">ig</a><a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a><a href="https://www.youtube.com/" aria-label="YouTube">yt</a></div></div></div><div className="footer-bottom"><span>Cap Hernandez Inc. © 2026</span><span>Terms &amp; condition · Disclaimer · Privacy Policy · Website Design by APX</span></div></div></footer>
}
