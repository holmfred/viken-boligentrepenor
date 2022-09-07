import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

function NAV(){
    return (
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="/"><img src={"../../images/viken_logo.png"} alt="logo"></img><p>Viken BOLIGENTREPENØR</p></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavLink to="/services" className="nav-link">
                                Tjenester
                            </NavLink>
                            <NavLink to="/references" className="nav-link">
                                 Referanser
                            </NavLink>
                            <NavLink to="/about" className="nav-link">
                                Om Oss
                            </NavLink>
                            <NavLink to="/contact" className="nav-link">
                                Kontakt Oss
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                 </Navbar>
    );          
}

export default NAV;