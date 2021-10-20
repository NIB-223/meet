import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';


import EventList from '../EventList';
import CitySearch from '../CitySearch';
import Event from '../Event';

describe('<App /> component', () => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App />);
    });

    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });

    test('render CitySearch', () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });

    test('render Event', () => {
        expect(AppWrapper.find(Event)).toHaveLength(1);
    })
});
