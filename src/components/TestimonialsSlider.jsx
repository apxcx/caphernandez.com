import { useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { testimonials } from '../data/content'
import Reveal from './Reveal'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function TestimonialsSlider() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  return <section className="section speaking-story" id="Speaking"><div className="rail"><Reveal className="story-intro"><div className="eyebrow" style={{ color: '#6c8f00' }}>From Quiet To Confident.</div><h2 className="display story-title">A Message That Resonates On Any Stage.</h2><p className="story-copy">Cap has spoken at conferences, summits, corporate events, schools, and communities—helping thousands of introverts discover clarity, confidence, and a style of communication that actually feels natural.</p><p className="story-copy" style={{ marginTop: 19 }}>His talks combine storytelling, practical frameworks, and actionable tools that audiences can apply immediately.</p></Reveal><Reveal className="testimonials" delay={.12}><Swiper modules={[Navigation, Pagination]} slidesPerView={1} loop={false} navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }} onBeforeInit={(swiper) => { swiper.params.navigation.prevEl = prevRef.current; swiper.params.navigation.nextEl = nextRef.current }} pagination={{ clickable: true }} className="live-swiper"><SwiperSlide><div className="swiper-intro"><div className="eyebrow" style={{ color: '#6c8f00' }}>From quiet to confident.</div><p>A message that resonates on any stage.</p></div></SwiperSlide>{testimonials.map((testimonial) => <SwiperSlide key={testimonial.name}><blockquote className="testimonial-quote">{testimonial.quote}</blockquote><div className="testimonial-meta"><div><div className="testimonial-name">{testimonial.name}</div><div className="testimonial-role">{testimonial.role}</div><div className="testimonial-role">{testimonial.company}</div></div></div></SwiperSlide>)}</Swiper><div className="live-swiper-controls"><button ref={prevRef} className="live-prev" aria-label="Previous slide"><ArrowLeft size={17} /></button><button ref={nextRef} className="live-next" aria-label="Next slide"><ArrowRight size={17} /></button></div></Reveal></div></section>
}
