# Task 1. Spotify 

### For that project were used WebDriver IO, Mocha ("describe it" format), Page Object Model

## How to run it
1. Clone project to your machine

2. Install all dependencies

3. To run tests use 'npm run test' command

## Test Cases:

1. Test Login form with empty credentials: 1.Type any credentials 2. Clear the inputs. 3. Check the error messages: 3.1 Please enter your Spotify username or email address. 3.2 Please enter your password.

2. Test Login form with incorrect credentials: 1. Type any incorrect credentials and click LOG IN button. X. 2. Check the error message: 2.1 Incorrect username or password.

3. Test Login form with correct credentials: 1. Type correct credentials and click LOG IN button. 2. Check that Name is correct.
