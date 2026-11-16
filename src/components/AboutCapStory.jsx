import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function AboutCapStory() {
  return (
    <section className="section about" id="About">
      <div className="rail about-grid">
        <Reveal><div className="eyebrow">About</div><img className="about-art" src="/assets/cap-about-art.png" alt="Abstract celebratory fireworks artwork" /></Reveal>
        <Reveal delay={.08}><h2 className="display about-title">Cap <em>Hernandez</em></h2><blockquote className="about-quote">“You’re too quiet! How can you sell?”</blockquote><p className="about-copy">More than 15 years ago, a comment from my boss at a multinational company changed my perspective forever.</p><p className="about-copy">At the time, it felt like a critique—but it became a turning point. I realized that being quiet wasn’t a weakness—it could be a superpower if used strategically.</p><p className="about-copy">Over the next 20 years in sales and leadership, I mastered how to communicate, influence, and lead without pretending to be someone else. In 2023, I began helping founders, freelancers, and coaches harness their introvert strengths to sell naturally, build authentic personal brands, and lead with quiet confidence.</p><p className="about-copy">The truth I’ve discovered is simple: meaningful conversations and genuine connections are what create trust, influence, and real results. When introverts lean into their natural abilities, they don’t just survive—they thrive.</p><div style={{ marginTop: 31 }}><Link className="lime-button" to="/about">Learn more about Cap <span aria-hidden="true">↗</span></Link></div></Reveal>
      </div>
    </section>
  )
}
