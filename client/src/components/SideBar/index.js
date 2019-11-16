import React from "react";
import { Link } from 'react-router-dom';
import "./SideBar.css";

function SideBar() {
    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>Kathleen Leung</h3>
                <strong>KL</strong>
            </div>

            <ul className="list-unstyled components">
                <li>
                    <a href="#">
                        {/* <i className="fas fa-briefcase"></i> */}
                        Home</a>
                </li>
                <li>
                    <a href="#">
                        {/* <i className="fas fa-briefcase"></i> */}
                        Search Artists</a>
                    <a href="#">
                        {/* <i className="fas fa-briefcase"></i> */}
                        Account Settings</a>
                    <a href="#">
                        {/* <i className="fas fa-briefcase"></i> */}
                        Contact Us</a>
                </li>
            </ul>

            <div className="navFoot">
                <a href="#">
                    {/* <i className="fas fa-briefcase"></i> */}
                    Log Out</a>
            </div>
        </nav>
    );
}

export default SideBar;