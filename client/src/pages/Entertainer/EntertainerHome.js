// import React from "react";
// import Availability from "../../components/Availability";
import ScheduleSelector from 'react-schedule-selector'
import React, { Component } from 'react';
import Moment from 'moment';
import { Row, Col, Button } from 'react-bootstrap';
import API from '../../utils/API';

class EntertainerHome extends Component {
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
        // this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidUpdate() {
        this.validateCookie();
        console.log(this.state.user); // coming back empty because validate cookie is not passing data upstream
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.handleChange();
        // let newSchedule = this.state.schedule;
        // alert("Your availability has been submitted successfully!");
        let ISOschedule = this.state.schedule.map(date => Moment(date).toISOString());
        // let newCalendar = this.state.schedule
        console.log(this.state.schedule)
        console.log(ISOschedule);
        console.log(this.state._id);
        console.log(this.state.calendar);
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
        this.setState({ schedule: newSchedule }) //.map(date => Moment(date).toISOString()) 
        // console.log(this.state.schedule)
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
                        _is: res._id,
                        // calendar: res.calendar,
                    })
            })
            .catch(err => console.log(err))
            console.log(this.state.user) // coming back empty
    }

    render() {
        return (
            <div>
                <Row>
                    <Col className="p-3">
                        <h1 id="welcome">
                            <span className="BeyondDJ p-3">WELCOME</span>
                        </h1>
                        <p>Here's your schedule for the week:</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
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
                                        <Button type="submit" className="float-right">
                                            Submit Availability
                                        </Button>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default EntertainerHome;
