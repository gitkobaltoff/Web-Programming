import React from "react";
import { Navbar, Nav} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

function NavBar(){
    let user = JSON.parse(localStorage.getItem('user-info'))
    const navigate = useNavigate();

    function logOut()
    {
        localStorage.clear();
        navigate("/register")
    }
    return(
        <div>
            <Navbar style={{ borderBottom: "solid #ff601f 3px" }} collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="/"><span className="logo">Q</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">


                <Nav className="me-auto">
                    {
                        localStorage.getItem('user-info') ?
                        <>
                        <Nav.Link style={{ color: "white", padding: "20px" }} href="/quizes">Quizzes</Nav.Link>
                        <Nav.Link style={{ color: "white", padding: "20px" }} href="/add">Create Quiz</Nav.Link>
                        <Nav.Link style={{ color: "white", padding: "20px" }} href="/aboutus">About Us</Nav.Link>
                        </>
                        :
                        <>
                        <Nav.Link style={{ color: "white" }} href="/register">Register</Nav.Link>
                        </>
                    }
                </Nav>
                {
                localStorage.getItem('user-info') ?

                    <Nav>
                        <NavDropdown style={{  }} className="float-md-right" title={user && user.surname}>
                            <NavDropdown.Item style={{ color: "black" }} onClick={logOut}>Log out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    :null
                }
                </Navbar.Collapse>

            </Navbar>
        </div>
    )
}

export default NavBar;