import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[1]} />);
    });

    test("render event title", () => {
        expect(EventWrapper.find(".name")).toHaveLength(1);
    });
    test("render event date", () => {
        expect(EventWrapper.find(".date")).toHaveLength(1);
    });
    test("render event location", () => {
        expect(EventWrapper.find(".location")).toHaveLength(1);
    });
    test("render link for details", () => {
        expect(EventWrapper.find(".link")).toHaveLength(1);
    });
    test("render details of event", () => {
        expect(EventWrapper.find(".details")).toHaveLength(1);
    });
    test("render details button", () => {
        expect(EventWrapper.find(".detailsBtn")).toHaveLength(1);
    });
    test('render more details button', () => {
        expect(EventWrapper.state("detailsOpen")).toBe(false);
        expect(EventWrapper.find(".detailsBtn").text()).toBe('more details');
    });

    test("extra info is shown when user clicks on details button", () => {
        EventWrapper.find('.detailsBtn').simulate('click');
        expect(EventWrapper.find('.details')).toHaveLength(1);
        expect(EventWrapper.find('.detailsBtn').text()).toBe('less details');
    });

    test('render less details on less details button click', () => {
        EventWrapper.setState({ detailsOpen: true });
        EventWrapper.find('.detailsBtn').simulate('click');
        expect(EventWrapper.find('.detailsBtn').text()).toBe('more details');
        expect(EventWrapper.find('.details').text()).toBe('');

    })


});