import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import NavBar from "../../components/NavBar";
import Title from "../../components/Title";
import Form from "../../components/LoginForm";
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./Login.css";
import { FormErrors } from "./FormErrors";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value },
    () => { this.validateField(name, value) });
  }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
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
              <Col sm={12} lg={6}>
                <div id="registerBox">
                  <h1 id="signUp">Sign Up Right Now!</h1>
                  <p id="regIntro">First Timer? Create an account with us to get access to one of the live music marketplace that makes it easy for talent buyers, event planners, venues and individuals to find, book, and pay musicians and bands. We dream of a world with more live music than ever because we’ve made it easy to find and book the right talent! What are you waiting for? Join us today!</p>
                  <Button href="/register" variant="light" className="m-0 text-dark">REGISTER</Button>
                </div>
              </Col>
              <Col sm={12} lg={6}>
                <div id="loginBox">
                  <FormErrors formErrors={this.state.formErrors} />
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
