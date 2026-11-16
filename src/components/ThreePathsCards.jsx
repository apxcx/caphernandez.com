import { motion } from 'framer-motion'
import { paths } from '../data/content'
import Reveal from './Reveal'

export default function ThreePathsCards() {
  return <section className="section paths"><div className="rail"><Reveal className="paths-head"><><div className="eyebrow">ONE GOAL. THREE PATHS.</div><h2 className="display">Which option fits your needs best?</h2></></Reveal><div className="paths-grid">{paths.map((path, index) => <Reveal key={path.number} delay={index * .08}><motion.article className="path-card" whileHover={{ y: -8 }} transition={{ duration: .25 }}><div><div className="path-top"><span>{path.label}</span><span className="path-number">{path.number}</span></div><img className="path-image" src={path.image} alt={path.imageAlt} /><h3 className="path-title">{path.title}</h3><p className="path-body">{path.body}</p><p className="path-body" style={{ marginTop: 12 }}>{path.detail}</p></div><a className="ghost-button" href={path.to}>{path.cta}</a></motion.article></Reveal>)}</div></div></section>
}
