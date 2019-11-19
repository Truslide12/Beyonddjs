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
                    <Link to="/promoter/home">
                        <i className="fa fa-home"></i>&nbsp;
                        Home</Link>
                </li>
                <li>
                    <Link to="/promoter/search">
                        <i className="fa fa-search"></i>&nbsp;
                        Search Artists</Link>
                    <Link to="/promoter/create">
                        <i className="fa fa-calendar"></i>&nbsp;
                        Create Event</Link>
                    <Link to="/promoter/settings">
                        <i className="fa fa-cogs"></i>&nbsp;
                        Account Settings</Link>
                    <Link to="/promoter/contact">
                        <i className="fa fa-comments-o"></i>&nbsp;
                        Contact Us</Link>
                    <div className="navFoot">
                        <Link to="/promoter/home" id="BeyondDJ">BeyondDJ</Link>
                        <img src="../imgs/edm.png"></img>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default SideBar;