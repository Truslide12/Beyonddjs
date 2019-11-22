import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import "./Calendar.css";
import API from '../../utils/API';

class TestCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
      duration: '1',
      eventType: '',
      artists: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({
      [name]: value
    });
    alert('A ' + eventType + ' DJ request was submitted for a ' + duration + ' hour set on ' + date + ' at ' + time + '.');
    event.preventDefault();
    API.search()
      .then(res => this.setState({ artists: res.data}))
      .catch(err => console.log(err));
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
      <Row className="mt-4">
        <Col>
          <div>
            <form ref="form" onSubmit={this.handleSubmit}>
              <Row className="mt-2">
                <Col>
                  <Row>
                    <Col>
                      <label>MONTH/DATE/YEAR:</label>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="calInput p-0 rounded">
                      <input name='date' value={this.state.date} onChange={this.dateChange} />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <label>HH:MM AM/PM</label>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="calInput rounded">
                      <input name='time' value={this.state.time} onChange={this.timeChange} />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <label>Hours of Availability:</label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <select className="form-control" value={this.state.duration} name="duration" onChange={this.durationChange} style={{height:"46px"}}>
                        <option value="1">1 hrs</option>
                        <option value="2">2 hrs</option>
                        <option value="3">3 hrs</option>
                        <option value="4">4 hrs</option>
                        <option value="5">5 hrs</option>
                      </select>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <label>Event Type:</label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <select className="form-control" name="eventType" value={this.state.eventType} type="select" onChange={this.eventTypeChange} style={{height:"46px"}}>
                        <option value="Choose">Choose...</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Bar Mitzvah">Bar Mitzvah</option>
                        <option value="Karaoke">Karaoke</option>
                        <option value="Club/Bar">Club/Bar</option>
                        <option value="Other Event">Other Event</option>
                      </select>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button variant="info" className="float-right" type="submit">Search Available DJs</Button>
                </Col>
              </Row>
            </form>
          </div>
        </Col>
      </Row>
    );
  }
}

export default TestCalendar;