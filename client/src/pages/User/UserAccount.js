import React, { Component, useState } from 'react';
import { Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import API from '../../utils/API';


function UserAccount() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            <Row>
                <Col className="p-0" id="accHead">
                    <div className="p-3">
                        <h2>Account Settings</h2>
                        <p className="p-0 mb-0" style={{ fontSize: "18px" }}>Change your basic account and address settings.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="p-4">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <h4 className="my-3 mb-4">YOUR INFO</h4>
                        <Form.Row className="my-2">
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Please enter your first name.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Please enter your last name.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row className="border-bottom border-secondary pb-4">
                            <Form.Group as={Col} md="5" controlId="validationCustomUsername">
                                <Form.Label>Email address</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid email.
                                    </Form.Control.Feedback>
                                </InputGroup>
                                <Form.Text className="text-muted"> We'll never share your email with anyone else. </Form.Text>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>Phone number</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid phone number.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>

                        <h4 className="mt-3 pt-4 mb-4">ADDRESS</h4>
                        <Form.Row className="my-2">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="City" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom04">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="State" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid state.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom05">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control type="text" placeholder="Zip" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid zip.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                            />
                        </Form.Group>
                        <Button type="submit" className="btn-success mx-0">Save</Button>
                    </Form>
                </Col>
            </Row>
        </>
    );
}

export default UserAccount;