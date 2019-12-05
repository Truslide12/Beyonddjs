import React, { Component, Fragment } from "react";
import cookie from 'react-cookies';
import SideBar from '../../components/SideBar';
import EntertainerHome from "./EntertainerHome";
import EntertainerSearch from "./EntertainerSearch";
import EntertainerCreate from "./EntertainerCreate";
import EntertainerAccount from "./EntertainerAccount";
import EntertainerContact from "./EntertainerContact";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Redirect, Route, Switch } from 'react-router-dom';
import API from "../../utils/API";
import "./Entertainer.css";
import Availability from "../../components/Availability";

class Basic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookie: null,
      loading: true,
      email: '',
      role: '',
      firstName: '',
      lastName: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      calendar: [],
      viewAll: '',
      canEdit: '',
      canDelete: '',
      firstInitial: '',
      lastInitial: '',
      stageName: '',
      img: '',
      summary: '',
      genres: [],
      links: [],
    };
  }

  componentDidMount() {
    this.isLoggedIn();
  }

  validateCookie() {
    const cookieValue = cookie.load('connect.sid');
    API.validateCookie(cookieValue)
      .then(res => {
        if (res.status === 200) {
          this.setState({ 
            cookie: cookieValue, 
            loading: false,
            email: res.user.email,
            role: res.user.role,
            firstName: res.user.firstName,
            lastName: res.user.lastName,
            city: res.user.city,
            state: res.user.state,
            zip: res.user.zip,
            phone: res.user.phone,
            calendar: res.user.calendar,
            firstInitial: res.user.firstName.charAt(0),
            lastInitial: res.user.lastName.charAt(0),
            viewAll: res.user.viewAll,
            canEdit: res.user.canEdit,
            canDelete: res.user.canDelete,
            stageName: res.user.stageName,
            img: res.user.img,
            summary: res.user.summary,
            genres: res.user.genres,
            links: res.user.links,
          });
        } else {
          this.setState({ loading: false });
        }
      })
      .catch(err => this.setState({ loading: false }))
  }

  handleLogout () {
    API.logout()
      .then(res => {
        if (res.ok) {
          window.location.reload();
        } else {
          throw new Error('Something happened while trying to logout');
        }
      })
      .catch(err => console.error(err));
  }

  handleCollapse = () => {
    document.getElementById('sidebar').classList.toggle('active');
  };

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    if (!this.state.cookie) {
      return <Redirect to='/login' />
    }
    return (
      <Fragment>
        <div className="wrapper">
          <SideBar 
            firstName={this.props.firstName} 
            lastName={this.props.lastName} 
            role={this.props.role}
            firstInitial={this.props.firstInitial} 
            lastInitial={this.props.lastInitial}
            homeLink={this.props.homeLink}
            />
          <Container fluid id="EntertainerContent">
            <Row>
              <Col className="p-0">
                <div id="content">
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <p className="mt-3 text-secondary float-left" onClick={this.handleCollapse}>
                      <i className="fa fa-bars"></i>
                    </p>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                      data-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent"
                      aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                      <ul className="navbar-nav">
                        <li className="nav-item active">
                          <Button id="logout" onClick={this.handleLogout} variant="secondary"><i className="fa fa-sign-out"></i>LOG OUT</Button>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Switch>
                  <Route exact path="/dashboard/entertainer/home" component={EntertainerHome} />
                  <Route exact path="/dashboard/entertainer/search" component={EntertainerSearch} />
                  <Route exact path="/dashboard/entertainer/create" component={EntertainerCreate} />
                  <Route exact path="/dashboard/entertainer/account" component={EntertainerAccount} />
                  <Route exact path="/dashboard/entertainer/contact" component={EntertainerContact} />
                </Switch>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <Title>This the Vendor/Entertianer page</Title> */}
      </Fragment>
    );
  }
}

export default Basic;