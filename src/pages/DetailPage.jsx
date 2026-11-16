import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { detailContent } from '../data/content'
import Reveal from '../components/Reveal'

export default function DetailPage({ path }) {
  const content = detailContent[path] || detailContent['/about']
  return (
    <main className="detail-page">
      <div className="rail">
        <div className="detail-hero">
          <Reveal><div className="eyebrow">{content.eyebrow}</div><h1 className="display">{content.title}</h1><p>{content.intro}</p><Link className="lime-button" to="/contact">{content.cta} <ArrowRight size={16} /></Link></Reveal>
          <Reveal className="detail-art-wrap" delay={.08}><img className="detail-art" src={content.image} alt="" /></Reveal>
        </div>
        <div className="detail-body"><Reveal><div className="detail-block"><div className="eyebrow">A clearer way forward</div><h2>Practical, not performative.</h2><p>Every engagement is shaped around real conversations, useful practice, and a version of confidence that does not ask you to become someone else.</p></div></Reveal><Reveal delay={.08}><div className="detail-block"><div className="eyebrow">Selected approach</div><h2>Quiet strengths, made visible.</h2><p>Cap combines storytelling, sales experience, and repeatable frameworks so you can move from insight to action without burnout.</p></div></Reveal></div>
        <div style={{ marginTop: 58 }}><Link className="ghost-button" to="/">Back to the full story</Link></div>
      </div>
    </main>
  )
}
