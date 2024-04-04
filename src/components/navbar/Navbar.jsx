import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navigation() {
  return (
    <Navbar className="navbar">
      <Container className="justify-content-space-between">
        <Navbar.Brand>QuieroPizza</Navbar.Brand>
        <div>
        <Link to="/" className="text-black ms-3 text-decoration-none">
          Home
        </Link>
        <Link to="/formulario" className="text-black ms-3 text-decoration-none">
          Contacto
        </Link>

        </div>
      </Container>
    </Navbar>
  );
}
