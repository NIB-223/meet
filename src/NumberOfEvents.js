import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
    };

    inputChange = (e) => {
        let eventCount = e.target.value;
        console.log(eventCount);
        if (eventCount < 1 || eventCount > 32) {
            this.setState({
                numberOfEvents: eventCount,
                errorText: 'Please enter a number between 1 and 32',
            });
        } else if (eventCount) {
            this.setState({
                numberOfEvents: eventCount,
                errorText: ''
            });
        }
        else {
            this.setState({
                numberOfEvents: eventCount,
                errorText: ''
            });
        }

        this.props.updateEvents(null, eventCount);
    };

    render() {
        const { numberOfEvents } = this.state;

        return (
            <div className="numberOfEvents">
                <ErrorAlert text={this.state.errorText} />
                <label className="number-of-events">Events: </label>
                <input type="number" className="change-number" value={numberOfEvents} onChange={this.inputChange} />
            </div>
        );
    }
};
export default NumberOfEvents; 