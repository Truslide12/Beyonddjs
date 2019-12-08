import React from "react";
import Calendar from "../../components/Calendar";
import { Row, Col } from 'react-bootstrap';

function EntertainerSearch() {
    return (
        <Row>
            <Col>
                <div>
                    <h1 className="BeyondDJ mt-3">Begin Your Search</h1>
                    <Calendar />
                </div>
            </Col>
        </Row>
    );
}

export default EntertainerSearch;