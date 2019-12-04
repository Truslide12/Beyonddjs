import React from "react";
import Calendar from "../../components/Calendar";
import EventForm from "../../components/EventForm"

function EntertainerCreate(){
    return (
        <div className="EntertainerContent">
            <h1 className="BeyondDJ">Create Event</h1>
            <EventForm/>
            <div id="artistSearchResults"></div>
        </div>

    );
}

export default EntertainerCreate;