import Reveal from './Reveal'

export default function Uncapped() {
  return (
    <section className="uncapped">
      <div className="rail uncapped-grid">
        <Reveal><h2 className="display uncapped-title"><span>Uncapped</span>Potential</h2></Reveal>
        <Reveal className="uncapped-copy" delay={.08}><strong>The biggest untapped advantage for teams and founders?</strong><br />Unlocking introverted strengths to create high-trust relationships, stronger influence, and better results without burnout or pretending to be someone else.<span className="uncapped-tag">Uncapped · Keynote speaker &amp; expert</span></Reveal>
      </div>
    </section>
  )
}
