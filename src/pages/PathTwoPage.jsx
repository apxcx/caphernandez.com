import Navbar from '../components/Navbar'
import Footer, { FinalCta } from '../components/Footer'

export default function PathTwoPage() {
  return <>
    <Navbar />
    <main className="path-two-page">
      <section className="path-two-hero">
        <div className="path-two-overlay" />
        <div className="path-two-inner">
          <div className="path-two-kicker"><b>PATH TWO</b></div>
          <h1>WORKSHOPS</h1>
          <div className="path-two-copy">
            <p>Cap’s workshops are designed to help introverts take their skills to the next level, whether they are individuals or part of a small group. Each session is hands-on and practical, giving participants the opportunity to practice real-world strategies in sales, personal branding, and continuous improvement.</p>
            <p>Through guided exercises and live coaching, participants gain the confidence to lead conversations effortlessly, present their ideas clearly, and build trust with clients, colleagues, or audiences. They learn how to turn their natural strengths into measurable outcomes, applying techniques that generate real results without forcing extroverted behaviors.</p>
            <p>Workshops also provide actionable tools to develop and showcase a strong personal brand, attract opportunities authentically, and communicate with clarity and impact. Cap tailors each session to the group’s needs, ensuring participants leave with tangible takeaways they can implement immediately.</p>
          </div>
          <p className="path-two-programs">SELLING FOR INTROVERTS,<br />THE SILENT APPROACH: LINKEDIN MASTERY WORKSHOP,<br />QUIET CONFIDENCE: 4-WEEK SALES ACCELERATOR PROGRAM,<br />SILENT TO SOLD: MASTERING AUTHENTIC CONNECTION AND SALES,<br />AND SELL BY CHAT.</p>
          <p className="path-two-close">Each program is structured to provide step-by-step guidance<br />while encouraging participants to explore their individual strengths and style.</p>
          <a className="path-two-button" href="#Email"><b>EXPLORE WORKSHOPS</b></a>
        </div>
      </section>
    </main>
    <FinalCta />
    <Footer />
  </>
}
