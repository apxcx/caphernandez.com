import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Navbar from '../components/Navbar'
import Footer, { FinalCta } from '../components/Footer'

const topics = [
  ['SELLING AS AN INTROVERT', 'Practical approaches to connect with clients, uncover needs, and close deals without relying on high-pressure tactics or pretending to be extroverted.'],
  ['CONTINUOUS IMPROVEMENT', 'Tools and frameworks to build consistent habits, measure progress, and cultivate personal and team growth over time.'],
  ['Building trust through meaningful conversations', 'Techniques to foster authentic connections, strengthen relationships, and encourage collaboration within teams and with clients.'],
  ['Speaking up and leading without pressure', 'Guidance on confidently presenting ideas, facilitating discussions, and guiding initiatives while staying true to one’s natural communication style.'],
  ['Influencing authentically and effectively', 'Strategies to inspire action, motivate others, and make an impact without being pushy or overly forceful.'],
  ['Building a strong personal brand as an introvert', 'Methods to highlight expertise, communicate value, and gain recognition while remaining authentic.'],
  ['Custom corporate trainings', 'Tailored programs for teams or organizations that address specific challenges, enhance collaboration, and increase overall performance.'],
]

export default function PathOnePage() {
  return <>
    <Navbar />
    <main className="path-one-page">
      <section className="path-one-hero">
        <div className="path-one-overlay" />
        <div className="path-one-inner">
          <div className="path-one-kicker"><b>PATH ONE</b></div>
          <div className="path-one-title">KEYNOTE SPEAKING<br /><span>&amp;</span><br />CORPORATE TRAININGS</div>
          <p className="path-one-lead"><b>Drawing from 20+ years of experience in sales and team leadership, Cap delivers customized, practical keynotes that inspire introverts to communicate confidently, sell authentically, and lead without forcing extroversion.</b></p>
          <div className="path-one-slider-wrap">
            <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} loop className="path-one-slider">
              {topics.map(([title, body]) => <SwiperSlide key={title}><article className="path-one-slide"><h2>{title}</h2><p>{body}</p></article></SwiperSlide>)}
            </Swiper>
          </div>
          <a className="path-one-button" href="#Email"><b>BOOK A KEYNOTE / CORPORATE TRAINING</b></a>
        </div>
      </section>
    </main>
    <FinalCta />
    <Footer />
  </>
}
