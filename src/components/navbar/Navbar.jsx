import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navigation() {
  return (
    <Navbar className="navbar">
      <Container className="justify-content-start">
        <Navbar.Brand>QuieroPizza</Navbar.Brand>
        <Link to="/" className="text-white ms-3 text-decoration-none">
          Home
        </Link>
        <Link to="/pizzas" className="text-white ms-3 text-decoration-none">
          Pizzas
        </Link>
      </Container>
    </Navbar>
  );
}
