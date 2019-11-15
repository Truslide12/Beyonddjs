import React, { Component, Fragment } from "react";
import cookie from 'react-cookies';
import { Redirect } from 'react-router-dom';
import Title from "../../components/Title/index";
import PromoterPage from "../Promoter";
import API from "../../utils/API";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookie: null,
      loading: true,
      email: '',
      password: '',
      role: '',
      firstName: '',
      lastName: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      calendar: [],
    };
  }

  componentDidMount() {
    this.validateCookie();
    // this.generateForm();
    console.log(this.session);
  }

  validateCookie() {
    const cookieValue = cookie.load('connect.sid');
    API.validateCookie(cookieValue)
      .then(res => {
        if (res.status === 200) {
          this.setState({ 
            cookie: cookieValue, loading: false,
            // email: user.email,
            // role: user.role,
            // firstName: user.firstName,
            // lastName: user.lastName,
            // phone: user.phone,
            // calendar: user.calendar,
          });
        } else {
          this.setState({ loading: false });
        }
      })
      .catch(err => this.setState({ loading: false }))
  }

  handleLogout () {
    API.logout()
      .then(res => this.props.history.push('/login'))
      .catch(err => console.error(err));
  }

  render(props) {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    if (!this.state.cookie) {
      return <Redirect to='/login' />
    }
    if (this.state.role === 'Admin') {
    return (
      <Fragment>
        <Title>This the Admin page</Title>
        <p>Hello: {props.email}</p>
        <button id="logout" onClick={this.handleLogout} className="btn">LOG OUT</button>
      </Fragment>
    );
    }
    else if (this.state.role === 'Entertainer') {
    return (
      <Fragment>
        <Title>This the Entertainer page</Title>
        <p>Hello: {props.email}</p>
        <button id="logout" onClick={this.handleLogout} className="btn">LOG OUT</button>
      </Fragment>
    );
    }
    else if (this.state.role === 'promoterVendor') {
    return (
      <Fragment>
        <PromoterPage />
      </Fragment>
    );
    }
    else
    if (this.state.role) {
      return (
        <Fragment>
          <Title>This the User page</Title>
          <p>Hello: {props.email}</p>
          <button id="logout" onClick={this.handleLogout} className="btn">LOG OUT</button>
        </Fragment>
      );
      }
  }
}

export default Dashboard;
