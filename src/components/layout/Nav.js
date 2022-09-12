import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, useNavigate } from "react-router-dom";
import  AuthContext  from "../../context/AuthContext"
import { useContext } from "react";


function NAV(){
    const [auth, setAuth] = useContext(AuthContext);

    const history = useNavigate();

    function logout() {
        setAuth(null);
        history("/")
    }

    return (

                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="/"><img src={"../../images/viken_logo.png"} alt="logo"></img>Viken BOLIGENTREPENØR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
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
                            {auth ? (
                                <>
                                    |<NavLink to="/admin" className="nav-link">
                                        Admin
                                    </NavLink> 
                                    | <button onClick={logout} className="logout">Log Out</button>
                                </>
                            ) : (
                                <NavLink to="/login" className="nav-link">
                                Login
                                </NavLink>
                            )}

                        </Nav>
                    </Navbar.Collapse>
                 </Navbar>
    );
}

export default NAV;