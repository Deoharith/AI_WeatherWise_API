# Project Documentation

## Project Title
AI WeatherWise API

## Introduction

AI WeatherWise API is a REST API that provides current weather information for a selected city and generates useful smart weather advice based on the current weather conditions.

## Purpose

The purpose of the project is to provide weather information in a simple JSON-based API response and help users understand the current weather through useful recommendations.

## How the API Works

1. The user provides a city name.
2. The API receives the request.
3. The system finds the location of the city.
4. Current weather information is retrieved from Open-Meteo.
5. The weather condition is identified.
6. Rule-based smart advice is generated.
7. The API returns the result as JSON.

## API Endpoint

```text
GET /api/weather/:city

Example:

GET /api/weather/Chennai
Response Information

The API can return:

City
Country
Temperature
Humidity
Wind speed
Weather code
Weather condition
Smart weather advice
Time
Technologies
Node.js
Express.js
JavaScript
Open-Meteo API
MongoDB configuration
GitHub
Project Structure
config/
controllers/
routes/
services/
middleware/
server.js
package.json
Smart Weather Advice

The application uses rule-based conditions to generate useful advice.

For example:

High temperature → hydration advice
Low temperature → warm clothing advice
Rain → umbrella advice
Thunderstorm → outdoor safety advice
Strong wind → outdoor caution
High humidity → comfort and hydration advice
Installation
Install Node.js.
Clone the GitHub repository.
Open the project folder in Command Prompt.
Install dependencies:
npm install
Start the server:
node server.js
Open the API endpoint in a browser or API testing tool.

Example:

http://localhost:3000/api/weather/Chennai
Current Status

The core weather API has been developed and tested locally. MongoDB configuration is included in the project, while database connectivity requires further configuration/testing.

Repository

The complete project source code is maintained in the GitHub repository.


Then click **Commit changes**.

After that, tell me **done** and we'll create the final **Phase 8 — Project Demonstration**, where we'll add you
