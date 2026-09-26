# Project Testing

## Project Title
AI WeatherWise API

## Testing Objective

The objective of testing is to verify that the API correctly accepts city names, retrieves weather information, generates smart weather advice and handles errors.

## Test Cases

| Test Case | Input | Expected Result |
|---|---|---|
| Valid city | Chennai | Weather information is returned |
| Valid city | Bengaluru | Weather information is returned |
| Valid city | Mumbai | Weather information is returned |
| Invalid city | xyzabc123 | City not found message |
| Weather condition | Rainy city | Rain-related advice may be generated |
| High humidity | High humidity conditions | Humidity advice may be generated |
| API endpoint | `/api/weather/Chennai` | JSON response is returned |

## Successful Testing

The API was tested using a local server and browser/API requests.

Example:

```text
http://localhost:3000/api/weather/Chennai

The API successfully returned weather information including:

City
Country
Temperature
Humidity
Wind speed
Weather condition
Smart weather advice
Time
Error Handling

The API handles:

Missing city input
City not found
Weather data unavailable
Unexpected server errors
Testing Result

The core weather API functionality and smart weather advice were successfully tested locally.


Then click **Commit changes**.

⚠️ One thing: don't claim every test case passed unless you actually tested it. The examples above are the planned/representative tests; you can update the results later with your actual screenshots.

After committing, tell me **done**. Then we'll do **Phase 7 — Project Documentation**.
