const express = require("express");
const fs = require("fs");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const weatherRoutes = require("./routes/weatherRoutes");

// Read .env directly
const env = dotenv.parse(fs.readFileSync(".env"));
process.env.MONGO_URI = env.MONGO_URI;

const app = express();
const PORT = 3000;

app.use(express.json());

// Weather API routes
app.use("/api/weather", weatherRoutes);

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "AI WeatherWise API is running!"
  });
});

// Connect to MongoDB
//connectDB();

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});