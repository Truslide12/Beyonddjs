import React from "react";
import { Row, Col } from 'react-bootstrap';
import Availability from "../../components/Availability";
import "./Promoter.css";

function PromoHome() {
    return (
        <div>
            <Row>
                <Col>
                    <Availability />
                </Col>
            </Row>
        </div>
    );
}

export default PromoHome;