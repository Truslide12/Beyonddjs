import ScheduleSelector from 'react-schedule-selector'
import React, { Component } from 'react';
import Moment from 'moment';
import { Row, Col, Button } from 'react-bootstrap';

class Availability extends React.Component {
  constructor(props) {
    super(props);
    this.state = { schedule: [] }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    let schedule = this.state.schedule;
    alert("Your availability has been submitted successfully!");
    let ISOschedule = schedule.map(date => Moment(date).toISOString());
    console.log(ISOschedule);
    event.preventDefault();
  }


  handleChange = newSchedule => {
    this.setState({ schedule: newSchedule })
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