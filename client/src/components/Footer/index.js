import React from "react";
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
    return (
        <footer>
            <div className="container-fluid" id="end">
                <Row>
                    <Col sm md lg={6} id="media">
                        <a><i className="fa fa-github" style={{ fontSize: "48px" }}></i></a>
                        <a><i className="fa fa-facebook-square" style={{ fontSize: "48px" }}></i></a>
                        <a><i className="fa fa-twitter" style={{ fontSize: "48px" }}></i></a>
                        <a><i className="fa fa-instagram" style={{ fontSize: "48px" }}></i></a>
                    </Col>
                    <Col sm md lg={3} id="links" className="mt-3">
                        <Link to="/about" className="float-right">ABOUT US</Link>
                        <br />
                        <Link to="/contact" className="float-right">CONTACT</Link>
                        <br />
                        <Link to="/faq" className="float-right">FAQ</Link>
                        {/* <Link to="/promoter/home" className="float-right">FAQ</Link> */}
                    </Col>
                    <Col sm md lg={3} className="mt-3">
                        <p className="BeyondDJ" className="m-0">BeyondDJ</p>
                        <p>&copy; 2019. All rights reserved.</p>
                    </Col>
                </Row>
            </div>
        </footer>
    );
}

export default Footer;