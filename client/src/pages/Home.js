import React from 'react';
import { Link } from "react-router-dom";
import Title from "../components/Title";
import Nav from "../components/Nav";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import "./Home.css";

// const Home = () => (
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  }

class Home extends React.Component {

  
  render() {
    
   
    return (
      <div class="autoplay slider">
       <Nav/>  
      <Title>Beyond Djs</Title>
      <Slider {...settings}>
        <div>
          <img
              src="http://placehold.it/960x300?text=1-960w 960w"   
          />
        </div>
        <div>
        <img
              src="http://placehold.it/960x300?text=1-960w 960w"   
          />
        </div>
        <div>
        <img
              src="http://placehold.it/960x300?text=1-960w 960w"   
          />
        </div>
        <div>
        <img
              src="http://placehold.it/960x300?text=1-960w 960w"   
          />
        </div>
        <div>
        <img
              src="http://placehold.it/960x300?text=1-960w 960w"   
          />
        </div>
        <div>
        <img
              src="http://placehold.it/960x300?text=1-960w 960w"   
          />
        </div>
      </Slider>
      {/* <button class="btn"><Link to="/login">ENTER</Link></button> */}
      </div>
    );
  }
    
  }
//)

export default Home;
