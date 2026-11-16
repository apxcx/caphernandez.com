import { achievements } from '../data/content'
import Reveal from './Reveal'

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

export default function CredentialsBar() {
  return <>
    <section className="clients">
      <div className="clients-section-container">
        <div className="clients-heading-row"><span className="clients-divider" aria-hidden="true" /><h2>CLIENTS INCLUDE</h2></div>
        <div className="client-grid">{clients.map((client) => <ClientLogo key={client.src} client={client} />)}</div>
        <div className="client-grid-final">{finalClients.map((client) => <ClientLogo key={client.src} client={client} />)}</div>
      </div>
    </section>
    <section className="section achievements"><div className="rail"><Reveal className="achievements-head"><div><div className="eyebrow">Selected achievements</div><h2 className="display">Ranked and trusted by <em>award-giving bodies</em> across the region.</h2></div><p className="achievements-intro">Ranked and trusted by award-giving bodies across the region.</p></Reveal><div className="achievement-grid">{achievements.map((item, index) => <Reveal key={item[1]} delay={(index % 3) * .04}><div className="achievement"><div className="achievement-year">{item[0]}</div><h3 className="achievement-title">{item[1]}</h3><div className="achievement-type">{item[2]}</div></div></Reveal>)}</div></div></section>
  </>
}
