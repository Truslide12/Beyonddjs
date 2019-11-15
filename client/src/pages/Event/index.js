import React, { Component, Fragment } from "react";
import API from "../../utils/API";
import Title from "../../components/Title/index";
import Form from "../../components/EventForm/index";


class Event extends Component {
  constructor (props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      role: '',
      // firstName: '', need to add all data going to event form and need to figure out how to get email from session
      // lastName: '',
      // phone: '',
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
// need to create event function in API.js and need to finish adding all data to be passed to event function
    API.event(this.state.name, this.state.date, this.state.startTime) //, this.state.firstName, this.state.lastName, this.state.phone
      .then(res => res.json())
      .then(res => console.info(res))
      .catch(err => console.error(err));
  }
  // We need to have a selector that will load different forms based on the user role in /login
  render () {
    return (
        // add event html here and call form
      <Fragment>
        <Title>Search Entertainers</Title>
        <Form inputHandler={this.handleInputChange} submitHandler={this.handleSubmit} />
      </Fragment>
    );
  }
}

export default Event;
