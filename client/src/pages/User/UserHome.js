import React from "react";
import { Row, Col } from 'react-bootstrap';
import Availability from "../../components/Availability";
import "./User.css";

function UserHome() {
    return (
        <Row>
            <Col>
                <div>
                    <Row>
                        <Col className="p-3">
                            <h1 id="welcome"><span className="BeyondDJ p-3">WELCOME</span></h1>
                            <p>Here's your schedule for the week:</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Availability />
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
}

export default UserHome;