const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { fullName, contactNo, email, message } = req.body;

    if (!fullName || !contactNo || !message) {
      return res.status(400).json({ success: false, message: "Required fields missing" });
    }

    // 1. Save in DB
    const newContact = new Contact({ fullName, contactNo, email, message });
    await newContact.save();

    // 2. Send email via Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // ✅ must be inside this same object
      },
    });

    const mailOptions = {
      from: `"GauVeda Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // send to yourself
      subject: "📩 New Contact Form Submission",
      html: `
        <h3>New Message from GauVeda Contact Page</h3>
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Contact No:</b> ${contactNo}</p>
        <p><b>Email:</b> ${email || "Not provided"}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Message stored and email sent" });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
