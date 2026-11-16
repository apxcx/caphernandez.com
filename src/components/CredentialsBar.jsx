import { achievements } from '../data/content'
import Reveal from './Reveal'

const clients = [
  'client-04.png','client-05.png','client-06.png','client-07.png','client-08.png','client-09.png','client-11.png','client-12.png','client-14.png','client-13.png','client-15.png','client-16.png','client-17.png','client-18.png','client-19.png','client-21.png','client-20.png','client-23.png','client-22.png','client-24.png','client-25.png','client-26.png','client-30.png','client-27.png','client-29.png','client-28.png',
]

export default function CredentialsBar() {
  return (
    <>
      <section className="clients"><div className="rail"><Reveal><h2>Clients include</h2><div className="client-ticker">{clients.map((client) => <div className="client-badge" key={client}><img src={`/assets/clients/${client}`} alt="Selected client" /></div>)}</div></Reveal></div></section>
      <section className="section achievements"><div className="rail"><Reveal className="achievements-head"><div><div className="eyebrow">Selected achievements</div><h2 className="display">Ranked and trusted by <em>award-giving bodies</em> across the region.</h2></div><p className="achievements-intro">Recognition matters when it reflects a consistent body of work. These are selected milestones from Cap’s work in leadership, sales, and personal branding.</p></Reveal><div className="achievement-grid">{achievements.map(([year, title, type], index) => <Reveal key={title} delay={(index % 3) * .04}><div className="achievement"><div className="achievement-year">{year}</div><h3 className="achievement-title">{title}</h3><div className="achievement-type">{type}</div></div></Reveal>)}</div></div></section>
    </>
  )
}
