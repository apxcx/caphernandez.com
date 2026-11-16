import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const submit = (event) => {
    event.preventDefault()
    const value = email.trim()
    if (!value || !/^\S+@\S+\.\S+$/.test(value)) {
      setError('Something went wrong.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return <section className="newsletter" id="Email">
    <div className="newsletter-overlay" aria-hidden="true" />
    <div className="newsletter-section-container">
      <div className="newsletter-columns">
        <div className="newsletter-empty-column" aria-hidden="true" />
        <div className="newsletter-content-column">
          <div className="newsletter-eyebrow">
            <span aria-hidden="true" />
            <h2>SIGN UP HERE</h2>
          </div>
          <p className="newsletter-headline">GET THE TOP 5 SECRETS TO MAKE EVERY CONVERSATION COUNT</p>
          <p className="newsletter-copy">Plus get access to our weekly newsletter on human connection, storytelling, and creating your own magnetic presence.</p>
          {submitted ? <div className="newsletter-success" role="status">The form was submitted successfully.</div> : <form id="contact-form372" className="newsletter-form" onSubmit={submit}>
            <div className="newsletter-field">
              <label className="sr-only" htmlFor="email">Email Address</label>
              <input id="email" name="fields[email]" type="email" placeholder="Email Address" value={email} onChange={(event) => { setEmail(event.target.value); setError('') }} required aria-invalid={Boolean(error)} />
            </div>
            <button className="newsletter-submit" type="submit">SIGN UP</button>
          </form>}
          {error && !submitted ? <div className="newsletter-error" role="alert">{error}</div> : null}
          <div className="newsletter-privacy">Don't worry, we respect your privacy.</div>
        </div>
      </div>
    </div>
  </section>
}
