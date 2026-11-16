import { useEffect, useState } from 'react'

const changingHeadings = ['Quiet Nature into', 'Your Greatest Advantage?']

export default function AboutCapStory() {
  const [headingIndex, setHeadingIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeadingIndex((index) => (index + 1) % changingHeadings.length)
    }, 4000)
    return () => window.clearInterval(timer)
  }, [])

  return <section className="section about" id="About">
    <div className="about-section-container">
      <div className="about-columns">
        <div className="about-empty-column" aria-hidden="true" />
        <div className="about-content">
          <div className="about-label" aria-hidden="true">ABOUT</div>
          <img className="about-fireworks" src="/assets/live/about-fireworks.png" alt="ABOUT CAP HERNANDEZ" />
          <div className="about-heading-spacer" aria-hidden="true">HERNANDEZ</div>
          <div className="about-intro">
            <span>More than 15 years ago, a comment from my boss at a multinational company changed my perspective forever. He looked at me and said:</span><br /><br />"You’re too quiet! How can you sell?"
          </div>
          <div className="about-biography">
            At the time, it felt like a critique—but it became a turning point. I realized that being quiet wasn’t a weakness—it could be a superpower if used strategically.<br /><br />Over the next 20 years in sales and leadership, I mastered how to communicate, influence, and lead without pretending to be someone else. In 2023, I began helping founders, freelancers, and coaches harness their introvert strengths to sell naturally, build authentic personal brands, and lead with quiet confidence.<br /><br />The truth I’ve discovered is simple: meaningful conversations and genuine connections are what create trust, influence, and real results. When introverts lean into their natural abilities, they don’t just survive—they thrive.
          </div>
          <div className="about-ready">Ready to turn your</div>
          <div className="about-changing" aria-live="polite">
            {changingHeadings.map((heading, index) => <span key={heading} className={index === headingIndex ? 'is-active' : ''}>{heading}</span>)}
          </div>
          <button className="about-button" type="button">START SELLING AND LEADING WITH QUIET CONFIDENCE</button>
        </div>
      </div>
    </div>
  </section>
}
