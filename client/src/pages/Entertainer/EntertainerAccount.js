// import React from "react";
import React,{ Component } from "react";
import Moment from "moment";
import { Row, Col, Button } from "react-bootstrap";
import API from "../../utils/API";

class EntertainerAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            id_: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.validateCookie = this.validateCookie.bind(this);
        // this.componentDidMount = this.componentDidMount.bind(this)
    }

    // add handleUpdate
    handleUpdate = (event) => {
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

    // Handle Changed
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value },
          () => { this.validateField(name, value) });
      }

    // get user info
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
                        _id: res._id,
                    })
            })
            .catch(err => console.log(err))
            console.log(this.state.user) // coming back empty
    }

    render() {
        return (
                <div className="wrapper">
                        <Row>
                            <Col className="p-0"
                                firstName={this.state.user.firstName}>First Name</Col>
                            <Col className="P-0"
                                lastName={this.state.user.lastName}>Last Name</Col>
                        </Row>
                        <Row>
                            <Col className="p-0"
                                email={this.props.user.email}>Email</Col>
                        </Row>
                        <Row>
                            <Col className="p-0"
                                city={this.props.user.city}>City</Col>
                        </Row>
                        <Row>
                            <Col className="p-0"
                                state={this.props.user.state}>State</Col>
                        </Row>
                        <Row>
                            <Col className="p-0"
                                zip={this.props.user.zip}>Zip</Col>
                        </Row>
                        <Row>
                            <Col className="p-0"
                                phone={this.props.users.phone}>Phone</Col>
                        </Row>
                        <Row>
                            <Col className="p-0"
                                stageName={this.props.user.stageName}>Stage Name</Col>
                        </Row>
                        <Row>
                            <Col className="p-0"
                                img={this.props.user.img}>Profile Image</Col>
                        </Row>
                        <Row>
                            <Col className="p-0"
                                summary={this.props.users.summary}>Introduction</Col>
                        </Row>
                        <Row>
                            <Col className="p-0"
                                genres={this.props.user.genres}>Genres</Col>
                        </Row>
                        <Row>
                            <Col className="p-0"
                                links={this.props.user.links}>Social Media</Col>
                        </Row>

                    <Row>
                        <Col>≈
                                <Button
                                    id="updateUser"
                                    onClick={this.handleUpdate}
                                    variant="secondary"
                                >
                                    <i className="fa fa-update"></i>Update
                          </Button>
                          </Col>
                    </Row>
                </div>
        );
    }
}
export default EntertainerAccount;
