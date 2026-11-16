import { motion } from 'framer-motion'
import { paths } from '../data/content'
import Reveal from './Reveal'

const pathImages = [
  '/assets/drive-paths/path-1.jpg',
  '/assets/drive-paths/path-2.jpg',
  '/assets/drive-paths/path-3.png',
]

export default function ThreePathsCards() {
  return <section className="section paths"><div className="rail"><Reveal className="paths-head"><><div className="eyebrow">ONE GOAL. THREE PATHS.</div><h2 className="display">Which option fits your needs best?</h2></></Reveal><div className="paths-grid">{paths.map((path, index) => <Reveal key={path.number} delay={index * .08}><motion.article className={`path-card path-card-${index + 1}`} whileHover={{ y: -8 }} transition={{ duration: .25 }}><div className="path-visual"><img src={pathImages[index]} alt={index === 0 ? 'Cap Hernandez keynote speaking' : index === 1 ? 'Cap Hernandez workshop portrait' : 'Cap Hernandez books'} /></div><div className="path-content"><div className="path-top"><span>{path.label}</span><span className="path-number">{path.number}</span></div><h3 className="path-title">{path.title}</h3><p className="path-body">{path.body}</p><p className="path-body" style={{ marginTop: 12 }}>{path.detail}</p><a className="ghost-button" href={path.to}>{path.cta}</a></div></motion.article></Reveal>)}</div></div></section>
}
