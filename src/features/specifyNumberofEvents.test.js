import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import NumberOfEvents from '../NumberOfEvents';
import { mount, shallow } from 'enzyme';
import { mockData } from '../mock-data';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberofEvents.feature');

defineFeature(feature, test => {
    let AppWrapper;
    let NumberOfEventsWrapper

    //**Scenario 1**
    test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
        given('user is on app', () => {
            AppWrapper = mount(<App />);
            NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />)
        });

        when('user sees text field and hasn\'t typed in a number', () => {
            expect(NumberOfEventsWrapper.find('.change-number')).toHaveLength(1);
        });

        then(/^user sees (\d+) elements by default$/, (arg0) => {
            expect(NumberOfEventsWrapper.find(".change-number").get(0).props.value).toEqual(32);
            expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(32);
        });
    });

    //**Scenario 2**
    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        given('user is on app', () => {
            AppWrapper = mount(<App />);
            NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />)
        });

        when('user specifies the number of events they want to see', () => {
            const eventsInput = { target: { value: 16 } };
            NumberOfEventsWrapper.find(".change-number").simulate("change", eventsInput);
        });

        then('the user sees the specified number of events they want to see', () => {
            expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(16);
        });
    });

});