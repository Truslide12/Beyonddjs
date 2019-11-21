import React from "react";
import Calendar from "../../components/Calendar";

function PromoSearch(){
    return (
        <div>
            <h1 className="BeyondDJ mt-3">Begin Your Search</h1>
            <Calendar />
            <div id="artistSearchResults"></div>
        </div>
    );
}

export default PromoSearch;