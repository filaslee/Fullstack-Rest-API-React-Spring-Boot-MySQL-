import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';

function EachBlog() {
  const { id } = useParams();
  const { data: blog, error } = useFetch('http://localhost:9090/blog/' + id);
  const history = useHistory();

  const handleClickDelete = () => {
    fetch('http://localhost:9090/blogs?id=' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    });
  };
  return (
    <div className="each-blog">
      {error && <div>{error}</div>}
      {blog && (
        <article className="article">
          <h2>{blog.title}</h2>
          <div>{blog.body}</div>
          <p>Author: {blog.author}</p>
          <Button variant="outline-danger" onClick={handleClickDelete}>Delete</Button>{' '}
          <Link to={`/blogupdate/${blog.id}`}><Button variant="outline-success">Edit</Button>{' '}</Link>
        </article>
      )}
    </div>
  );
}
 
export default EachBlog;