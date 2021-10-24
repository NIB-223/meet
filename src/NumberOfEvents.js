import React, { Component } from "react";

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32
    };

    handleChangeNumber = (event) => {
        const value = event.target.value;
        this.setState({ numberOfEvents: value });
    };

    render() {
        const { numberOfEvents } = this.state;

        return (
            <div className="number-of-events-container">
                <label className="number-of-events">Events: </label>
                <input type="number" className="change-number" value={numberOfEvents} onChange={this.handleChangeNumber} />
            </div>
        );
    }
};
export default NumberOfEvents; 