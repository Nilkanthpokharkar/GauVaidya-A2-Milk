const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
// Allow requests from your local machine and your Render frontend
app.use(cors({
  origin: "*" // In production, you can replace "*" with your specific Render frontend URL
}));
app.use(express.json());

// Routes
const contactRoutes = require("./routes/contactRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/api/contact", contactRoutes);
app.use("/api/orders", orderRoutes); // Changed to plural to match the frontend call

// Health Check Route (Helps Render monitor your app)
app.get("/", (req, res) => {
  res.send("GauVaidya Backend is running...");
});

// Use Render's dynamic PORT or default to 5006
const PORT = process.env.PORT || 5006;

// Connect DB and Start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    
    // IMPORTANT: Listen on 0.0.0.0 for Render deployment
    app.listen(PORT, "0.0.0.0", () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  })
  .catch(err => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Exit if DB connection fails
  });