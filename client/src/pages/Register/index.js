import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import API from "../../utils/API";
import Title from "../../components/Title";
import Form from "../../components/RegForm";
import "./Register.css";
import { FormErrors } from "../Login/FormErrors";


class Register extends Component {
  constructor (props) {
    super(props);
    this.state = {
      roll: '',
      firstName: '',
      lastName: '',
      email:'',
      password: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
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
  handleSubmit (event) {
    event.preventDefault();

    API.register(this.state.email, this.state.password, this.state.role, this.state.firstName, this.state.lastName, this.state.city, this.state.state, this.state.zip, this.state.phone)
      .then(res => res.json())
      .then(res => console.info(res))
      .catch(err => console.error(err));
  }
  // We need to have a selector that will load different forms based on the user role
  render () {
    return (
      <Fragment>
        <NavBar />
        <div id="register">
        <Title>Register</Title>
        <FormErrors formErrors={this.state.formErrors} />
        <Form inputHandler={this.handleInputChange} submitHandler={this.handleSubmit} />
        <Link to="/login" class="link-to-register">Already have an account? Login here</Link>
        </div>
      </Fragment>
    );
  }
}

export default Register;
