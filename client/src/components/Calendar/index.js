import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { DataList, DataListItem } from "../DataList";
import "./Calendar.css";
import API from '../../utils/API';

class TestCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      date: '',
      time: '',
      duration: '1',
      eventType: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    let date = this.state.date;
    let time = this.state.time;
    let duration = this.state.duration;
    let eventType = this.state.eventType;
    alert('A ' + eventType + ' DJ request was submitted for a ' + duration + ' hour set on ' + date + ' at ' + time + '.');
    event.preventDefault();
    API.search()
      .then(res => res.json())
      .then(res => this.setState({ artists: res }))
      .then(res => {
        // console.log(res);
        console.log(this.state);
        console.log(this.state.artists);
      })
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
      <>
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
                        <input type='date' value={this.state.date} onChange={this.dateChange} />
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
                        <input type='time' value={this.state.time} onChange={this.timeChange} />
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
                        <select className="form-control" value={this.state.duration} onChange={this.durationChange} style={{ height: "46px" }}>
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
                        <select className="form-control" value={this.state.eventType} type="select" onChange={this.eventTypeChange} style={{ height: "46px" }}>
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
        <Row>
          <Col>
            <div id="artistSearchResults">
              <h3>Search Results:</h3>
              {!this.state.artists.length ? (
                <h1 className="text-center">No Match Results</h1>
              ) : (
                  <DataList>
                    {this.state.artists.map(artist => {
                      return (
                        <div className="my-2">
                          <DataListItem
                            firstName={artist.firstName}
                            lastName={artist.lastName}
                            email={artist.email}
                            genre={artist.genre}
                            city={artist.city}
                            state={artist.state}
                            zip={artist.zip}
                            calendar={artist.calendar}
                          >
                          </DataListItem>
                        </div>
                      );
                    })}
                  </DataList>
                )}
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default TestCalendar;