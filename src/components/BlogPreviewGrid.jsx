import { Link } from 'react-router-dom'
import { posts } from '../data/content'
import Reveal from './Reveal'

export default function BlogPreviewGrid() {
  return (
    <section className="section blog" id="Blog">
      <div className="rail">
        <Reveal className="blog-head">
          <div>
            <div className="eyebrow" style={{ color: '#6c8f00' }}>From the blog</div>
            <h2 className="display">New ideas for a quieter kind of growth.</h2>
          </div>
          <Link className="ghost-button" to="/blog">See all posts</Link>
        </Reveal>
        <div className="blog-grid">
          {posts.map((post, index) => (
            <Reveal key={post.title} delay={index * .06}>
              <Link className={`blog-card ${post.accent}`} to="/blog">
                <div><div className="blog-card-category">{post.category}</div><h3>{post.title}</h3></div>
                <p>{post.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
