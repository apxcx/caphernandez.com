import { achievements } from '../data/content'

const logoStyles = [
  ['none', 220, 124, 'cover'],
  ['none', 150, 150, 'cover'],
  ['none', 100, 100, 'cover'],
  ['none', 200, 200, 'cover'],
  ['grayscale(100%) invert(100%)', 200, 200, 'cover'],
  ['none', 150, 150, 'cover'],
  ['none', 250, 250, 'cover'],
  ['none', 150, 150, 'cover'],
  ['invert(100%) brightness(200%)', 150, 150, 'cover'],
  ['invert(100%)', 200, 200, 'cover'],
  ['none', 150, 150, 'cover'],
  ['none', 200, 150, 'cover'],
  ['none', 150, 150, 'cover'],
  ['none', 150, 150, 'cover'],
  ['invert(100%)', 100, 100, 'cover'],
  ['grayscale(100%)', 200, 200, 'cover'],
  ['grayscale(100%)', 200, 200, 'cover'],
  ['grayscale(100%)', 150, 150, 'cover'],
  ['brightness(200%) grayscale(100%)', 200, 200, 'cover'],
  ['brightness(200%) grayscale(100%)', 200, 200, 'cover'],
  ['brightness(200%) grayscale(100%)', 200, 200, 'cover'],
  ['brightness(200%) grayscale(100%)', 250, 250, 'cover'],
  ['brightness(200%) grayscale(100%)', 200, 200, 'cover'],
  ['grayscale(100%) brightness(200%)', 250, 250, 'contain'],
  ['none', 200, 200, 'contain'],
]

const clients = Array.from({ length: 25 }, (_, index) => ({
  src: `/assets/live/clients/client-${index + 4}.png`,
  style: logoStyles[index],
  alt: `Cap Hernandez client logo ${index + 4}`,
}))

const finalClients = [
  { src: '/assets/live/clients/client-29.png', style: ['grayscale(100%) brightness(200%)', 230, 230, 'contain'], alt: 'Cap Hernandez client logo 29', fixedHeight: true },
  { src: '/assets/live/clients/client-30.png', style: ['none', 170, 170, 'contain'], alt: 'Cap Hernandez client logo 30', fixedHeight: true },
]

function ClientLogo({ client }) {
  const [filter, maxWidth, height, objectFit] = client.style
  return <img className="client-logo" src={client.src} alt={client.alt} style={{ maxWidth, objectFit, filter, ...(client.fixedHeight ? { height } : {}) }} />
}

function AchievementCard({ item, featured = false }) {
  const [label, title, description] = item
  return <article className={`achievement-card${featured ? ' achievement-card-featured' : ''}`}>
    <div className="achievement-label">{label}</div>
    <h3>{title}</h3>
    <div className="achievement-description">{description}</div>
  </article>
}

export default function CredentialsBar() {
  return <>
    <section className="clients">
      <div className="clients-section-container">
        <div className="clients-heading-row"><span className="clients-divider" aria-hidden="true" /><h2>CLIENTS INCLUDE</h2></div>
        <div className="client-grid">{clients.map((client) => <ClientLogo key={client.src} client={client} />)}</div>
        <div className="client-grid-final">{finalClients.map((client) => <ClientLogo key={client.src} client={client} />)}</div>
      </div>
    </section>
    <section className="achievements" aria-labelledby="selected-achievements-title">
      <div className="achievements-container">
        <div className="achievements-head-panel">
          <div className="achievements-eyebrow"><span className="achievements-divider" aria-hidden="true" /><h2>SELECTED ACHIEVEMENTS</h2></div>
          <h1 id="selected-achievements-title">Ranked and trusted by <em>award-giving bodies</em> across the region.</h1>
        </div>
        <div className="achievement-row achievement-row-one">
          <AchievementCard item={achievements[0]} featured />
          <AchievementCard item={achievements[1]} />
          <AchievementCard item={achievements[2]} />
        </div>
        <div className="achievement-row achievement-row-four">
          {achievements.slice(3, 7).map((item) => <AchievementCard key={item[1]} item={item} />)}
        </div>
        <div className="achievement-row achievement-row-two">
          {achievements.slice(7).map((item) => <AchievementCard key={item[1]} item={item} />)}
        </div>
      </div>
    </section>
  </>
}
