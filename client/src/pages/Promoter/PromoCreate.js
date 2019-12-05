import React from "react";
import Calendar from "../../components/Calendar";
import EventForm from "../../components/EventForm"
import { Row, Col } from 'react-bootstrap';

function PromoCreate() {
    return (
        <Row>
            <Col>
                <div className="promoContent">
                    <h1 className="BeyondDJ">Create Event</h1>
                    <EventForm />
                    <div id="artistSearchResults"></div>
                </div>
            </Col>
        </Row>
    );
}

export default PromoCreate;