import { motion } from 'framer-motion'

const strengths = [
  'Sell without forcing extroversion',
  'Lead confidently without being loud',
  'Build trust through authenticity',
  'Show influence through clarity and action'
]

const checkPath = 'M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z'

export default function IntrovertValueProp() {
  return <section className="value-prop">
    <div className="value-container">
      <div className="value-columns">
        <div className="value-left">
          <motion.div className="value-left-inner" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} transition={{ duration: .62, ease: [0.22, 1, 0.36, 1] }}>
            <h2 className="value-title">Quiet leadership.<br />Real connection.<br />Better results.</h2>
            <p className="value-lead"><strong>Introverts are often overlooked, underestimated, or pressured to “act louder” just to be heard. Even with the best ideas, they hesitate to speak up, struggle with client conversations, or avoid visibility.</strong></p>
            <p className="value-intro">Cap helps introverts leverage their natural strengths to:<br />&nbsp;</p>
            <ul className="value-list">
              {strengths.map((item) => <li key={item}>
                <span className="value-check" aria-hidden="true"><svg viewBox="0 0 512 512"><path d={checkPath} /></svg></span>
                <span className="value-list-text">{item}</span>
              </li>)}
            </ul>
            <p className="value-question"><strong><em>Are you ready to lead with quiet confidence?</em></strong></p>
            <div className="value-button-wrap"><a className="value-button" href="#About">LEARN MORE ABOUT CAP</a></div>
          </motion.div>
        </div>
        <div className="value-right">
          <div className="value-right-head">
            <h1 className="value-uncapped">Uncapped</h1>
            <div className="value-potential">
              <h2 className="value-potential-text"><span className="value-potential-wrapper"><motion.span className="value-potential-word" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .6 }} transition={{ duration: .7, ease: [0.22, 1, 0.36, 1], delay: .1 }}>POTENTIAL</motion.span></span></h2>
            </div>
          </div>
          <div className="value-right-copy">
            <p className="value-advantage"><strong>The biggest untapped advantage for teams and founders?<br /><br />&nbsp;Unlocking introverted strengths to create high-trust relationships, stronger influence, and better results without burnout or pretending to be someone else.</strong></p>
          </div>
        </div>
      </div>
    </div>
  </section>
}
