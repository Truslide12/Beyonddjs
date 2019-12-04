import React from "react";
import { Link } from 'react-router-dom';
import "./SideBar.css";


function SideBar(props) {
    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>{props.firstName} {props.lastName}</h3>
                <strong>{props.firstInitial}{props.lastInitial}</strong>
            </div>

            <ul className="list-unstyled components">
                <li>
                    <Link to={props.homeLink}>
                        <i className="fa fa-home"></i>&nbsp;
                        Home</Link>
                </li>
                <li>
                    <Link to={props.searchLink}>
                        <i className="fa fa-search"></i>&nbsp;
                        Search Artists</Link>
                    <Link to={props.createLink}>
                        <i className="fa fa-calendar"></i>&nbsp;
                        Create Event</Link>
                    <Link to={props.searchLink}>
                        <i className="fa fa-cogs"></i>&nbsp;
                        Account Settings</Link>
                    <Link to={props.contactLink}>
                        <i className="fa fa-comments-o"></i>&nbsp;
                        Contact Us</Link>
                    <div className="navFoot">
                        <Link to={props.homeLink} className="BeyondDJ">BeyondDJ</Link>
                        <img src="../../imgs/edm.png"></img>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default SideBar;