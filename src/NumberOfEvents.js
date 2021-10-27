import React, { Component } from "react";

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
    };

    inputChange = (e) => {
        let eventCount = e.target.value;
        console.log(eventCount);
        this.setState({
            numberOfEvents: eventCount,
        });
        this.props.updateEvents(null, eventCount);
    };

    render() {
        const { numberOfEvents } = this.state;

        return (
            <div className="numberOfEvents">
                <label className="number-of-events">Events: </label>
                <input type="number" className="change-number" value={numberOfEvents} onChange={this.inputChange} />
            </div>
        );
    }
};
export default NumberOfEvents; 