const express = require("express");
const router = express.Router();
const Order = require("../models/orderModel");
const nodemailer = require("nodemailer");

// POST /api/order
router.post("/", async (req, res) => {
  try {
    const { name, phone, email, address, product, quantity, instructions } = req.body;

    if (!name || !phone || !address || !product || !quantity) {
      return res.status(400).json({ success: false, message: "Required fields missing" });
    }

    // 1. Save order in DB
    const newOrder = new Order({ name, phone, email, address, product, quantity, instructions });
    await newOrder.save();

    // 2. Send email via Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    const mailOptions = {
      from: `"Gaudeva Orders" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // your email
      subject: "🛒 New Order Received",
      html: `
        <h3>New Order from Gaudeva Website</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email || "Not provided"}</p>
        <p><b>Address:</b> ${address}</p>
        <p><b>Product:</b> ${product}</p>
        <p><b>Quantity:</b> ${quantity}</p>
        <p><b>Instructions:</b> ${instructions || "None"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Order placed successfully" });
  } catch (error) {
    console.error("Order API error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
