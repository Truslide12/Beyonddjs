import React, { Component, Fragment } from "react";
import cookie from 'react-cookies';
import { Redirect } from 'react-router-dom';
import Title from "../../components/Title/index";
import TestCalendar from "../../components/Calendar";
import AdminPage from "../Admin";
import EntertainerPage from "../Entertainer";
import PromoterPage from "../Promoter";
import UserPage from "../User";
import API from "../../utils/API";
import { Row, Col } from 'react-bootstrap';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
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
    this.validateCookie();
    // this.generateForm();

  }

  validateCookie() {  
    API.validateCookie()
      .then(res => {
        if (res.status === 200) {
          res.json().then(user => {
            this.setState({
              loggedIn: true,
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
              lastInitial: user.lastName.charAt(0),
              viewAll: user.viewAll,
              canEdit: user.canEdit,
              canDelete: user.canDelete,
              stageName: user.stageName,
              img: user.img,
              summary: user.summary,
              genres: user.genres,
              links: user.links,
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
      .then(res => {
        if (res.ok) {
          window.location.reload();
        } else {
          throw new Error('Something happened while trying to logout');
        }
      })
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    if (!this.state.loggedIn) {
      return <Redirect to='/login' />
    }
    if (this.state.role === 'Admin') {
    return (
      <Fragment>
          <AdminPage firstName={this.state.firstName} 
            lastName={this.state.lastName} 
            email={this.state.email} 
            role={this.state.role}
            handleLogout={this.handleLogout} 
            firstInitial={this.state.firstInitial} 
            lastInitial={this.state.lastInitial}
            />
       </Fragment>
    );
    }
    else if (this.state.role === 'Entertainer') {
    return (
      <Fragment>
          <EntertainerPage firstName={this.state.firstName} 
            lastName={this.state.lastName} 
            role={this.state.role}
            email={this.state.email} 
            handleLogout={this.handleLogout} 
            firstInitial={this.state.firstInitial} 
            lastInitial={this.state.lastInitial}
            />
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
          <PromoterPage firstName={this.state.firstName} 
            lastName={this.state.lastName} 
            role={this.state.role}
            email={this.state.email} 
            handleLogout={this.handleLogout} 
            firstInitial={this.state.firstInitial} 
            lastInitial={this.state.lastInitial}
            />
        </Fragment>
      );
      }
    else if (this.state.role === "User") {
      return (
        <Fragment>
          <UserPage
          firstName={this.state.firstName} 
          lastName={this.state.lastName} 
          role={this.state.role}
          email={this.state.email} 
          handleLogout={this.handleLogout} 
          firstInitial={this.state.firstInitial} 
          lastInitial={this.state.lastInitial}
          />
          <Title>This is the Client page</Title>
          <p>Hello: {this.state.emailfirstName} {this.state.lastName}</p>
          <p>Email: {this.state.email}
          </p>
          <TestCalendar />
          <button id="logout" onClick={this.handleLogout} className="btn">LOG OUT</button>
        </Fragment>
      );
      }
    return null;
  }
}

export default Dashboard;
