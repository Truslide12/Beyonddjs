import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Homepage';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard/index";
import Event from "./pages/Event"
import BasicUser from "./pages/BasicUser"; // change to Basic and add routes for other roles
import PromoterVendor from "./pages/Promoter";
import Entertainer from "./pages/Entertainer";
import Admin from "./pages/Admin";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




// router paths for the different pages... do the user pages need to exact since we'll need the user id to render their user page?
function App() {
  return (
    <Router>
      <div class="flexbox">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/event" component={Event} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
