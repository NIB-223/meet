This app will be a Progressive web application that will be built with React using a test-driven development technique, meaning code will be tested first.  Iw will use Google Calendar API to fetch upcoming events. 
It will be serverless which means there is no backend maintenance, it's easy to scale, always available, and there is no cost for idle time.  

# FEATURE 2: Show/Hide an Event's Details
As a user, I should be able to show/hide the details of an event.

## Scenario 1: An event element is collapsed by default
 - Given: user is on main page
 - When: elements are collasped
 - Then: user should see the event elements

## Scenario 2: User can expand an event to see its details
 - Given: user is on main page
 - When: user clicks on an element
 - Then:  element expands, showing details

## Scenario 3: User can collapse an event to hide its details
 - Given: user can see details
 - When: user clicks on element to collpase it
 - Then: element collapses, hiding details



 # FEATURE 3: Specify Number of Events
 As a user, I should be able to speciy a certain number of events. so that I can see as many/little as I want

 ## Scenario 1: When a user hasn't specified a number, 32 is the default number
 - Given: user is on app
 - When: user sees elements
 - Then: user sees 32 elements by default

 ## Scenario 2: User can change the number of events the way they want to see
 - Given: user is on app
 - When: user specifies the number of events they want to see
 - ThenL the user sees the specified number of events



 # FEATURE 4: Use the App When Offline
 As a user, I should be able to use the app to some extent when I am offline, so that I can see events without internet connection

 ## Scenario 1: Show cached data when there's no internet connection
- Given: user has no internet connection
- When: user wants to see events
- Then: the user will be able to see catched events (accessed when user had internet)

## Scenario 2: Show error when user changes the settings(city, time range)
- Given: user has no internet connection
- When: user tries to change the settings
- Then: user gets error message



# FEATURE 5: DATA VISUALIZATION
As a user, I should be able to view a chart showing upcoming events in each city, so I can see the upcoming events in the city

## Scenario 1: Show a chart with the number of upcoming events in each city
- Given: user looks at event
- When: user clicks on chart
- Then: user sees chart showing upcoming events in each city 



# Tools/Dependencies
- Google Calendar API
- AWS Lambda
- React
- Jest (testing framework)
- Enzyme (testing utility)

 