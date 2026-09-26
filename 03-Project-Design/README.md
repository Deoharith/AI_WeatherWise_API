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
