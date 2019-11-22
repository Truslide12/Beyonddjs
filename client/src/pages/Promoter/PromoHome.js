import React from "react";
import { Row, Col } from 'react-bootstrap';
import "./Promoter.css";

function PromoHome() {
    return (
        <div>
            <Row>
                <Col>
                    <Row>
                        <Col className="p-3">
                            <h1 id="welcome"><span className="BeyondDJ p-3">WELCOME</span></h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className="text-center">Why Choose BeyondDJ?</h3>
                            <p className="mt-4">
                                We’re a passionate team of music and technology professionals based in Los Angeles, the epicenter of the music business. What gets us stoked every morning is connecting talent buyers find the right talent for their venue or event and helping musicians build their careers and pursue their passion. We’re proud to be part of the LA Tech community and we have deep roots in the music business. The world’s largest music labels, live music promoters, booking agencies and world-renowned venues are literally right down the street.
                                <br /><br />
                                Being socially responsible is part of our culture and inextricably linked to our mission. We strive to give back to the communities, both global and local, that made our company possible. We celebrate tolerance and diversity. Our goal is to nurture and inspire the human spirit, one gig at a time!
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col id="userFeatures">
                    <Row className="mt-5">
                        <Col className="mt-5">
                            <img src="https://pbs.twimg.com/profile_images/321037380/icon.png" style={{ width: "200px", height: "200px" }} className="float-left" />
                            <div className="userAccess">
                                <h3>Search Artists</h3>
                                <p>Explore our roster with hundreds of artists. Promote your venue and event. Get the quality administrative service.</p>
                            </div>
                            <br /><br />
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="my-5">
                            <img src="https://i.pinimg.com/originals/bd/f4/94/bdf494daa24aebd98fa153e559cf14d3.png" style={{ width: "250px", height: "250px" }} className="float-right" />
                            <div className="userAccess">
                                <h3>Create Events</h3>
                                <p className="p-0">Whether it’s a wedding, a concert, a music festival, a house party — virtually any structured event you can think of is just one click away to help you connect to all the artists round the world.</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default PromoHome;