import React, { Component } from "react";
import { getEvents, extractNumOfEvents } from "./api";

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32
    };

    componentDidMount() {
        this.mounted = true;
        getEvents().then((events) => {
            if (this.mounted) {
                this.setState({ events, extractNumOfEvents(events) });
            }
        });
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    handleChangeNumber = (event) => {
        const value = event.target.value;
        this.setState({ numberOfEvents: value });
    };

    render() {
        const { numberOfEvents } = this.state;

        return (
            <div className="numberOfEvents">
                <label className="number-of-events">Events: </label>
                <input type="number" className="change-number" value={numberOfEvents} onChange={this.handleChangeNumber} />
            </div>
        );
    }
};
export default NumberOfEvents; 