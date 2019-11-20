import React, { Component, Fragment } from "react";
import API from "../../utils/API";
import Title from "../../components/Title/index";
import Form from "../../components/EventForm/index";
import NavBar from "../../components/NavBar";
import "./Event.css";


class Event extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      creator: '', 
      date: '',
      startTime: '', 
      endTime: '', 
      description: '', 
      city: '',
      state: '', 
      zip: '', 
      publicEvent: '', 
      phone: '', 
      maxEntertainers: '', 
      entsContacted: '', 
      entsConfirmed: '', 
      schedule: '',
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
    console.log(this.state)
// need to create event function in API.js and need to finish adding all data to be passed to event function
    API.createEvent(
      this.state.name, 
      this.state.creator, 
      this.state.date, 
      this.state.startTime,
      this.state.endTime, 
      this.state.description, 
      this.state.city, 
      this.state.state, 
      this.state.zip, 
      this.state.publicEvent, 
      this.state.phone, 
      this.state.maxEntertainers, 
      this.state.entsContacted, 
      // entsConfirmed, 
      // schedule
      ) 
      .then(res => res.json())
      .then(res => console.info(res))
      .catch(err => console.error(err));
  }
  // We need to have a selector that will load different forms based on the user role in /login
  render () {
    return (
        // add event html here and call form
      <Fragment>
        <NavBar />
        <div id="event">
        <Title>Create Event</Title>
        <Form inputHandler={this.handleInputChange} submitHandler={this.handleSubmit} />
        </div>      
      </Fragment>
    );
  }
}

export default Event;
