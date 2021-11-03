import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { OfflineAlert } from './Alert';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
import logo from './img/logo.svg'

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: "all",
    offlineAlert: ''
  };

  componentDidMount() {
    getEvents().then((events) => {
      const filteredEvents = events.slice(0, this.state.numberOfEvents);
      this.setState({
        events: filteredEvents,
        locations: extractLocations(events),
      });
    });
    if (!navigator.onLine) {
      this.setState({
        offlineAlert:
          "App is running offline, events list may not be up to date.",
      });
    }

    if (navigator.onLine) {
      this.setState({
        offlineAlert: "",
      });
    }
  }

  updateEvents = (location, eventCount) => {
    const { currentLocation, numberOfEvents } = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents = (location === "all") ?
          events :
          events.filter((event) => event.location === location);
        const filteredEvents = locationEvents.slice(0, numberOfEvents);
        this.setState({
          events: filteredEvents,
          currentLocation: location,
        });
      });
    }

    if (!navigator.onLine) {
      this.setState({
        offlineAlert: 'App is running offline, events list may not be up to date.'
      });
    }

    if (navigator.onLine === true) {
      this.setState({
        offlineAlert: ''
      });
    }
    else {
      getEvents().then((events) => {
        const locationEvents = (currentLocation === "all") ?
          events :
          events.filter((event) => event.location === currentLocation);
        const filteredEvents = locationEvents.slice(0, eventCount);
        this.setState({
          events: filteredEvents,
          numberOfEvents: eventCount,
        });
      });
    }
  }

  render() {
    return (
      <div className="App">
        <nav className="nav">
          <img className="logo" src={logo} alt="logo"></img>
        </nav>
        <OfflineAlert text={this.state.offlineAlert} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;