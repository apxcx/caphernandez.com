import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturedIn from './components/FeaturedIn'
import IntrovertValueProp from './components/IntrovertValueProp'
import Uncapped from './components/Uncapped'
import SpeakingReelModal from './components/SpeakingReelModal'
import ThreePathsCards from './components/ThreePathsCards'
import TestimonialsSlider from './components/TestimonialsSlider'
import AboutCapStory from './components/AboutCapStory'
import CredentialsBar from './components/CredentialsBar'
import BlogPreviewGrid from './components/BlogPreviewGrid'
import NewsletterSignup from './components/NewsletterSignup'
import Footer, { FinalCta } from './components/Footer'
import DetailPage from './pages/DetailPage'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView())
    } else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function HomePage() {
  return <><HeroSection /><FeaturedIn /><IntrovertValueProp /><Uncapped /><SpeakingReelModal /><ThreePathsCards /><TestimonialsSlider /><AboutCapStory /><CredentialsBar /><BlogPreviewGrid /><NewsletterSignup /><FinalCta /></>
}

export default function App() {
  return <><ScrollToTop /><Navbar /><Routes><Route path="/" element={<HomePage />} />{['/speaking','/workshops','/books','/about','/blog','/contact'].map((path) => <Route key={path} path={path} element={<DetailPage path={path} />} />)}</Routes><Footer /></>
}
