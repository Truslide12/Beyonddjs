import React, { Component, Fragment } from "react";
import cookie from 'react-cookies';
import { Redirect } from 'react-router-dom';
import Title from "../../components/Title/index";
import TestCalendar from "../../components/Calendar";
import PromoterPage from "../Promoter";
import API from "../../utils/API";

class Dashboard extends Component {
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
      firstInitial: '',
      lastInitial: ''
    };
  }

  componentDidMount() {
    this.validateCookie();
    // this.generateForm();

  }

  validateCookie() {
    const cookieValue = cookie.load('connect.sid');
    API.validateCookie(cookieValue)
      .then(res => {
        if (res.status === 200) {
          res.json().then(user => {
            this.setState({
              cookie: cookieValue,
              loading: false,
              email: user.email,
              role: user.role,
              firstName: user.firstName,
              lastName: user.lastName,
              city: user.city,
              state: user.state,
              zip: user.zip,
              phone: user.phone,
              calendar: user.calendar,
              firstInitial: user.firstName.charAt(0),
              lastInitial: user.lastName.charAt(0)
            });
          })
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

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    if (!this.state.cookie) {
      return <Redirect to='/login' />
    }
    if (this.state.role === 'Admin') {
    return (
      <Fragment>
        <Title>This is the Admin page</Title>
        <p>Hello: {this.state.firstName} {this.state.lastName}</p>
        <p>Email: {this.state.email}</p>
        <button id="logout" onClick={this.handleLogout} className="btn">LOG OUT</button>
      </Fragment>
    );
    }
    else if (this.state.role === 'Entertainer') {
    return (
      <Fragment>
        <Title>This is the Entertainer page</Title>
        <p>Hello: {this.state.firstName} {this.state.lastName}</p>
        <p>Email: {this.state.email}</p>
        <button id="logout" onClick={this.handleLogout} className="btn">LOG OUT</button>
      </Fragment>
    );
    }
    else if (this.state.role === 'PromoterVendor') {
      return (
        <Fragment>
          {/* <Title>This is the Promoter/Vendor page</Title>
          <p>Hello: {this.state.firstName} {this.state.lastName}</p>
          <p>Email: {this.state.email}</p>
          <button id="logout" onClick={this.handleLogout} className="btn">LOG OUT</button> */}
          <PromoterPage firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} handleLogout={this.handleLogout} firstInitial={this.state.firstInitial} lastInitial={this.state.lastInitial}/>
        </Fragment>
      );
      }
    else if (this.state.role) {
      return (
        <Fragment>
          <Title>This is the Client page</Title>
          <p>Hello: {this.state.emailfirstName} {this.state.lastName}</p>
          <p>Email: {this.state.email}</p>
          <TestCalendar />
          <button id="logout" onClick={this.handleLogout} className="btn">LOG OUT</button>
        </Fragment>
      );
      }
    return null;
  }
}

export default Dashboard;
