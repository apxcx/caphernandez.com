import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NewsletterSignup from '../components/NewsletterSignup'

export default function ContactPage() {
  return <>
    <Navbar />
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-container">
          <div className="contact-hero-content">
            <div className="contact-hero-eyebrow"><span aria-hidden="true" /><h2>LET'S BUILD</h2></div>
            <h1 className="contact-hero-title">Uncap your <span>authority.</span> Become known.</h1>
            <p className="contact-hero-copy">30-minute strategy call. Zero pressure. Walk away with a clear personal branding plan whether you work with us or not.</p>
          </div>
        </div>
      </section>
      <NewsletterSignup />
    </main>
    <Footer />
  </>
}
