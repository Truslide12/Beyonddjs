import React, { Component, Fragment } from "react";
import cookie from 'react-cookies';
import SideBar from '../../components/SideBar';
import PromoHome from "./PromoHome";
import PromoSearch from "./PromoSearch";
import PromoCreate from "./PromoCreate";
import PromoContact from "./PromoContact";
import PromoAccount from "./PromoAccount";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Redirect, Route, Switch } from 'react-router-dom';
import API from "../../utils/API";
import "./Promoter.css";
import Availability from "../../components/Availability";

class Basic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookie: null,
      loading: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // this will pass all state to 
  handleClick() {
    this.setState({
        sidbarPushCollapsed: !this.state.sidbarPushCollapsed,
        profileCollapsed: !this.state.profileCollapsed
      /// need to add the modified version of this to each page to each page <button type="button" id="sidbarPush" onClick={this.props.handleClick} profile={this.props.profileCollapsed}>
    });
}
  componentDidMount() {
    this.validateCookie();
  }

  validateCookie() {
    const cookieValue = cookie.load('connect.sid');
    API.validateCookie(cookieValue)
      .then(res => {
        if (res.status === 200) {
          this.setState({
            cookie: cookieValue,
            loading: false,
          });
        } else {
          this.setState({ loading: false });
        }
      })
      .catch(err => this.setState({ loading: false }))
  }

  handleLogout() {
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
          <SideBar firstName={this.props.firstName} lastName={this.props.lastName} firstInitial={this.props.firstInitial} lastInitial={this.props.lastInitial} />
          <Container fluid id="promoContent">
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

            <div>
              <Switch>
                <Route exact path="/dashboard/" component={PromoHome} />
                <Route exact path="/dashboard/promoter/search" component={PromoSearch} />
                <Route exact path="/dashboard/promoter/create" component={PromoCreate} />
                <Route exact path="/dashboard/promoter/contact" component={PromoContact} />
                <Route exact path="/dashboard/promoter/settings" component={PromoAccount} />
              </Switch>
            </div>
          </Container>
        </div>
        {/* <Title>This the Vendor/Promoter page</Title> */}
      </Fragment>
    );
  }
}

export default Basic;