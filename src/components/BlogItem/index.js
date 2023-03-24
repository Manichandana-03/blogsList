// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogsList} = props
  const {title, description, publishedDate} = blogsList
  return (
    <li className="blog-item">
      <div className="blog-details-container">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-published-date">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
    </li>
  )
}

export default BlogItem
