import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export default function SpeakingReelModal() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open])
  return <>
    <section className="reel"><div className="rail reel-card"><div className="eyebrow">Watch Cap in Action</div><h2 className="display reel-title">From Quiet To Confident.<br />A Message That Resonates<br />On Any Stage.</h2><a className="ghost-button" href="#Speaking">MORE ABOUT SPEAKING</a><button className="reel-button" onClick={() => setOpen(true)} aria-label="Speaking reel">SPEAKING REEL</button></div></section>
    <AnimatePresence>{open && <motion.div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Speaking reel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}><motion.div className="modal-panel" initial={{ scale: .94, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .96, y: 12 }}><button className="modal-close" onClick={() => setOpen(false)} aria-label="Close speaking reel"><X size={18} /></button><div className="video-placeholder"><div className="eyebrow">SPEAKING REEL</div></div></motion.div></motion.div>}</AnimatePresence>
  </>
}
