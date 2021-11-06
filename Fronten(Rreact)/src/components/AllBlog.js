import { Link } from 'react-router-dom';

const AllBlog = ({ blogs }) => {
  return (
    <div>
      {blogs.map(blog => (
        <div className="all-blog" key={blog.list} >
          <Link to={`/blog/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Author { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default AllBlog;