import ScheduleSelector from 'react-schedule-selector'
import React, { Component } from 'react';

class Availability extends React.Component {
  constructor(props) {
    super(props);
    this.state = { schedule: [] }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    let schedule = this.state.schedule;
    alert("Your availability has been submitted successfully: " + schedule);
    event.preventDefault();
  }

  handleChange = newSchedule => {
    this.setState({ schedule: newSchedule })
  }

  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.handleSubmit}>
          <button type="submit">Submit Availability</button>
        </form>
        <ScheduleSelector
          selection={this.state.schedule}
          numDays={7}
          minTime={0}
          maxTime={23}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Availability;