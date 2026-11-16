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

export default function App() {
  return <><Navbar /><main><HeroSection /><FeaturedIn /><IntrovertValueProp /><Uncapped /><SpeakingReelModal /><ThreePathsCards /><TestimonialsSlider /><AboutCapStory /><CredentialsBar /><BlogPreviewGrid /><NewsletterSignup /><FinalCta /></main><Footer /></>
}
