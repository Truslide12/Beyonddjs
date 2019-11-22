import React from "react";
import Calendar from "../../components/Calendar";
import EventForm from "../../components/EventForm"

function PromoCreate(){
    return (
        <div className="promoContent">
            <h1 className="BeyondDJ">Create Event</h1>
            <EventForm/>
            <div id="artistSearchResults"></div>
        </div>

    );
}

export default PromoCreate;