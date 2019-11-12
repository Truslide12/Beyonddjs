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
                        <img src="./imgs/random.jpg" />
                    </div>
                    <div>
                        <img src="./imgs/random.jpg" />
                    </div>
                    <div>
                        <img src="./imgs/random.jpg" />
                    </div>
                    <div>
                        <img src="http://placehold.it/960x300?text=1-960w 960w" />
                    </div>
                    <div>
                        <img src="http://placehold.it/960x300?text=1-960w 960w" />
                    </div>
                </Slider>
            </div>
        );
    }
}

export default PauseOnHover;