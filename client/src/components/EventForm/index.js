import React from "react";
import { Row, Col } from 'react-bootstrap';
import "./Form.css";
const Form = ({ inputHandler, submitHandler }) => (
    <form className="form" id="eveForm" onSubmit={submitHandler}>
        <Row className="m-4">
            <Col>
                <div className="input-container">
                    <input id="name" type="text" name="name" onChange={inputHandler} required />
                    <span className="input-underline"></span>
                    <label for="name" className="input-label">Event Name</label>
                </div>
            </Col>
            <Col>
                <div className="input-container">
                    <input id="description" type="description" name="description" onChange={inputHandler} required />
                    <span className="input-underline"></span>
                    <label for="description" className="input-label">description</label>
                </div>
            </Col>
            <Col>
                <div className="input-container">
                    <input id="maxEntertainers" type="number" name="maxEntertainers" onChange={inputHandler} required />
                    <span className="input-underline"></span>
                    <label for="maxEntertainers" className="input-label">maxEntertainers</label>
                </div>
            </Col>
        </Row>
        <Row className="m-4">
            <Col>
                <div className="input-container">
                    <input id="date" type="date" name="date" onChange={inputHandler} required />
                    <span className="input-underline"></span>
                    <label for="date" className="input-label">Date</label>
                </div>
            </Col>
            <Col>
                <div className="input-container">
                    <input id="startTime" type="text" name="startTime" onChange={inputHandler} required />
                    <span className="input-underline"></span>
                    <label for="startTime" className="input-label">Start Time</label>
                </div>
            </Col>
            <Col>
                <div className="input-container">
                    <input id="endTime" type="text" name="endTime" onChange={inputHandler} required />
                    <span className="input-underline"></span>
                    <label for="endTime" className="input-label">End Time</label>
                </div>
            </Col>

        </Row>
        <Row className="m-4">
            <Col>
                <div className="input-container">
                    <input id="city" type="text" name="city" onChange={inputHandler} required />
                    <span className="input-underline"></span>
                    <label for="city" className="input-label">city</label>
                </div>
            </Col>
            <Col>
                <div className="input-container">
                    <input id="state" type="text" name="state" onChange={inputHandler} required />
                    <span className="input-underline"></span>
                    <label for="state" className="input-label">state</label>
                </div>
            </Col>
            <Col>
                <div className="input-container">
                    <input id="zip" type="text" name="zip" onChange={inputHandler} required />
                    <span className="input-underline"></span>
                    <label for="zip" className="input-label">zip</label>
                </div>
            </Col>
        </Row>
        <Row className="m-4">
            <Col>
                <div className="input-container">
                    <select id="publicEvent" type="boolean" name="publicEvent" onChange={inputHandler}>
                        <option value="0">Public Event:</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </select>
                </div>
            </Col>
            <Col>
                <div className="input-container">
                    <input id="creator" type="text" name="creator" onChange={inputHandler} required />
                    <span className="input-underline"></span>
                    <label for="creator" className="input-label">Contact</label>
                </div>
            </Col>
            <Col>
                <div className="input-container">
                    <input id="phone" type="text" name="phone" onChange={inputHandler} required />
                    <span className="input-underline"></span>
                    <label for="phone" className="input-label">phone</label>
                </div>
            </Col>
        </Row>
        <Row>
            <Col className="text-center">
                <button className="btn submit">SUBMIT</button>
            </Col>
        </Row>
    </form>
);
export default Form;
