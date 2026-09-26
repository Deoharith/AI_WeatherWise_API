# Project Design

## Project Title
AI WeatherWise API

## System Architecture

The project follows a simple REST API architecture.

```text
User
  |
  | City Name
  v
Express.js API
  |
  v
Weather Controller
  |
  v
Weather Service
  |
  +----------------------+
  |                      |
  v                      v
Open-Meteo          Smart Advice
Geocoding &         Rule-Based
Weather API         Processing
  |                      |
  +----------+-----------+
             |
             v
        JSON Response
             |
             v
            User
Main Components
1. Server

Node.js and Express.js are used to create and run the REST API server.

2. Routes

The weather route accepts a city name through an API endpoint.

Example:

GET /api/weather/Chennai

3. Controller

The weather controller receives the request, validates the city name, calls the weather service and sends the JSON response.

4. Weather Service

The weather service:

Finds the city location.
Retrieves current weather information.
Identifies the weather condition.
Generates smart weather advice.
5. External Weather API

Open-Meteo provides the geocoding and current weather information.

User Flow
User enters city
       |
       v
API receives city name
       |
       v
Validate city
       |
       v
Find city location
       |
       v
Get current weather
       |
       v
Generate smart advice
       |
       v
Return JSON response
API Response Design

A successful response contains:

City
Country
Temperature
Humidity
Wind speed
Weather code
Weather condition
Smart weather advice
Time
Database Design

The current working version of the API retrieves weather data from Open-Meteo and does not persist weather results in MongoDB.

MongoDB configuration is included in the project for future database integration.


### 4. Click **Commit changes**.

After you see:

```text
03-Project-Design
