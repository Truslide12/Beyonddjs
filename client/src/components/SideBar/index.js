import React from "react";
import { Link } from 'react-router-dom';
import "./SideBar.css";

// const firstInitial = ;

function SideBar(props) {
    console.log(props);
    // if (props.role === "Admin") {
    // return (
    //     <nav id="sidebar">
    //         <div className="sidebar-header">
    //             <h3>{props.firstName} {props.lastName}</h3>
    //             <strong>{props.firstInitial}{props.lastInitial}</strong>
    //         </div>

    //         <ul className="list-unstyled components">
    //             <li>
    //                 <Link to="/dashboard/admin/home">
    //                     <i className="fa fa-home"></i>&nbsp;
    //                     Home</Link>
    //             </li>
    //             <li>
    //                 <Link to="/dashboard/admin/search">
    //                     <i className="fa fa-search"></i>&nbsp;
    //                     Search Artists</Link>
    //                 <Link to="/dashboard/admin/create">
    //                     <i className="fa fa-calendar"></i>&nbsp;
    //                     Create Event</Link>
    //                 <Link to="/dashboard/admin/account">
    //                     <i className="fa fa-cogs"></i>&nbsp;
    //                     Account Settings</Link>
    //                 <Link to="/dashboard/admin/contact">
    //                     <i className="fa fa-comments-o"></i>&nbsp;
    //                     Contact Us</Link>
    //                 <div className="navFoot">
    //                     <Link to="/dashboard/admin/home" className="BeyondDJ">BeyondDJ</Link>
    //                     <img src="../../imgs/edm.png"></img>
    //                 </div>
    //             </li>
    //         </ul>
    //     </nav>
    // );
    // }
    //     else if (props.role === "Entertainer") {
    //         return (
    //             <nav id="sidebar">
    //                 <div className="sidebar-header">
    //                     <h3>{props.firstName} {props.lastName}</h3>
    //                     <strong>{props.firstInitial}{props.lastInitial}</strong>
    //                 </div>
        
    //                 <ul className="list-unstyled components">
    //                     <li>
    //                         <Link to="/dashboard/entertainer/home">
    //                             <i className="fa fa-home"></i>&nbsp;
    //                             Home</Link>
    //                     </li>
    //                     <li>
    //                         <Link to="/dashboard/entertainer/search">
    //                             <i className="fa fa-search"></i>&nbsp;
    //                             Search Artists</Link>
    //                         <Link to="/dashboard/entertainer/create">
    //                             <i className="fa fa-calendar"></i>&nbsp;
    //                             Create Event</Link>
    //                         <Link to="/dashboard/entertainer/account">
    //                             <i className="fa fa-cogs"></i>&nbsp;
    //                             Account Settings</Link>
    //                         <Link to="/dashboard/entertainer/contact">
    //                             <i className="fa fa-comments-o"></i>&nbsp;
    //                             Contact Us</Link>
    //                         <div className="navFoot">
    //                             <Link to="/dashboard/entertainer/home" className="BeyondDJ">BeyondDJ</Link>
    //                             <img src="../../imgs/edm.png"></img>
    //                         </div>
    //                     </li>
    //                 </ul>
    //             </nav>
    //         )
    //     }
    //         else if (props.role === "PromoterVendor") {
                return (
                    <nav id="sidebar">
                        <div className="sidebar-header">
                            <h3>{props.firstName} {props.lastName}</h3>
                            <strong>{props.firstInitial}{props.lastInitial}</strong>
                        </div>
            
                        <ul className="list-unstyled components">
                            <li>
                                <Link to="/dashboard/promoter/home">
                                    <i className="fa fa-home"></i>&nbsp;
                                    Home</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/promoter/search">
                                    <i className="fa fa-search"></i>&nbsp;
                                    Search Artists</Link>
                                <Link to="/dashboard/promoter/create">
                                    <i className="fa fa-calendar"></i>&nbsp;
                                    Create Event</Link>
                                <Link to="/dashboard/promoter/account">
                                    <i className="fa fa-cogs"></i>&nbsp;
                                    Account Settings</Link>
                                <Link to="/dashboard/promoter/contact">
                                    <i className="fa fa-comments-o"></i>&nbsp;
                                    Contact Us</Link>
                                <div className="navFoot">
                                    <Link to="/dashboard/promoter/home" className="BeyondDJ">BeyondDJ</Link>
                                    <img src="../../imgs/edm.png"></img>
                                </div>
                            </li>
                        </ul>
                    </nav>
                );
            // }
            // else if ( props.role === "User") {
            //     return (
            //         <nav id="sidebar">
            //             <div className="sidebar-header">
            //                 <h3>{props.firstName} {props.lastName}</h3>
            //                 <strong>{props.firstInitial}{props.lastInitial}</strong>
            //             </div>
            
            //             <ul className="list-unstyled components">
            //                 <li>
            //                     <Link to="/dashboard/user/home">
            //                         <i className="fa fa-home"></i>&nbsp;
            //                         Home</Link>
            //                 </li>
            //                 <li>
            //                     <Link to="/dashboard/user/search">
            //                         <i className="fa fa-search"></i>&nbsp;
            //                         Search Artists</Link>
            //                     <Link to="/dashboard/user/create">
            //                         <i className="fa fa-calendar"></i>&nbsp;
            //                         Create Event</Link>
            //                     <Link to="/dashboard/user/account">
            //                         <i className="fa fa-cogs"></i>&nbsp;
            //                         Account Settings</Link>
            //                     <Link to="/dashboard/user/contact">
            //                         <i className="fa fa-comments-o"></i>&nbsp;
            //                         Contact Us</Link>
            //                     <div className="navFoot">
            //                         <Link to="/dashboard/user/home" className="BeyondDJ">BeyondDJ</Link>
            //                         <img src="../../imgs/edm.png"></img>
            //                     </div>
            //                 </li>
            //             </ul>
            //         </nav>
            //     );
            // }
            // else {
            //     console.log(props);
            //     return(
            //         <div>Unable to load props.role</div>
            //     )
            // }
}

export default SideBar;