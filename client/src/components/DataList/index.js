import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

export function DataList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

export function DataListItem({
    firstName, lastName, email, genre, city, state, zip, calendar
}) {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    {/* <Col size="xs-4 sm-2">
                        <Thumbnail src={thumbnail} />
                    </Col> */}
                    <Col size="xs-8 sm-9">
                        <h3>{firstName} {lastName}</h3>
                        <h5>{genre}</h5>
                        <p>{email}</p>
                        <p><b>Based In:</b> {city} {state} {zip}</p>
                        <p>Time Not Availible: {calendar}</p>
                    </Col>
                </Row>
            </Container>
        </li>
    );
}