import React from 'react';
import NavBar from "../../components/NavBar";
import Slider from "../../components/Slider";
import UserBox from "../../components/UserBox";
import Footer from "../../components/Footer";
import { Container, Row, Col } from 'react-bootstrap';
// Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

class Home extends React.Component {

  render() {

    return (
      <>
        <Container fluid className="p-0">
          <NavBar />
          <Slider></Slider>
          <Row className="mt-5">
            <Col className="p-0">
              <UserBox src="./imgs/promoter.png" description="Concert Promoters" btn="Book Talent">
                Are you a Promoter looking to book a DJ? Join us to discover a natural born talent that fits best for you!
            </UserBox>
            </Col>
            <Col className="p-0">
              <UserBox src="./imgs/dj.png" description="Artists" btn="Find Gigs">Are you a DJ looking to join our platform? Find local and national gigs and touring opportunities</UserBox>
            </Col>
            <Col className="p-0">
              <UserBox src="./imgs/basic.png" description="General Users" btn="Register">Not an entertainer or a promoter but a music fanatic that wants to check what's in it for you?</UserBox>
            </Col>
          </Row>
        </Container>
        <Footer></Footer>
      </>
    );

  }

}

export default Home;
