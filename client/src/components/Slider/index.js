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
                        <img src="./imgs/club.jpg" />
                    </div>
                    <div>
                        <img src="./imgs/blurry.JPG" />
                    </div>
                    <div>
                        <img src="./imgs/party.JPG" />
                    </div>
                    <div>
                        <img src="./imgs/toast.JPG" />
                    </div>
                    <div>
                        <img src="./imgs/wedDance.JPG" />
                    </div>
                </Slider>
            </div>
        );
    }
}

export default PauseOnHover;