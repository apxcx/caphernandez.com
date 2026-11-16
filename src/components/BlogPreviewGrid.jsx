import { posts } from '../data/content'

const postMap = Object.fromEntries(posts.map((post) => [post.category, post]))

export default function BlogPreviewGrid() {
  const featured = [postMap['NEWS AND EVENTS'], postMap.PODCASTS, postMap.BLOG]

  return <section className="blog" id="Blog">
    <div className="blog-section-container">
      <div className="blog-columns">
        <div className="blog-intro-column">
          <div className="blog-display">From the <span>Blog</span></div>
          <a className="blog-see-all" href="#Blog">SEE ALL POSTS</a>
        </div>
        <div className="blog-featured-column">
          {featured.map((post, index) => <article className="blog-featured-item" key={post.title}>
            <div className={`blog-featured-category${index === 0 ? ' blog-featured-category-first' : ''}`}>{post.category}</div>
            <div className="blog-featured-title">{post.title}</div>
            <div className="blog-featured-divider" aria-hidden="true" />
          </article>)}
        </div>
      </div>
    </div>
  </section>
}
