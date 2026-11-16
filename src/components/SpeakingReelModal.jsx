import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const livePlayerSrc = 'https://www.youtube.com/embed/2Ao1da6oM9Y?origin=https%3A%2F%2Fcaphernandez.com&playsinline=0&autoplay=1&controls=0&modestbranding=1&rel=0&mute=1&enablejsapi=1&loop=1&playlist=2Ao1da6oM9Y&start=84&end=95'

export default function SpeakingReelModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return <>
    <section id="Speaking" className="reel">
      <div className="reel-background-video" aria-hidden="true">
        <div className="reel-video-wrapper">
          <iframe className="reel-player" title="YouTube video player" src={livePlayerSrc} frameBorder="0" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" />
        </div>
      </div>
      <div className="reel-overlay" />
      <div className="reel-container">
        <div className="reel-columns">
          <div className="reel-info-column">
            <div className="reel-live-text"><b>UNCAPPED<br />Keynote Speaker &amp; Expert</b></div>
            <h2 className="reel-live-heading">Watch Cap in <span>Action</span></h2>
            <a className="reel-live-link" href="https://caphernandez.com/path-one-keynote-and-speakers/">MORE ABOUT SPEAKING</a>
          </div>
          <div className="reel-control-column">
            <button className="reel-live-button" onClick={() => setOpen(true)} aria-label="Speaking reel"><span className="reel-play-icon" aria-hidden="true">▶</span><span>SPEAKING REEL</span></button>
          </div>
        </div>
      </div>
    </section>
    <AnimatePresence>{open && <motion.div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Speaking reel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}><motion.div className="modal-panel" initial={{ scale: .94, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .96, y: 12 }}><button className="modal-close" onClick={() => setOpen(false)} aria-label="Close speaking reel"><X size={18} /></button><iframe className="video-frame" title="YouTube video player" src={livePlayerSrc} frameBorder="0" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" /></motion.div></motion.div>}</AnimatePresence>
  </>
}
