import ScheduleSelector from 'react-schedule-selector'
import React, { Component } from 'react';
import Moment from 'moment';
import { Row, Col, Button } from 'react-bootstrap';
import API from '../../utils/API';

class Availability extends Component {
  constructor(props) {
    super(props);
    this.state = {
    user: [],
    email: "",
    calendar: [],
    schedule: [],
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.validateCookie = this.validateCookie.bind(this);
}

  componentDidMount() {
    this.validateCookie();
    console.log(this.state.user); // coming back empty because validate cookie is not passing data upstream
  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.handleChange();
    // let schedule = this.state.schedule;
    // // alert("Your availability has been submitted successfully!");
    // let ISOschedule = this.state.schedule.map(date => Moment(date).toISOString());
    // let newCalendar = this.state.schedule
    console.log(this.state.schedule)
    console.log(this.state.user);
    API.updateAvailability( this.state.user.email, this.state.user.firstName, this.state.user.lastName, this.state.user.city, this.state.user.state, this.state.user.zip, this.state.user.phone,  this.state.schedule, this.state.user.viewAll, this.state.user.canEdit, this.state.user.canDelete, this.state.user.stageName, this.state.user.img, this.state.user.summary, this.state.user.genres, this.state.user.links )
      .then(r => {
        console.log(r);
    }).catch(e => {
      console.log(e);
    })
  }
  
  
  handleChange = newSchedule => {
    console.log(this.state.schedule)
    this.setState({ schedule: newSchedule}) //.map(date => Moment(date).toISOString()) 
    console.log(this.state.schedule)
  }

  validateCookie() {
    API.validateCookie()
    .then(res => res.json())
    .then(res => {
      console.log(res)
      return res
      // console.log(this.state) // coming back with loading data aka empty 
      // console.log(this.state.user) // coming back with all appropriate data
    })
    .then(res => {
      console.log(res);
      this.setState(
        { 
          user: res,
          email: res.email,
          calendar: res.calendar,
        })
      })
    .catch(err => console.log(err));
    console.log(this.state.user) // coming back empty
  }

  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.handleSubmit}>
          <ScheduleSelector
            selection={this.state.schedule}
            numDays={7}
            minTime={0}
            maxTime={23}
            onChange={this.handleChange}
          />
          <Row>
            <Col>
              <Button type="submit" className="float-right">Submit Availability</Button>
            </Col>
          </Row>
        </form>
      </div>
    )
  }
}

export default Availability;