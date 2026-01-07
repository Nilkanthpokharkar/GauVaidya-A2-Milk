const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// --- 1. ENHANCED MIDDLEWARE ---
// This configuration ensures that Render's HTTPS and pre-flight requests pass through
app.use(cors({
  origin: "*", // Allows all origins. For tighter security, use your specific frontend Render URL
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// Handle OPTIONS pre-flight requests globally
app.options("*", cors());

// --- 2. ROUTES ---
const contactRoutes = require("./routes/contactRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/api/contact", contactRoutes);
app.use("/api/orders", orderRoutes);

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({ status: "ok", message: "GauVaidya Backend is running..." });
});

// --- 3. SERVER LOGIC ---
const PORT = process.env.PORT || 5006;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    
    // Listen on 0.0.0.0 is MANDATORY for Render
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); 
  });