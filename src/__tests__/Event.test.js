import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event />);
    });

    test("show event title", () => {
        expect(EventWrapper.find(".name")).toHaveLength(1);
    });
    test("show event date", () => {
        expect(EventWrapper.find(".date")).toHaveLength(1);
    });
    test("show event location", () => {
        expect(EventWrapper.find(".location")).toHaveLength(1);
    });
    test("show link for details", () => {
        expect(EventWrapper.find(".link")).toHaveLength(1);
    });
    test("show details of event", () => {
        expect(EventWrapper.find(".details")).toHaveLength(1);
    });
    test("show details button", () => {
        expect(EventWrapper.find(".detailsBtn")).toHaveLength(1);
    });

    test("extra info is shown when user clicks on details button", () => {
        EventWrapper.setState({
            detailsOpen: true,
        });
        const openDetails = {}
    })

});

