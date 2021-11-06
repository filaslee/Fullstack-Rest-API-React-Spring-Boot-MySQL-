import AllBlog from "./AllBlog";
import useFetch from "./useFetch";
import { Container} from 'react-bootstrap';
const HomePage = () => {
  const { error, data: blogs } = useFetch('http://localhost:9090/blogs')

  return (
    <Container className="home-page">
      { error && <div>{ error }</div> }
      { blogs && <AllBlog blogs={blogs} /> }
    </Container>
  );
  }
export default HomePage;
