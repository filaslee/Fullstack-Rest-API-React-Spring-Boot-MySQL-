import {Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

const Navigation = () => {
  return (
      <Navbar className="navbar" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img class="img1 img-fluid" src="assets/image/uni.png" alt=""/></Navbar.Brand>
        <Nav className="links">
          <Nav.Link as={Link} to="/">HomePage</Nav.Link>
          <Nav.Link as={Link} to="/create">Add New</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
 
export default Navigation;