import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturedIn from './components/FeaturedIn'
import IntrovertValueProp from './components/IntrovertValueProp'
import SpeakingReelModal from './components/SpeakingReelModal'
import ThreePathsCards from './components/ThreePathsCards'
import TestimonialsSlider from './components/TestimonialsSlider'
import AboutCapStory from './components/AboutCapStory'
import CredentialsBar from './components/CredentialsBar'
import BlogPreviewGrid from './components/BlogPreviewGrid'
import NewsletterSignup from './components/NewsletterSignup'
import Footer, { FinalCta } from './components/Footer'
import PathOnePage from './pages/PathOnePage'

export default function App() {
  if (window.location.pathname === '/path-one-keynote-and-speakers' || window.location.pathname === '/path-one-keynote-and-speakers/') return <PathOnePage />
  return <><Navbar /><main><HeroSection /><FeaturedIn /><IntrovertValueProp /><SpeakingReelModal /><ThreePathsCards /><TestimonialsSlider /><AboutCapStory /><CredentialsBar /><BlogPreviewGrid /><NewsletterSignup /><FinalCta /></main><Footer /></>
}
