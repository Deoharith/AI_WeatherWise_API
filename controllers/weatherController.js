const { getWeather } = require("../services/weatherService");

const getWeatherByCity = async (req, res) => {
  try {
    const { city } = req.params;

    // Check if city was provided
    if (!city || city.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "City is required"
      });
    }

    // Get weather data
    const weather = await getWeather(city);

    // Send successful response
    res.status(200).json({
      success: true,
      data: weather
    });

  } catch (error) {
    console.error("Weather API Error:", error.message);

    // City not found
    if (error.message === "City not found") {
      return res.status(404).json({
        success: false,
        message: "City not found"
      });
    }

    // Weather data unavailable
    if (error.message === "Weather data unavailable") {
      return res.status(503).json({
        success: false,
        message: "Weather data is currently unavailable"
      });
    }

    // Other errors
    res.status(500).json({
      success: false,
      message: "Failed to get weather data"
    });
  }
};

module.exports = {
  getWeatherByCity
};