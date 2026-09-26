# Backend Development

## Project Title
AI WeatherWise API

## Backend Overview

The AI WeatherWise API backend is developed using Node.js, Express.js and JavaScript.

The backend follows a modular structure where routes, controllers, services and configuration are separated to improve maintainability and scalability.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- Open-Meteo Geocoding API
- Open-Meteo Weather API
- MongoDB configuration
- GitHub

## Backend Architecture

```text
Client
  |
  v
Express Server
  |
  v
Weather Route
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
Open-Meteo API      Smart Weather
                    Advice Logic
  |                      |
  +----------+-----------+
             |
             v
        JSON Response
1. Application Entry Point

The server.js file is the main entry point of the application.

It:

Initializes the Express application.
Enables JSON request handling.
Registers the weather routes.
Starts the server on port 3000.
2. Weather Routes

The routes/weatherRoutes.js file defines the weather API endpoint.

GET /api/weather/:city

Example:

GET /api/weather/Chennai

The city name is received as a URL parameter.

3. Weather Controller

The controllers/weatherController.js file handles API requests.

The controller:

Receives the city name.
Validates the input.
Calls the weather service.
Returns the weather information as JSON.
Handles errors and appropriate HTTP status codes.
4. Weather Service

The services/weatherService.js file contains the main weather-processing logic.

The service:

Receives the city name.
Finds the city using the Open-Meteo Geocoding API.
Retrieves current weather information.
Processes temperature, humidity, wind speed and weather code.
Identifies the weather condition.
Generates smart weather advice.
Returns the processed result.
5. Smart Weather Advice

The backend generates rule-based advice according to weather conditions.

Examples:

High temperature → hydration and sun-exposure advice.
Low temperature → warm clothing advice.
Rain → umbrella recommendation.
Thunderstorm → outdoor safety advice.
Strong wind → outdoor caution.
High humidity → comfort and hydration advice.
6. Error Handling

The backend handles:

Missing city input.
City not found.
Weather data unavailable.
Unexpected server errors.

The API returns JSON responses with appropriate HTTP status codes.

7. Database Configuration

MongoDB configuration is included in:

config/db.js

The project contains MongoDB connection configuration for future database integration.

The current working weather API retrieves weather information from Open-Meteo and does not persist weather results in MongoDB.

8. Backend Project Structure
AI-WeatherWise-API/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── weatherController.js
│
├── routes/
│   └── weatherRoutes.js
│
├── services/
│   └── weatherService.js
│
├── middleware/
│
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
9. Backend Testing

The backend was tested locally using the API endpoint.

Example:

http://localhost:3000/api/weather/Chennai

The API successfully returned JSON weather information.

Example response fields include:

city
country
temperature
humidity
windSpeed
weatherCode
condition
advice
time
10. Backend Development Status

The core backend functionality has been implemented and tested locally.

The API successfully retrieves current weather information and generates rule-based smart weather advice.

Repository

GitHub Repository:

https://github.com/Deoharith/AI_WeatherWise_API


### Important

This document **does satisfy the backend-development documentation requirement for your actual project** without falsely claiming that MongoDB is working or that your project uses Gemini/JWT.

After creating it, **commit the file**.

Then tell me **“done”**. We'll do the next piece of evidence for the 7h30m backend-development requirement.
