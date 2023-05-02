import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { userData, userout } from "../../userSlice";
import "../Navbar/NavbarPage.css"





export const NavbarPage = () => {

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(userout({ credentials: {}, token: "" }));
    };



    const dataCredentialsRdx = useSelector(userData);

    if (!dataCredentialsRdx.credentials.usuario) {

        return <Navbar className="fontStyle" bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">Art&Beauty AN</Navbar.Brand>
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
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>

                            <NavDropdown title="About" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/team">
                                    Team
                                </NavDropdown.Item>
                                <NavDropdown.Item  as={Link} to="/treatments">
                                    Treatments
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/services">
                                    Services
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    Our History
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">
                                    News
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/reviews">
                                    Reviews
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.7">
                                    Contact
                                </NavDropdown.Item>
                            </NavDropdown>
                        </>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    }
    if (dataCredentialsRdx.credentials.usuario.roles.includes('Admin')) {

        return <Navbar className="fontStyle" bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">Art&Beauty AN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <>
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/viewusers">
                                View users
                            </Nav.Link>
                            <Nav.Link as={Link} to="/viewadminapp">
                                View all appointments
                            </Nav.Link>
                            <Nav.Link as={Link} to="/roles">
                                View roles
                            </Nav.Link>
                            <Nav.Link as={Link} to="/profile">
                                Profile
                            </Nav.Link>
                            <NavDropdown title="About" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/team">
                                    Team
                                </NavDropdown.Item>
                                <NavDropdown.Item  as={Link} to="/treatments">
                                    Treatments
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    Services
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/services">
                                    Our History
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">
                                    News
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/reviews">
                                    Reviews
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.7">
                                    Contact
                                </NavDropdown.Item>
                            </NavDropdown>
                        </>
                        <Nav.Link onClick={logout} as={Link} to="/home">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    }

    if (dataCredentialsRdx.credentials.usuario.roles.includes('Stylist')) {

        return <Navbar className="fontStyle" bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">Art&Beauty AN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <>
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/profile">
                                Profile
                            </Nav.Link>
                            <Nav.Link as={Link} to="/viewapp">
                                View all appointments
                            </Nav.Link>
                            <Nav.Link as={Link} to="/usersbystylist">
                                Customers
                            </Nav.Link>
                            <NavDropdown title="About" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/team">
                                    Team
                                </NavDropdown.Item>
                                <NavDropdown.Item  as={Link} to="/treatments">
                                    Treatments
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/services">
                                    Services
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">
                                    Our History
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">
                                    News
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/reviews">
                                    Reviews
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.7">
                                    Contact
                                </NavDropdown.Item>
                            </NavDropdown>
                        </>
                        <Nav.Link onClick={logout} as={Link} to="/home">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    }
    if (dataCredentialsRdx.credentials.usuario.roles.includes('User')) {

        return <Navbar className="fontStyle" bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">Art&Beauty AN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <>
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/profile">
                                Profile
                            </Nav.Link>
                            <Nav.Link as={Link} to="/scheduleappointment">
                                Schedule appointment
                            </Nav.Link>
                            <Nav.Link as={Link} to="/appointments">
                                My appointments
                            </Nav.Link>
                            <Nav.Link as={Link} to="/updateprofile">
                                Update profile
                            </Nav.Link>
                            <NavDropdown title="About" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/team">
                                    Team
                                </NavDropdown.Item>
                                <NavDropdown.Item  as={Link} to="/treatments">
                                    Treatments
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/services">
                                    Services
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">
                                    Our History
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">
                                    News
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/reviews">
                                    Reviews
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.7">
                                    Contact
                                </NavDropdown.Item>

                            </NavDropdown>
                        </>
                        <Nav.Link onClick={logout} as={Link} to="/home">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    }

}



