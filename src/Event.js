//goes inside of eventlist
import React, { Component } from "react";


class Event extends Component {
    state = {
        detailsOpen: false,
    }

    render() {
        return (
            <div>
                <h1 className="name">Name</h1>
                <p className="date">Event Date</p>
                <p className="location"></p>
                <h2>About event:</h2>
                <a className="link" href="#">See details on Google Calendar</a>
                <p className="details">Details</p>

                <button className=".detailsBtn" >Details</button>
            </div>
        );
    }
}
export default Event;