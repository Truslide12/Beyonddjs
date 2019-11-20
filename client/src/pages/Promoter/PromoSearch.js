import React from "react";
import Calendar from "../../components/Calendar";

function PromoSearch(){
    return (
        <div className="promoContent">
            <h1 className="BeyondDJ">Begin Your Search</h1>
            <Calendar />
            <div id="artistSearchResults"></div>
        </div>
    );
}

export default PromoSearch;