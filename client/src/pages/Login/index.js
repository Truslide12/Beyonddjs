import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import NavBar from "../../components/NavBar";
import Title from "../../components/Title";
import Form from "../../components/Form";
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    API.login(this.state.email, this.state.password)
      .then(res => res.json())
      .then(res => console.info(res))
      .then(res => this.props.history.push('/dashboard'))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <div id="login">
          <Container>
            <Row>
              <Col>
                <div id="registerBox">
                  <h1 id="signUp">Sign Up Right Now!</h1>
                  <p id="regIntro">First Timer? Create an account with us to get access to one of the live music marketplace that makes it easy for talent buyers, event planners, venues and individuals to find, book, and pay musicians and bands. We dream of a world with more live music than ever because we’ve made it easy to find and book the right talent! What are you waiting for? Join us today!</p>
                  <Button href="/register" variant="light" className="m-0">REGISTER</Button>
                </div>
              </Col>
              <Col>
                <div id="loginBox">
                  <Title>Login</Title>
                  <Form inputHandler={this.handleInputChange} submitHandler={this.handleSubmit} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Login;
