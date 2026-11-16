import { useEffect, useState } from 'react'
import { X, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

export default function SpeakingReelModal() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open])
  return (
    <>
      <section className="reel" id="speaking">
        <div className="rail reel-card">
          <div className="eyebrow">Watch Cap in action</div>
          <h2 className="display reel-title">From quiet to confident.<br />A message that resonates<br />on any stage.</h2>
          <button className="reel-button" onClick={() => setOpen(true)} aria-label="Open speaking reel">Speaking<br />reel</button>
          <div style={{ marginTop: 28 }}><Link className="ghost-button" to="/speaking">More about speaking</Link></div>
        </div>
      </section>
      <AnimatePresence>
        {open && <motion.div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Cap Hernandez speaking reel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
          <motion.div className="modal-panel reel-modal-card" initial={{ scale: .94, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .96, y: 12 }} transition={{ duration: .28 }}>
            <button className="modal-close" onClick={() => setOpen(false)} aria-label="Close speaking reel"><X size={18} /></button>
            <div className="reel-modal-art"><img src="/assets/drive-images/homepage-caph-picture.png" alt="Cap Hernandez speaking at an event" /><div><div className="eyebrow">Speaking reel</div><h3 className="display">Quiet confidence, in action.</h3><p>See Cap’s storytelling, practical frameworks, and audience-first approach on stage.</p><a className="lime-button" href="https://www.youtube.com/@caphernandez" target="_blank" rel="noreferrer">Watch on YouTube <ArrowUpRight size={16} /></a></div></div>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </>
  )
}
