import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import API from "../../utils/API";
import Title from "../../components/Title";
import Form from "../../components/Form";
import "./Register.css";

class Register extends Component {
  constructor (props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      role: '',
      phone: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange (event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit (event) {
    event.preventDefault();

    API.register(this.state.username, this.state.password, this.state.firstName, this.state.lastName, this.state.role, this.state.phone)
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
        <Form inputHandler={this.handleInputChange} submitHandler={this.handleSubmit} />
        <Link to="/login" class="link-to-register">Already have an account? Login here</Link>
        </div>
      </Fragment>
    );
  }
}

export default Register;
