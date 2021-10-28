Feature: Show/Hide an Event's Details

Scenario: An event element is collapsed by default
Given user is on main page
When elements are collasped on main page
Then user should see the collapsed event elements

Scenario: User can expand an event to see its details
Given user is on main page 
When user clicks on the details button
Then element expands, showing details

Scenario: User can collapse an event to hide its details
Given user can see details
When user clicks on details button to collpase it
Then element collapses, hiding details

