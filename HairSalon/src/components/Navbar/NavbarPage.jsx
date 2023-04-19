import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";




export const NavbarPage = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
    <Container>
        <Navbar.Brand as={Link} to="/home">Artistic Space AN</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto"> 
        <>
            <Nav.Link as={Link} to="/register">
                Register
        </Nav.Link>
            <Nav.Link as={Link} to="/login">
                Login
            </Nav.Link>
        <Nav.Link as={Link} to="/home">
                Home
        </Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                    Salon
                </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
                        Team
                </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
                        Treatments
                </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
                        Services
                </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">
                        Our History
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                        News
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">
                        Reviews
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">
                        Contact
                </NavDropdown.Item>
            <NavDropdown.Divider />
    </NavDropdown>
            </>
        </Nav>
    </Navbar.Collapse>
</Container>
</Navbar>
  )
}
