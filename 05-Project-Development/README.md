# Project Development

## Project Title
AI WeatherWise API

## Development Overview

The AI WeatherWise API was developed using Node.js and Express.js. The API accepts a city name and retrieves current weather information using the Open-Meteo API.

The system also processes the weather information and provides rule-based smart weather advice.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- Open-Meteo API
- MongoDB configuration
- GitHub

## Backend Structure

```text
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
API Endpoint
GET /api/weather/:city

Example:

GET /api/weather/Chennai
Development Process
Created the Node.js project.
Configured the Express.js server.
Created the weather route.
Created the weather controller.
Created the weather service.
Connected the service to Open-Meteo.
Added weather condition detection.
Added smart weather advice.
Added error handling.
Tested the API with different cities.
Smart Weather Advice

The system generates advice based on weather conditions.

Examples include:

High temperature → hydration and sun exposure advice.
Low temperature → warm clothing advice.
Rain → umbrella recommendation.
Thunderstorm → outdoor safety advice.
Strong wind → outdoor caution.
High humidity → comfort and hydration advice.
Example Request
GET http://localhost:3000/api/weather/Bengaluru
Example Response
{
  "success": true,
  "data": {
    "city": "Bengaluru",
    "country": "India",
    "temperature": 21.7,
    "humidity": 90,
    "windSpeed": 16.8,
    "weatherCode": 3,
    "condition": "Overcast",
    "advice": [
      "The temperature is comfortable.",
      "Humidity is high. Stay comfortable and drink enough water."
    ]
  }
}
Development Status

The weather API and smart weather advice functionality have been implemented and tested locally.


### Step 3

Click **Commit changes**.

⚠️ **Don't upload your `.env` file or `node_modules` folder.** Your `.gitignore` already protects them.

After committing, tell me **done**. Then we'll move to **Phase 6 — Project Testing**.
