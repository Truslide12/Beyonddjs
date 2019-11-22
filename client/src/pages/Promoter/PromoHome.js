import React from "react";
import { Row, Col } from 'react-bootstrap';
import Availability from "../../components/Availability";
import "./Promoter.css";

function PromoHome() {
    return (
        <div>
            <Row>
                <Col className="p-3">
                    <h1 id="welcome"><span className="BeyondDJ p-3">WELCOME</span></h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Availability />
                </Col>
            </Row>
        </div>
    );
}

export default PromoHome;