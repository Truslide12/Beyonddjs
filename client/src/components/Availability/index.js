import ScheduleSelector from 'react-schedule-selector'
import React, { Component } from 'react';
import Moment from 'moment';
import { Row, Col, Button } from 'react-bootstrap';
import API from '../../utils/API';

class Availability extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    loading: true,
    email: "",
    calendar: [],
    schedule: [],
  }
}

  }

  componentDidMount() {
    this.validateCookie();
  }

  handleSubmit(event) {
    let schedule = this.state.schedule;
    // alert("Your availability has been submitted successfully!");
    let ISOschedule = schedule.map(date => Moment(date).toISOString());
    let newCalendar = (this.calendar.concat(ISOschedule));
    console.log(this.state);
    
    event.preventDefault();
    API.updateAvailability(
      this.state.email,
      this.state.calendar,
      newCalendar,
    );
  }


  handleChange = newSchedule => {
    this.setState({ schedule: newSchedule })
  }

  validateCookie() {
    API.validateCookie()
      .then(res => {
        if (res.status === 200) {
          res.json().then(user => {
            this.setState({
              loggedIn:true,
              loading: false,
              email: user.email,
              calendar: user.calendar,
            });
          })
          .then(console.log(this.state)
          )

        } else {
          this.setState({ loading: false });
        }
      })
      .catch(err => this.setState({ loading: false }))
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