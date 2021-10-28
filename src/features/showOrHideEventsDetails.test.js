import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import EventList from '../App';
import Event from '../App';
import { mockData } from '../mock-data';


const feature = loadFeature('./src/features/showOrHideEventsDetails.feature');

defineFeature(feature, test => {
    let AppWrapper;
    let EventListWrapper;
    let EventWrapper;

    //**Scenario 1**
    test('An event element is collapsed by default', ({ given, when, then }) => {

        given('user is on main page', () => {
            AppWrapper = mount(<App />);
            EventListWrapper = mount(<EventList events={mockData} />);
            EventWrapper = mount(<Event event={mockData[1]} />);
        });

        when('elements are collasped on main page', () => {

        });

        then('user should see the collapsed event elements', () => {
            expect(EventWrapper.find(".details")).toHaveLength(0);
        });
    });

    //**Scenario 2**
    test('User can expand an event to see its details', ({ given, when, then }) => {

        given('user is on main page', () => {
            AppWrapper = mount(<App />);
            EventListWrapper = mount(<EventList events={mockData} />);
            EventWrapper = mount(<Event event={mockData[1]} />);
        });

        when('user clicks on the details button', () => {
            EventWrapper.find(".details-btn").at(0).simulate("click");
        });

        then('element expands, showing details', () => {
            AppWrapper.find('.details').toHaveLength(1);
            expect(AppWrapper.state('detailsOpen')).toBe(true);
        });
    });

    // **Scenario 3**
    test('User can collapse an event to hide its details', ({ given, when, then }) => {

        given('user can see details', () => {
            AppWrapper = mount(<App />);
            EventListWrapper = mount(<EventList events={mockData} />);
            EventWrapper = mount(<Event event={mockData[1]} />);
        });

        when('user clicks on details button to collpase it', () => {
            EventWrapper.find("details-btn").simulate('click');

        });

        then('element collapses, hiding details', () => {
            EventWrapper.find('.details').toHaveLength(0);
            expect(EventWrapper.state('detailsOpen')).toBe(false);
        });
    });
});