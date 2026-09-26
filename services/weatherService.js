const getWeatherDescription = (code) => {
  const weatherCodes = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Slight snow",
    73: "Moderate snow",
    75: "Heavy snow",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail"
  };

  return weatherCodes[code] || "Unknown weather";
};


// Smart weather advice
const getWeatherAdvice = (temperature, humidity, windSpeed, weatherCode) => {
  const advice = [];

  if (temperature >= 35) {
    advice.push("Stay hydrated and avoid prolonged exposure to the sun.");
  } else if (temperature <= 15) {
    advice.push("The weather is cool. Consider wearing warm clothing.");
  } else {
    advice.push("The temperature is comfortable.");
  }

  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(weatherCode)) {
    advice.push("Rain is possible. Consider carrying an umbrella.");
  }

  if ([95, 96, 99].includes(weatherCode)) {
    advice.push("Thunderstorm conditions are possible. Take care outdoors.");
  }

  if (windSpeed >= 30) {
    advice.push("Strong winds are present. Take care when outdoors.");
  }

  if (humidity >= 80) {
    advice.push("Humidity is high. Stay comfortable and drink enough water.");
  }

  return advice;
};


const getWeather = async (city) => {

  // Fix common Indian city names
  if (city.trim().toLowerCase() === "bangalore") {
    city = "Bengaluru";
  }

  // Search for multiple locations
  const locationResponse = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
      city
    )}&count=10&language=en&format=json`
  );

  const locationData = await locationResponse.json();

  if (!locationData.results || locationData.results.length === 0) {
    throw new Error("City not found");
  }

  // Prefer an Indian location
  let location = locationData.results.find(
    (result) => result.country_code === "IN"
  );

  // If no Indian location is found, use the first result
  if (!location) {
    location = locationData.results[0];
  }

  // Get current weather
  const weatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto`
  );

  const weatherData = await weatherResponse.json();

  if (!weatherData.current) {
    throw new Error("Weather data unavailable");
  }

  const weatherCode = weatherData.current.weather_code;
  const temperature = weatherData.current.temperature_2m;
  const humidity = weatherData.current.relative_humidity_2m;
  const windSpeed = weatherData.current.wind_speed_10m;

  // Generate smart advice
  const advice = getWeatherAdvice(
    temperature,
    humidity,
    windSpeed,
    weatherCode
  );

  return {
    city: location.name,
    country: location.country,
    temperature: temperature,
    humidity: humidity,
    windSpeed: windSpeed,
    weatherCode: weatherCode,
    condition: getWeatherDescription(weatherCode),
    advice: advice,
    time: weatherData.current.time
  };
};


module.exports = {
  getWeather
};