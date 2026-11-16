import { posts } from '../data/content'
import Reveal from './Reveal'

export default function BlogPreviewGrid() {
  return <section className="section blog" id="Blog"><div className="rail"><Reveal className="blog-head"><div><div className="eyebrow" style={{ color: '#6c8f00' }}>From the Blog</div><h2 className="display">From the Blog</h2></div><a className="ghost-button" href="#Blog">SEE ALL POSTS</a></Reveal><div className="blog-grid">{posts.map((post, index) => <Reveal key={post.title} delay={index * .06}><a className={`blog-card ${post.accent}`} href="#Blog"><div><div className="blog-card-category">{post.category}</div><h3>{post.title}</h3></div></a></Reveal>)}</div></div></section>
}
