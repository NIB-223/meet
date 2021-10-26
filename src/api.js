import { mockData } from './mock-data';
import axios from 'axios';
import NProgress from 'nprogress';
import { handleChangeNumber } from './NumberOfEvents';

//takes an events array, then uses map to create a new array with only locations
//its also removes all duplicates
export const extractLocations = (events) => {
    var extractLocations = events.map((event) => event.location);
    var locations = [...new Set(extractLocations)];
    return locations;
};

export const extractNumOfEvents = (events) => {
    var extractNumOfEvents = events.map((event) => event.length);
    return extractNumOfEvents;
}

//checks whether the accessToken found is valid or not, if not then redirect & send user to Google Auth Screen
const checkToken = async (accessToken) => {
    const result = await fetch(
        `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
    )
        .then((res) => res.json())
        .catch((error) => error.json());

    return result;
};

//if using localhost, mock data returns, otherwise real API

export const getEvents = async () => {
    NProgress.start();

    if (window.location.href.startsWith('http://localhost')) {
        NProgress.done();
        return mockData;
    }
    //Checks for an access token

    const token = await getAccessToken();

    if (token) {
        removeQuery();
        const url = 'https://ws7mmh68n1.execute-api.eu-central-1.amazonaws.com/dev/api/get-events' + '/' + token;
        const result = await axios.get(url);
        if (result.data) {
            var locations = extractLocations(result.data.events);
            localStorage.setItem("lastEvents", JSON.stringify(result.data));
            localStorage.setItem("locations", JSON.stringify(locations));
        }
        NProgress.done();
        return result.data.events;
    }
};

//checks whether there's a path, then builds the URL with the current path (or w/o a path using
//using window.history.pushState())   remvoves code from URL when finished with it
const removeQuery = () => {
    if (window.history.pushState && window.location.pathname) {
        var newurl =
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname;
        window.history.pushState("", "", newurl);
    } else {
        newurl = window.location.protocol + "//" + window.location.host;
        window.history.pushState("", "", newurl);
    }
};

//gets access token if one doesn't extist
const getToken = async (code) => {
    const encodeCode = encodeURIComponent(code);
    const { access_token } = await fetch(
        'https://ws7mmh68n1.execute-api.eu-central-1.amazonaws.com/dev/api/token' + '/' + encodeCode
    )
        .then((res) => {
            return res.json();
        })
        .catch((error) => error);

    access_token && localStorage.setItem("access_token", access_token);

    return access_token;
};

//Access Token in Calendar API
export const getAccessToken = async () => {
    const accessToken = localStorage.getItem('access_token');
    const tokenCheck = accessToken && (await checkToken(accessToken));

    if (!accessToken || tokenCheck.error) {
        await localStorage.removeItem("access_token");
        const searchParams = new URLSearchParams(window.location.search);
        const code = await searchParams.get("code");
        if (!code) {
            const results = await axios.get(
                "https://ws7mmh68n1.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url"
            );
            const { authUrl } = results.data;
            return (window.location.href = authUrl);
        }
        return code && getToken(code);
    }
    return accessToken;
};

