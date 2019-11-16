import React, { Component } from 'react';

class TestCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
      duration: '1',
      eventType: 'Wedding'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    let date = this.state.date;
    let time = this.state.time;
    let duration = this.state.duration;
    let eventType = this.state.eventType;
    alert('A ' + eventType + ' DJ request was submitted for a ' + duration + ' hour set on ' + date + ' at '+ time + '.');
    event.preventDefault();
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
    this.setState({
      duration: event.target.value
    });
  }

  eventTypeChange = event => {
    this.setState({
      eventType: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.handleSubmit}>
          <input type='date' value={this.state.date} onChange={this.dateChange} />
          <input type='time' value={this.state.time} onChange={this.timeChange} />
          <select value={this.state.duration} onChange={this.durationChange}>
            <option value="1">1 hrs</option>
            <option value="2">2 hrs</option>
            <option value="3">3 hrs</option>
            <option value="4">4 hrs</option>
            <option value="5">5 hrs</option>
          </select>
          <select value={this.state.eventType} onChange={this.eventTypeChange}>
            <option value="Wedding">Wedding</option>
            <option value="Bar Mitzvah">Bar Mitzvah</option>
            <option value="Karaoke">Karaoke</option>
            <option value="Club/Bar">Club/Bar</option>
            <option value="Other Event">Other Event</option>
          </select>
          <button type="submit">Search for Available DJs</button>
        </form>
      </div>
    );
  }
}

export default TestCalendar;