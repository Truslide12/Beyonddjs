import React, { Component } from 'react';

class TestCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
      duration: '1'
    };
  }

  dateChange = event => {
    this.setState({
      date: event.target.value
    });
  }

  timeChange = event => {
    this.setState({
      time: event.target.value
    });
  }

  durationChange = event => {
    console.info(event)
    this.setState({
      duration: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input type='date' value={this.state.date} onChange={this.dateChange} />
        <input type='time' value={this.state.time} onChange={this.timeChange} />
        <select value={this.state.duration} onChange={this.durationChange}>
          <option value="1">1 hrs</option>
          <option value="2">2 hrs</option>
          <option value="3">3 hrs</option>
          <option value="4">4 hrs</option>
          <option value="5">5 hrs</option>
        </select>
      </div>
    );
  }
}

export default TestCalendar;