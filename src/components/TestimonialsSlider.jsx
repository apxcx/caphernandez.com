import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const slides = [
  {
    title: 'From quiet to confident. A message that resonates on any stage.',
    paragraphs: [
      'Cap has spoken at conferences, summits, corporate events, schools, and communities—helping thousands of introverts discover clarity, confidence, and a style of communication that actually feels natural.',
      'His talks combine storytelling, practical frameworks, and actionable tools that audiences can apply immediately.',
    ],
  },
  {
    title: 'Thought-Provoking. Inspirational. Actionable. Cap Hernandez turned complex concepts into clear, real-world strategies for our leaders.',
    paragraphs: [
      'He challenged our team to rethink how we lead and collaborate, providing tools that we immediately applied to strengthen relationships and drive results. The session was a perfect balance of insight, energy, and practical exercises.',
      '— JOHN REYES',
      'CEO',
      'InnovatePH',
    ],
  },
  {
    title: 'Dynamic. Personal. Impactful. Real. Cap Hernandez created a space where our team could grow, learn, and connect deeply.',
    paragraphs: [
      'His workshops go beyond theory — they inspire action and build confidence in leadership. Our people left energized, with new perspectives and practical steps to implement in their daily roles.',
      '— LIZA SANTOS',
      'Director of People & Culture',
      'NextGen Leaders',
    ],
  },
]

function Arrow({ direction }) {
  const d = direction === 'prev'
    ? 'M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z'
    : 'M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l73.4 73.4H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h370.7l-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z'
  return <svg viewBox="0 0 512 512" aria-hidden="true"><path d={d} /></svg>
}

export default function TestimonialsSlider() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return <section className="section speaking-story" id="Speaking">
    <div className="rail speaking-story-rail">
      <img className="from-quiet-logo" src="/assets/live/ch-cm-wt-h-1.png" alt="Cap Hernandez" />
      <div className="live-slider-shell">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          loop={false}
          speed={0}
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
          }}
          onSwiper={(swiper) => {
            requestAnimationFrame(() => {
              if (!prevRef.current || !nextRef.current) return
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
              swiper.navigation.destroy()
              swiper.navigation.init()
              swiper.navigation.update()
            })
          }}
          pagination={{ clickable: true }}
          className="live-swiper"
        >
          {slides.map((slide) => <SwiperSlide key={slide.title}>
            <div className="live-slide-content">
              <h3>{slide.title}</h3>
              <div className="live-slide-text">
                {slide.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </SwiperSlide>)}
        </Swiper>
        <div className="live-swiper-controls">
          <button ref={prevRef} className="live-prev" aria-label="Previous slide"><Arrow direction="prev" /></button>
          <button ref={nextRef} className="live-next" aria-label="Next slide"><Arrow direction="next" /></button>
        </div>
      </div>
      <div className="book-cap-cta"><a className="ghost-button" href="/contact/">BOOK CAP FOR YOUR EVENT</a></div>
    </div>
  </section>
}
