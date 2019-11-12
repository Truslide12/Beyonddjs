import React from 'react';
import { Link } from "react-router-dom";
import Title from "../components/Title";
import Slider from "../components/Slider";
import UserBox from "../components/UserBox";
import { Container, Row, Col, Nav, Navbar, Button, ButtonToolbar } from 'react-bootstrap';
// Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

class Home extends React.Component {

  render() {

    return (
      <Container fluid className="p-0">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/" id="BeyondDJ"><span><img src="./imgs/disco.png" alt="disco ball" id="disco"/></span>&nbsp;&nbsp;BeyondDJ</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <ButtonToolbar>
                <Button href="/login" variant="outline-light">Log In</Button>
                <Button href="/register" variant="outline-light">Sign Up</Button>
              </ButtonToolbar>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Slider></Slider>
        <Row className="mt-5">
          <Col className="p-0">
            <UserBox src="./imgs/promoter.png" description="Are you a Promoter looking to book a DJ?" btn="Book Talent">
              Concert Promoters
            </UserBox>
          </Col>
          <Col className="p-0">
            <UserBox src="./imgs/dj.png" description="Are you a DJ looking to join our platform?" btn="Find Gigs">Artists</UserBox>
          </Col>
          <Col className="p-0">
            <UserBox src="./imgs/basic.png" description="Are you a DJ looking to join our platform?" btn="Register">Basic Users</UserBox>
          </Col>
        </Row>
      </Container>
    );

  }

}

export default Home;
