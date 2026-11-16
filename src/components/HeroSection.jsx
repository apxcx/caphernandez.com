import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="hero" id="top">
      <img className="hero-art" src="/assets/live/cap-new-bg.png" alt="Cap Hernandez speaking on stage" />
      <div className="rail hero-grid">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .12 }}>
          <div className="hero-kicker">Now accepting founders, executives &amp; experts</div>
          <h1 className="display hero-title"><em className="hero-italic">Empowering</em> quiet <span>Founders</span> to sell<br className="hidden md:block" /> with <span>Confidence</span></h1>
          <p className="hero-subtitle">Build Authentic Client Relationships<br />Create Real, Comfortable Sales Conversations<br />Grow Your Business Using Your Introverted Strengths</p>
          <a className="lime-button hero-cta" href="#Speaking">Watch Cap in action now <span aria-hidden="true">↗</span></a>
        </motion.div>
      </div>
    </section>
  )
}
