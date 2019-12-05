// import React from "react";
import React, { Component } from "react";
import Moment from "moment";
import { Row, Col, Button } from "react-bootstrap";
import API from "../../utils/API";

class PromoterAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            id_: "",
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.validateCookie = this.validateCookie.bind(this);
        // this.componentDidMount = this.componentDidMount.bind(this)
    }

    // add handleUpdate

    // add handleChange

    // add validateCookie or isLoggedIn




    render() {
        return (
                <div className="wrapper">
                        <Row>
                            <Col className="p-0"
                                firstName={this.props.firstName}>First Name</Col>
                            <Col className="P-0"
                                lastName={this.props.lastName}>Last Name</Col>
                        </Row>
                        <Row>
                            <Col className="p-0"
                                email={this.props.email}>Email</Col>
                        </Row>
                        <Row>
                            <Col className="p-0"
                                email={this.props.city}>City</Col>
                        </Row>
                        <Row>
                            <Col className="p-0"
                                email={this.props.state}>State</Col>
                        </Row>
                        <Row>
                            <Col className="p-0"
                                email={this.props.zip}>Zip</Col>
                        </Row>
                        <Row>
                            <Col className="p-0"
                                email={this.props.phone}>Phone</Col>
                        </Row>
                        <Row>
                            <Col className="p-0"
                                email={this.props.stageName}>Stage Name</Col>
                        </Row>
                        <Row>
                            <Col className="p-0"
                                email={this.props.img}>Profile Image</Col>
                        </Row>
                        <Row>
                            <Col className="p-0"
                                email={this.props.summary}>Introduction</Col>
                        </Row>
                        <Row>
                            <Col className="p-0"
                                email={this.props.genres}>Genres</Col>
                        </Row>
                        <Row>
                            <Col className="p-0"
                                email={this.props.links}>Social Media</Col>
                        </Row>

                    <Row>
                        <Col>≈
                                <Button
                                    id="updateUser"
                                    onClick={this.handleUpdate}
                                    variant="secondary"
                                >
                                    <i className="fa fa-sign-out"></i>Update
                          </Button>
                          </Col>
                    </Row>
                </div>
        );
    }
}
export default PromoterAccount;
