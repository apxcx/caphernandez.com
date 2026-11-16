import { motion } from 'framer-motion'
import { featuredLogos } from '../data/content'
import Reveal from './Reveal'

export default function FeaturedIn() {
  return (
    <section className="featured" aria-label="Featured in">
      <Reveal className="rail">
        <div className="eyebrow featured-label">Featured in</div>
        <div className="featured-row">
          {featuredLogos.map((logo, index) => <motion.div className="featured-logo" key={logo.src} whileHover={{ opacity: 1, scale: 1.06 }} transition={{ duration: .2 }}><img src={logo.src} alt={logo.alt} /></motion.div>)}
        </div>
      </Reveal>
    </section>
  )
}
