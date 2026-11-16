import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function IntrovertValueProp() {
  return (
    <section className="section value-prop" id="about">
      <div className="rail value-grid">
        <Reveal><h2 className="display value-title">Quiet leadership.<br /><em>Real connection.</em><br />Better results.</h2></Reveal>
        <Reveal className="value-copy" delay={.08}>
          <strong>Introverts are often overlooked, underestimated, or pressured to “act louder” just to be heard. Even with the best ideas, they hesitate to speak up, struggle with client conversations, or avoid visibility.</strong>
          <p className="body-copy">Cap helps introverts leverage their natural strengths to:</p>
          <ul className="value-list">
            <li>Sell without forcing extroversion</li>
            <li>Lead confidently without being loud</li>
            <li>Build trust through authenticity</li>
            <li>Show influence through clarity and action</li>
          </ul>
          <Link className="ghost-button" to="/about">Learn more about Cap</Link>
        </Reveal>
      </div>
    </section>
  )
}
