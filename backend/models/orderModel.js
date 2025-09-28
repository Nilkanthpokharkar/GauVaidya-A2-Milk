const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    address: { type: String, required: true },
    product: { type: String, required: true },
    quantity: { type: Number, required: true },
    instructions: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema, "orders");
