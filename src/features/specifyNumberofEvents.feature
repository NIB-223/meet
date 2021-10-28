Feature: Specify Number of Events

Scenario: When user hasn’t specified a number, 32 is the default number.
Given user is on app
When user sees text field and hasn't typed in a number
Then user sees 32 elements by default

Scenario: User can change the number of events they want to see.
Given user is on app
When user specifies the number of events they want to see
Then the user sees the specified number of events they want to see