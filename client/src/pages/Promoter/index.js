import React, { Component, Fragment } from "react";
import cookie from 'react-cookies';
import SideBar from '../../components/SideBar';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
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

  handleCollapse = () => {
    document.getElementById('sidebar').classList.toggle('active');
  };

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
          <Container fluid>
            <Row>
              <Col className="p-0">
                <div id="content">
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <p className="mt-3 text-secondary float-left" onClick={this.handleCollapse}>
                      <i className="fa fa-align-left"></i>
                    </p>
                    <Button id="logout" onClick={this.handleLogout} className="float-right" variant="secondary" >LOG OUT</Button>
                  </nav>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                {/* <Route exact path={`${props.match.url}/home`} component={Learn} /> */}
              </Col>
            </Row>
          </Container>
        </div>
        {/* <Title>This the Vendor/Promoter page</Title>
        <button id="logout" onClick={this.handleLogout} className="btn">LOG OUT</button> */}
      </Fragment>
    );
  }
}

export default Basic;