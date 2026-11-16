import { useState } from 'react'
import Reveal from './Reveal'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const submit = (event) => { event.preventDefault(); if (email.trim() && /\S+@\S+\.\S+/.test(email)) setSubmitted(true) }
  return <section className="newsletter" id="newsletter"><div className="rail newsletter-grid"><Reveal><div className="eyebrow" style={{ color: '#6c8f00' }}>Sign up here</div><h2 className="display newsletter-title">Get the <em>top 5 secrets</em> to make every conversation count.</h2></Reveal><Reveal delay={.08}><p className="newsletter-copy">Plus get access to our weekly newsletter on human connection, storytelling, and creating your own magnetic presence.</p>{submitted ? <div className="newsletter-success" role="status">You’re on the list. Check your inbox for the next conversation.</div> : <form className="newsletter-form" onSubmit={submit}><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" placeholder="Email Address" value={email} onChange={(event) => setEmail(event.target.value)} required /><button className="lime-button" type="submit">Sign up <span aria-hidden="true">↗</span></button></form>}<div className="newsletter-privacy">Don’t worry, we respect your privacy.</div></Reveal></div></section>
}
