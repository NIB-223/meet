import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: '',
    };

    inputChange = (e) => {
        let eventCount = e.target.value;
        console.log(eventCount);
        if (eventCount === '') {
            this.setState({
                numberOfEvents: eventCount,
                errorText: ''
            });
        } else if (eventCount < 1 || eventCount > 32) {
            this.setState({
                numberOfEvents: eventCount,
                errorText: 'Please enter a number between 1 and 32',
            });
        } else {
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
            <>
                <ErrorAlert text={this.state.errorText} />
                <div className="numberOfEvents">
                    {/* <label className="number-of-events">Events: </label> */}
                    <input type="number" className="change-number" value={numberOfEvents} onChange={this.inputChange} placeholder="Enter number of events..." />
                </div>
            </>

        );
    }
};
export default NumberOfEvents; 