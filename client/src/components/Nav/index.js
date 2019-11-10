import React from "react";

function Nav() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" id="homeLink" href="/">
        Beyond Djs
      </a>
     <ul className="navbar-nav">
     <li className="nav-item">
       <a className="nav-link navbar-brand" id="logIn" href="/login">Log In</a>
     </li>
     <li className="nav-item">
       <a className="nav-link navbar-brand" id="register" href="/register">Register</a>
     </li>
   </ul>
 </nav>

 </div>
  );
}

export default Nav;