import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { testimonials } from '../data/content'
import Reveal from './Reveal'

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0)
  const testimonial = testimonials[index]
  const move = () => setIndex((value) => (value + 1) % testimonials.length)
  return <section className="section speaking-story" id="Speaking"><div className="rail"><div className="story-grid"><Reveal><img className="story-image" src="/assets/drive-images/homepage-caph-picture.png" alt="Cap Hernandez speaking" /></Reveal><Reveal delay={.08}><div className="eyebrow" style={{ color: '#6c8f00' }}>From Quiet To Confident.</div><h2 className="display story-title">A Message That Resonates On Any Stage.</h2><p className="story-copy">Cap has spoken at conferences, summits, corporate events, schools, and communities—helping thousands of introverts discover clarity, confidence, and a style of communication that actually feels natural.</p><p className="story-copy" style={{ marginTop: 19 }}>His talks combine storytelling, practical frameworks, and actionable tools that audiences can apply immediately.</p></Reveal></div><Reveal className="testimonials" delay={.12}><AnimatePresence mode="wait"><motion.div key={testimonial.name} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }} transition={{ duration: .28 }}><blockquote className="testimonial-quote">{testimonial.quote}</blockquote><div className="testimonial-meta"><div><div className="testimonial-name">{testimonial.name}</div><div className="testimonial-role">{testimonial.role}</div><div className="testimonial-role">{testimonial.company}</div></div><div className="carousel-controls"><button onClick={move} aria-label="Previous slide"><ArrowLeft size={17} /></button></div></div></motion.div></AnimatePresence><div className="dots" aria-label="Testimonial slides">{testimonials.map((item, dot) => <button key={item.name} className={dot === index ? 'active' : ''} onClick={() => setIndex(dot)} aria-label={`Go to slide ${dot + 1}`} />)}</div></Reveal></div></section>
}
