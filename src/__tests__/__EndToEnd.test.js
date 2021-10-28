import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
    let browser;
    let page;
    beforeAll(async () => {
        jest.setTimeout(100000);
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 250,
            ignoreDefaultArgs: ['--disable-extensions']
        });

        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    });

    afterAll(() => {
        browser.close();
    });

    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event .event__Details');
        expect(eventDetails).toBeNull();
    });

    test('User can expand an event to see its details', async () => {
        await page.click('.event .details-btn');
        const eventDetails = await page.$('event .event__Details');
        expect(eventDetails).toBeDefined();
    });

    test('User can collapse an event to hide its details', async () => {
        await page.click('.event .details-btn');
        const eventDetails = await page.$('.event .event__Details');
        expect(eventDetails).toBeNull();
    });
});

describe('Filter events by city', () => {
    let browser;
    let page;
    beforeAll(async () => {
        jest.setTimeout(100000);
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 250,
            ignoreDefaultArgs: ['--disable-extensions']
        });

        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.CitySearch');
    });

    afterAll(() => {
        browser.close();
    });

    test('When user hasn’t searched for a city, show upcoming events from all cities.', async () => {
        const inputValue = await page.$('.CitySearch .city');
        expect(inputValue).toBeNull();

    });

    test('User should see a list of suggestions when they search for a city', async () => {
        const suggestionList = await page.$('.suggestions')
        await page.type('.city', 'Berlin, Germany');
        expect(suggestionList).toBeDefined();
    });

    test('User can select a city from the suggested list', async () => {
        await page.click('.suggestions li');
        const selectedCity = await page.$('suggestions li');
        expect(selectedCity).toBeDefined();
    });

});