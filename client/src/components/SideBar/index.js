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
                <li className="active">
                    <Link to="/promoter/home">
                        <i className="fa fa-home"></i>&nbsp;
                        Home</Link>
                </li>
                <li>
                    <a href="/promoter/search">
                        <i className="fa fa-search"></i>&nbsp;
                        Search Artists</a>
                    <a href="/promoter/create">
                        <i className="fa fa-calendar"></i>&nbsp;
                        Create Event</a>
                    <a href="/promoter/settings">
                        <i className="fa fa-cogs"></i>&nbsp;
                        Account Settings</a>
                    <a href="/promoter/contact">
                        <i className="fa fa-comments-o"></i>&nbsp;
                        Contact Us</a>
                    <div className="navFoot">
                        <a href="#" id="BeyondDJ">BeyondDJ</a>
                        <img src="./imgs/edm.png"></img>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default SideBar;