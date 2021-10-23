import { mockData } from './mock-data';
//takes an events array, then uses map to create a new array with only locations, its also removes all duplicates
export const extractLocations = (events) => {
    var extractLocations = events.map((event) => event.location);
    var locations = [...new Set(extractLocations)];
    return locations;
};

export const getEvents = async () => {
    return mockData;
};