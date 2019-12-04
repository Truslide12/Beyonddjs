import React from "react";
import Contact from "../../components/Contact";

function PromoContact(){
    return (
        <div className="promoContent">
            <h1 className="BeyondDJ text-center">Contact Us</h1>
            <hr />
            <p className="text-center">We'd ♡ To Help!</p> 
            <p className="text-center">If you have any questions or concerns, feel free to shoot us an email!</p>
            <Contact/>
            <div id="artistSearchResults"></div>
        </div>

    );
}

export default PromoContact;