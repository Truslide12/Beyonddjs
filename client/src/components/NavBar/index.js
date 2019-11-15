import React from 'react';
import { Nav, Navbar, Button, ButtonToolbar } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/" id="BeyondDJ"><span><img src="./imgs/disco.png" alt="disco ball" id="disco" /></span>&nbsp;BeyondDJ</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    <ButtonToolbar>
                        <Button href="/login" variant="outline-light" style={{ fontSize: "20px" }}><i class="fa fa-user-circle" style={{ fontSize: "20px" }}></i>&nbsp;&nbsp;Log In</Button>
                    </ButtonToolbar>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;