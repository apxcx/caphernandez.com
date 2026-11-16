import { achievements } from '../data/content'
import Reveal from './Reveal'

const clients = [
  'client-blue-horizin-enterprises.png','client-6-e1766046450799-83-70.png','client-ab-business-support-services.png','client-asian-institute-of-management.png','client-at-t.png','client-atticus-solutions.png','client-ayala.png','client-baird-group.png','client-bookwise.png','client-celestial-security.png','client-cso-flex-solutions.png','client-cyber-q-group.png','client-damon-gettier.png','client-dc.png','client-digital.png','client-halcyon.png','client-house-creatives.png','client-ljmb.png','client-mindgrit.png','client-nubrave-academy.png','client-philusacorp.png','client-source.png','client-spc.png','client-the-tentfinity-corp.png','client-top-30-leaders.png','client-ucpb-savings.png','client-wild-rose.png',
]

export default function CredentialsBar() {
  return (
    <>
      <section className="clients"><div className="rail"><Reveal><h2>Clients include</h2><div className="client-ticker">{clients.map((client) => <div className="client-badge" key={client}><img src={`/assets/drive-logos/clients/${client}`} alt="Cap Hernandez client logo" /></div>)}</div></Reveal></div></section>
      <section className="section achievements"><div className="rail"><Reveal className="achievements-head"><div><div className="eyebrow">Selected achievements</div><h2 className="display">Ranked and trusted by <em>award-giving bodies</em> across the region.</h2></div><p className="achievements-intro">Recognition matters when it reflects a consistent body of work. These are selected milestones from Cap’s work in leadership, sales, and personal branding.</p></Reveal><div className="achievement-grid">{achievements.map(([year, title, type], index) => <Reveal key={title} delay={(index % 3) * .04}><div className="achievement"><div className="achievement-year">{year}</div><h3 className="achievement-title">{title}</h3><div className="achievement-type">{type}</div></div></Reveal>)}</div></div></section>
    </>
  )
}
