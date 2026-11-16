const livePaths = [
  {
    className: 'path-one-live',
    label: 'PATH ONE',
    title: 'Keynote Speaking & Corporate Trainings',
    lead: 'Drawing from 20+ years of experience in sales and team leadership, Cap delivers customized, practical keynotes that inspire introverts to communicate confidently, sell authentically, and lead without forcing extroversion.',
    body: 'From sales, personal branding, to continuous improvement, audiences gain tangible strategies to build trust, influence effectively, and leverage quiet strengths for real-world results. Each session equips attendees to take action immediately and achieve meaningful outcomes.',
    cta: 'More About Speaking',
    href: 'https://caphernandez.com/path-one-keynote-and-speakers/',
  },
  {
    className: 'path-two-live',
    label: 'PATH TWO',
    title: 'Workshops',
    lead: 'Cap delivers highly interactive workshops for groups or individuals to go deeper into sales, personal branding, and continuous improvement.',
    body: <>These transformational sessions create a safe, supportive space for introverts to show up authentically, share their ideas courageously, and build trust in meaningful ways. Participants leave with practical tools to communicate clearly, engage clients effectively, and turn their natural strengths into measurable outcomes.<br /><br />Featured programs include: Selling for Introverts, The Silent Approach, LinkedIn Mastery Workshop, Quiet Confidence: 4-Week Sales Accelerator, Sell By Chat.</>,
    cta: 'More About Workshops',
    href: 'https://caphernandez.com/path-two-workshops/',
    image: '/assets/live/cap-new-bg-2-e1766107866991.png',
  },
  {
    className: 'path-three-live',
    label: 'PATH THREE',
    title: 'Books & Frameworks',
    lead: 'Cap offers practical books and frameworks for introverts to strengthen their sales skills, build their personal brand, and embrace continuous improvement.',
    body: 'These resources are designed for groups or individuals to apply immediately, providing clear, actionable steps to communicate effectively, build trust, and achieve meaningful results.',
    cta: 'View books',
    href: 'https://caphernandez.com/path-three-books-frameworks/',
    image: '/assets/live/CAP-Books.png',
  },
]

function PathContent({ path }) {
  return <div className="path-live-content">
    <div className="path-live-kicker"><span className="path-live-rule" /><h1>{path.label}</h1></div>
    <h2>{path.title}</h2>
    <h3>{path.lead}</h3>
    <div className="path-live-body">{path.body}</div>
    <a className="path-live-button" href={path.href}>{path.cta}</a>
  </div>
}

export default function ThreePathsCards() {
  return <>
    <section id="SpeakingIntro" className="paths-live-intro">
      <div className="paths-live-intro-copy">
        <div>ONE GOAL. THREE PATHS.</div>
        <p>Which option fits your needs best?</p>
      </div>
    </section>
    <section className="path-live-section path-one-live" aria-label="Path One: Keynote Speaking and Corporate Trainings">
      <div className="path-live-overlay" />
      <div className="path-live-empty" aria-hidden="true" />
      <PathContent path={livePaths[0]} />
    </section>
    <section className="path-live-section path-two-live" aria-label="Path Two: Workshops">
      <PathContent path={livePaths[1]} />
      <div className="path-live-image"><img src={livePaths[1].image} alt="Cap Hernandez workshops" /></div>
    </section>
    <section id="Book" className="path-live-section path-three-live" aria-label="Path Three: Books and Frameworks">
      <div className="path-live-image"><img src={livePaths[2].image} alt="Cap Hernandez books and frameworks" /></div>
      <PathContent path={livePaths[2]} />
    </section>
  </>
}
