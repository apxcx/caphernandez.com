import { useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Reveal from './Reveal'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const slides = [
  { title: 'From Quiet To Confident. A Message That Resonates On Any Stage.', body: ['Cap has spoken at conferences, summits, corporate events, schools, and communities—helping thousands of introverts discover clarity, confidence, and a style of communication that actually feels natural.', 'His talks combine storytelling, practical frameworks, and actionable tools that audiences can apply immediately.'] },
  { title: 'Thought-Provoking. Inspirational. Actionable. Cap Hernandez Turned Complex Concepts Into Clear, Real-World Strategies For Our Leaders.', body: ['He challenged our team to rethink how we lead and collaborate, providing tools that we immediately applied to strengthen relationships and drive results. The session was a perfect balance of insight, energy, and practical exercises.', '— JOHN REYES', 'CEO', 'InnovatePH'] },
  { title: 'Dynamic. Personal. Impactful. Real. Cap Hernandez Created A Space Where Our Team Could Grow, Learn, And Connect Deeply.', body: ['His workshops go beyond theory — they inspire action and build confidence in leadership. Our people left energized, with new perspectives and practical steps to implement in their daily roles.', '— LIZA SANTOS', 'Director of People & Culture', 'NextGen Leaders'] },
]

export default function TestimonialsSlider() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  return <section className="section speaking-story" id="Speaking"><div className="rail speaking-story-rail"><Reveal><img className="from-quiet-logo" src="/assets/live/ch-cm-wt-h-1.png" alt="Cap Hernandez" /></Reveal><Reveal className="testimonials" delay={.08}><Swiper modules={[Navigation, Pagination]} slidesPerView={1} loop={false} navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }} onBeforeInit={(swiper) => { swiper.params.navigation.prevEl = prevRef.current; swiper.params.navigation.nextEl = nextRef.current }} pagination={{ clickable: true }} className="live-swiper">{slides.map((slide) => <SwiperSlide key={slide.title}><div className="live-slide-content"><h3>{slide.title}</h3><div>{slide.body.map((line, index) => <p key={`${slide.title}-${index}`} className={line.startsWith('—') || index > 1 && slide !== slides[0] ? 'slide-meta' : ''}>{line}</p>)}</div></div></SwiperSlide>)}</Swiper><div className="live-swiper-controls"><button ref={prevRef} className="live-prev" aria-label="Previous slide"><ArrowLeft size={17} /></button><button ref={nextRef} className="live-next" aria-label="Next slide"><ArrowRight size={17} /></button></div></Reveal><Reveal className="book-cap-cta" delay={.12}><a className="ghost-button" href="#Email">BOOK CAP FOR YOUR EVENT</a></Reveal></div></section>
}
