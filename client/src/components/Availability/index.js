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
    calendar: "",
    schedule: [],
  }
  // this.handleInputChange = this.handleInputChange.bind(this);
  // this.handleSubmit = this.handleSubmit.bind(this);
}

  componentDidMount() {
    this.validateCookie();
  }

  handleSubmit(event) {
    // let schedule = this.state.schedule;
    // // alert("Your availability has been submitted successfully!");
    // let ISOschedule = this.state.schedule.map(date => Moment(date).toISOString());
    // let newCalendar = this.state.schedule
    console.log(this.state.user);
    
    event.preventDefault();
    // API.updateAvailability(
    //   this.state.user.email,
    //   this.state.user.calendar,
    //   this.state.user.schedule,
    // );
  }


  handleChange = newSchedule => {
    this.setState({ schedule: newSchedule.map(date => Moment(date).toISOString()) })
  }

  validateCookie(res) {
    API.validateCookie()
    .then(res => res.json())
    .then(res => this.setState({ user: res}))
    .then(res => {
      console.log(this.state)
      console.log(this.state.user)
    })
    .catch(err => console.log(err));
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