import React, { Component, Fragment } from "react";
import cookie from 'react-cookies';
import SideBar from '../../components/SideBar';
import { Redirect } from 'react-router-dom';
import Title from "../../components/Title";
import API from "../../utils/API";
import "./Promoter.css";

class Basic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookie: null,
      loading: true
    };
  }

  componentDidMount() {
    this.validateCookie();
  }

  validateCookie() {
    const cookieValue = cookie.load('connect.sid');
    API.validateCookie(cookieValue)
      .then(res => {
        if (res.status === 200) {
          this.setState({ cookie: cookieValue, loading: false });
        } else {
          this.setState({ loading: false });
        }
      })
      .catch(err => this.setState({ loading: false }))
  }

  handleLogout() {
    API.logout()
      .then(res => this.props.history.push('/login'))
      .catch(err => console.error(err));
  }

  render() {
    // if (this.state.loading) {
    //   return <div>Loading...</div>;
    // }
    // if (!this.state.cookie) {
    //   return <Redirect to='/login' />
    // }
    return (
      <Fragment>
        <div className="wrapper">
          <SideBar />
          <div id="content">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <button type="button" id="sidebarCollapse" className="btn btn-info">
                  <i className="fa fa-align-left"></i>
                  <span>Toggle Sidebar</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
        {/* <Title>This the Vendor/Promoter page</Title>
        <button id="logout" onClick={this.handleLogout} className="btn">LOG OUT</button> */}
      </Fragment>
    );
  }
}

export default Basic;