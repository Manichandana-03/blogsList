// Write your JS code here
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  //
  return (
    <ul className="blog-list">
      {blogsList.map(each => (
        <BlogItem blogsList={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList
