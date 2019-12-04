import React from "react";
import { Row, Col } from 'react-bootstrap';
import "./RegForm.css";
// Update this for each differnt role - we probably need different forms for the main registration then change the input values for each role
const AccountForm = ({ inputHandler, submitHandler }) => (
  <form className="form" id="accountForm" onSubmit={submitHandler}>
    <Row className="m-3">
      <Col className="pt-4">
        <div className="input-container">
          <input id="firstName" type="text" name="firstName" onChange={inputHandler} required />
          <span className="input-underline"></span>
          <label for="firstName" className="input-label text-center">first Name</label>
        </div>
      </Col>
      <Col className="pt-4">
        <div className="input-container">
          <input id="lastName" type="text" name="lastName" onChange={inputHandler} required />
          <span className="input-underline"></span>
          <label for="lastName" className="input-label">Last Name</label>
        </div>
      </Col>
    </Row>
    <Row className="m-3">
      <Col>
        <div className="input-container">
          <input id="email" type="text" name="email" onChange={inputHandler} required />
          <span className="input-underline"></span>
          <label for="email" className="input-label">Email</label>
        </div>
      </Col>
      <Col>
        <div className="input-container">
          <input id="password" type="password" name="password" onChange={inputHandler} required />
          <span className="input-underline"></span>
          <label for="password" className="input-label">Password</label>
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
    <Row className="m-3">
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
    <Row>
      <Col className="text-center">
        <button className="btn submit">SUBMIT</button>
      </Col>
    </Row>
  </form>
);

export default AccountForm;
