import { useEffect, useRef } from 'react'

let youtubeApiPromise

function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT)
  if (youtubeApiPromise) return youtubeApiPromise
  youtubeApiPromise = new Promise((resolve) => {
    const previousReady = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      previousReady?.()
      resolve(window.YT)
    }
    const script = document.createElement('script')
    script.src = 'https://www.youtube.com/iframe_api'
    script.async = true
    document.head.appendChild(script)
  })
  return youtubeApiPromise
}

const livePaths = [
  {
    className: 'path-one-live',
    label: 'PATH ONE',
    title: 'Keynote Speaking & Corporate Trainings',
    lead: 'Drawing from 20+ years of experience in sales and team leadership, Cap delivers customized, practical keynotes that inspire introverts to communicate confidently, sell authentically, and lead without forcing extroversion.',
    body: 'From sales, personal branding, to continuous improvement, audiences gain tangible strategies to build trust, influence effectively, and leverage quiet strengths for real-world results. Each session equips attendees to take action immediately and achieve meaningful outcomes.',
    cta: 'More About Speaking',
    href: '/path-one-keynote-and-speakers/',
  },
  {
    className: 'path-two-live',
    label: 'PATH TWO',
    title: 'Workshops',
    lead: 'Cap delivers highly interactive workshops for groups or individuals to go deeper into sales, personal branding, and continuous improvement.',
    body: <>These transformational sessions create a safe, supportive space for introverts to show up authentically, share their ideas courageously, and build trust in meaningful ways. Participants leave with practical tools to communicate clearly, engage clients effectively, and turn their natural strengths into measurable outcomes.<br /><br />Featured programs include: Selling for Introverts, The Silent Approach, LinkedIn Mastery Workshop, Quiet Confidence: 4-Week Sales Accelerator, Sell By Chat.</>,
    cta: 'More About Workshops',
    href: '/path-two-workshops/',
    image: '/assets/live/cap-new-bg-2-e1766107866991.png',
  },
  {
    className: 'path-three-live',
    label: 'PATH THREE',
    title: 'Books & Frameworks',
    lead: 'Cap offers practical books and frameworks for introverts to strengthen their sales skills, build their personal brand, and embrace continuous improvement.',
    body: 'These resources are designed for groups or individuals to apply immediately, providing clear, actionable steps to communicate effectively, build trust, and achieve meaningful results.',
    cta: 'View books',
    href: '/path-three-books-frameworks/',
    image: '/assets/live/CAP-Books.png',
  },
]

function PathContent({ path }) {
  return <div className="path-live-content">
    <div className="path-live-kicker"><span className="path-live-rule" /><h1>{path.label}</h1></div>
    <h2>{path.title}</h2>
    <h3>{path.lead}</h3>
    <div className="path-live-body">{path.body}</div>
    <a className="path-live-button" href={path.href}>{path.cta}</a>
  </div>
}

function BackgroundVideo({ videoId, end }) {
  const playerRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    loadYouTubeApi().then((YT) => {
      if (cancelled || !containerRef.current || !YT?.Player) return
      playerRef.current = new YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          loop: 1,
          modestbranding: 1,
          playsinline: 1,
          playlist: videoId,
          rel: 0,
          ...(end ? { end } : {}),
        },
        events: {
          onReady: (event) => {
            event.target.mute()
            event.target.playVideo()
          },
          onStateChange: (event) => {
            if (end && event.data === YT.PlayerState.ENDED) {
              event.target.seekTo(0)
              event.target.playVideo()
            }
          },
        },
      })
    })
    return () => {
      cancelled = true
      playerRef.current?.destroy?.()
    }
  }, [videoId, end])

  return <div className="path-background-video" aria-hidden="true">
    <div ref={containerRef} className="path-youtube-wrapper" />
  </div>
}

export default function ThreePathsCards() {
  return <>
    <section id="SpeakingIntro" className="paths-live-intro">
      <BackgroundVideo videoId="9XCyKtFsYbg" />
      <div className="paths-live-overlay" />
      <div className="paths-live-intro-copy">
        <div>ONE GOAL. THREE PATHS.</div>
        <p>Which option fits your needs best?</p>
      </div>
    </section>
    <section className="path-live-section path-one-live" aria-label="Path One: Keynote Speaking and Corporate Trainings">
      <div className="path-live-overlay" />
      <div className="path-live-empty" aria-hidden="true" />
      <PathContent path={livePaths[0]} />
    </section>
    <section className="path-live-section path-two-live" aria-label="Path Two: Workshops">
      <PathContent path={livePaths[1]} />
      <div className="path-live-image"><img src={livePaths[1].image} alt="Cap Hernandez workshops" /></div>
    </section>
    <section id="Book" className="path-live-section path-three-live" aria-label="Path Three: Books and Frameworks">
      <BackgroundVideo videoId="8xFFZdqtrvs" end={7} />
      <div className="path-three-live-overlay" />
      <div className="path-live-image"><img src={livePaths[2].image} alt="Cap Hernandez books and frameworks" /></div>
      <PathContent path={livePaths[2]} />
    </section>
  </>
}
