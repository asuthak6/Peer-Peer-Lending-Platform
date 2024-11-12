// server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Import routes
const authRoutes = require("./routes/auth");

// Initialize express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use auth routes
app.use("/api/auth", authRoutes); // This line mounts the routes

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
