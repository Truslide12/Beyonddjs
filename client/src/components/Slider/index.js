import React, { Component } from "react";
import Slider from "react-slick";
import "./style.css";

class PauseOnHover extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <img src="./imgs/random.jpg" />
                    </div>
                    <div>
                        <img src="./imgs/dance.JPG" />
                    </div>
                    <div>
                        <img src="./imgs/club.jpg" />
                    </div>
                    <div>
                        <img src="./imgs/omfgnye.jpg" />
                    </div>
                    <div>
                        <img src="./imgs/marsh.jpg"/>
                    </div>
                    <div>
                        <img src="./imgs/entertainer.JPG" />
                    </div>
                </Slider>
            </div>
        );
    }
}

export default PauseOnHover;