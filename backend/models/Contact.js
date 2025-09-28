const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  contactNo: { type: String, required: true },
  email: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Specify the collection name as 'contact'
module.exports = mongoose.model("Contact", contactSchema, "contact");