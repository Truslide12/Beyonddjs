import React from "react";
import { Button, Row, Col } from 'react-bootstrap';
import "./style.css"

function UserBox(props) {
    return (
        <div className="bg-white m-4 text-center border userBox">
            <Row>
                <Col>
                    <h2 className="p-3 mt-2">{props.description}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={props.src} id="userBox" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button href="/login" id="userStartBtn">{props.btn}</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="mt-2">{props.children}</p>
                </Col>
            </Row>
        </div>
    );
}

export default UserBox;