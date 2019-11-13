import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import BasicUser from "./pages/BasicUser"; // change to Basic and add routes for other roles
import PromoterVendor from "./pages/PromoterVendor";
import Entertainer from "./pages/Entertainer";
import Admin from "./pages/Admin";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




// router paths for the different pages... do the user pages need to exact since we'll need the user id to render their user page?
function App() {
  return (
    <Router>
      <div class="flexbox">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/basicuser" component={BasicUser} />
          <Route exact path="/promoterVendor" component={PromoterVendor} />
          <Route exact path="/entertainer" component={Entertainer} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
