import React, { Component, Fragment } from "react";
import cookie from 'react-cookies';
import SideBar from '../../components/SideBar';
import PromoHome from "./PromoHome";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Redirect, Route, Switch } from 'react-router-dom';
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
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    if (!this.state.cookie) {
      return <Redirect to='/login' />
    }
    return (
      <Fragment>
        <div className="wrapper">
          <SideBar currentPage={this.state.currentPage}/>
          <Container fluid>
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
                          <Button id="logout" onClick={this.handleLogout} variant="secondary"><i class="fa fa-sign-out"></i>LOG OUT</Button>
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
                  <Route exact path="/promoter/home" component={PromoHome} />
                </Switch>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <Title>This the Vendor/Promoter page</Title> */}
      </Fragment>
    );
  }
}

export default Basic;