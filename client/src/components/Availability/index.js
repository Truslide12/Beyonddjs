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
      id_: "",
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
    let ISOschedule = this.state.schedule.map(date => Moment(date).toISOString());
    // let newCalendar = this.state.schedule
    console.log(this.state.schedule)
    console.log(this.state.user);
    API.updateAvailability({
      "_id": this.state._id,
      "email": this.state.user.email, 
      "firstName": this.state.user.firstName, 
      "lastName": this.state.user.lastName, 
      "city": this.state.user.city, 
      "state": this.state.user.state, 
      "zip": this.state.user.zip, 
      "phone": this.state.user.phone,  
      "calendar": ISOschedule, 
      "stageName": this.state.user.stageName, 
      "img": this.state.user.img, 
      "summary": this.state.user.summary, 
      "genres": this.state.user.genres, 
      "links": this.state.user.links 
  })
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