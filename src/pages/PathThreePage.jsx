import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Navbar from '../components/Navbar'
import Footer, { FinalCta } from '../components/Footer'

const books = [
  ['Selling for Introverts: Quick Guide (Ebook)', 'This provides actionable sales techniques that are easy to implement, helping introverts engage clients and close deals without feeling pushy or unnatural.'],
  ['Silent Approach: LinkedIn Mastery Playbook (ebook)', 'The book guides introverts to leverage LinkedIn effectively, turning online connections into opportunities, while maintaining their natural communication style.'],
  ['Quiet Confidence: The Introvert’s Guide to Sales Success (PHYSICAL BOOK)', 'It teaches how to sell authentically and confidently, helping introverts turn quiet influence into measurable outcomes.'],
  ['UnCapped Potential (eBook)', 'Tools and frameworks to build consistent habits, measure progress, and cultivate personal and team growth over time.'],
]

export default function PathThreePage() {
  const youtubeOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://caphernandez.com'
  const youtubeSrc = `https://www.youtube.com/embed/8xFFZdqtrvs?autoplay=1&mute=1&controls=0&loop=1&playlist=8xFFZdqtrvs&playsinline=1&rel=0&modestbranding=1&enablejsapi=1&origin=${encodeURIComponent(youtubeOrigin)}&widget_referrer=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://caphernandez.com/path-three-books-frameworks/')}`
  return <>
    <Navbar />
    <main className="path-three-page">
      <section className="path-three-hero">
        <div className="path-three-background"><iframe title="Books and frameworks background video" src={youtubeSrc} referrerPolicy="strict-origin-when-cross-origin" allow="autoplay; encrypted-media; picture-in-picture" /></div>
        <div className="path-three-overlay" />
        <div className="path-three-inner">
          <div className="path-three-kicker"><b>PATH THREE</b></div>
          <h1>BOOKS &amp; FRAMEWORKS</h1>
          <div className="path-three-intro">
            <img src="/assets/live/CAP-Books.png" alt="Cap Hernandez books" />
            <p><b>Cap’s books provide introverts with step-by-step strategies to apply their natural strengths in sales, personal branding, and leadership. Each resource is written to help readers take action immediately, gain confidence, and see tangible results in their professional and personal growth.</b></p>
          </div>
          <div className="path-three-slider-wrap">
            <Swiper modules={[Navigation, Pagination, Autoplay]} navigation pagination={{ clickable: true }} autoplay={{ delay: 4000, disableOnInteraction: false }} rewind className="path-three-slider">
              {books.map(([title, body]) => <SwiperSlide key={title}><article className="path-three-slide"><h2>{title}</h2><p>{body}</p></article></SwiperSlide>)}
            </Swiper>
          </div>
          <p className="path-three-close"><b>These books and frameworks are ideal for introverts who want practical tools, clear guidance, and strategies that align with their strengths, enabling them to achieve results with confidence and authenticity.</b></p>
          <a className="path-three-button" href="https://n2.apx.cx/caphernandez-2/books/"><b>VIEW BOOKS</b></a>
        </div>
      </section>
    </main>
    <FinalCta />
    <Footer />
  </>
}
