# Weather API
This is an Example code to create a firebase cloud function using emulator to fetch the weather of a location using openweathermap api. This function when deployed will take the input of latitude and longitude and return the weather of that place.
## Pre requisite
+ npm
+ Firebase cli
+ Firebase emulator

## Installation
Install the dependencies .
```sh
npm i
firebase emulators:start --only functions
```

## Execution
```sh 
curl "http://localhost:8080/space-12/us-central1/weather?lat=18&lng=73"
```

> Note: Check the port and the url.

Verify the deployment by navigating to your server address in your preferred browser.
The api response details can be further narrowed down as per requirments.
