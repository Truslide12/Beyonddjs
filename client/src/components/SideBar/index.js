import React from "react";
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
                        About</a>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                        {/* <i className="fas fa-copy"></i> */}
                        Pages</a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#">Page 1</a>
                        </li>
                        <li>
                            <a href="#">Page 2</a>
                        </li>
                        <li>
                            <a href="#">Page 3</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default SideBar;