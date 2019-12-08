import React from "react";
import { Link } from 'react-router-dom';
import "./SideBar.css";

// const firstInitial = ;

function SideBar(props) {
    console.log(props);
    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>{props.firstName} {props.lastName}</h3>
                <strong>{props.firstInitial}{props.lastInitial}</strong>
            </div>

            <ul className="list-unstyled components">
                <li>
                    <Link to="/dashboard/">
                        <i className="fa fa-home"></i>&nbsp;
                        Home</Link>
                </li>
                <li>
                    <Link to="/dashboard/admin/search">
                        <i className="fa fa-search"></i>&nbsp;
                        Search Artists</Link>
                    <Link to="/dashboard/admin/create">
                        <i className="fa fa-calendar"></i>&nbsp;
                        Create Event</Link>
                    <Link to="/dashboard/admin/settings">
                        <i className="fa fa-cogs"></i>&nbsp;
                        Account Settings</Link>
                    <Link to="/dashboard/admin/contact">
                        <i className="fa fa-comments-o"></i>&nbsp;
                        Contact Us</Link>
                    <div className="navFoot">
                        <Link to="/dashboard/admin/home" className="BeyondDJ">BeyondDJ</Link>
                        <img src="../../imgs/edm.png"></img>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default SideBar;