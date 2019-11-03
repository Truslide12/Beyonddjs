import React, { Component, Fragment } from "react";
import Title from "../components/Title";
import API from "../utils/API";

class Secure extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleLogout () {
    API.logout()
      .then(res => res.json())
      .then(res => console.info(res))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Fragment>
        <Title>This is a secure page</Title>
        <button id="logout" onClick={this.handleLogout} class="btn">LOG OUT</button>
      </Fragment>
    );
  }
}

export default Secure;
