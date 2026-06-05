import { createTransport } from 'nodemailer';
import validator from 'validator';

// Environment variables validation
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  throw new Error('Email credentials not configured in environment variables');
}

// SMTP transporter configuration
const transporter = createTransport({
  service: 'gmail', // or your SMTP service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Input validation and sanitization
const sanitizeInput = (input) => {
  return validator.escape(validator.trim(input));
};

const validateEmail = (email) => {
  return validator.isEmail(email);
};

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, context } = req.body;

    // Validate required fields
    if (!name || !email || !context) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedContext = sanitizeInput(context);

    // Validate email format
    if (!validateEmail(sanitizedEmail)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // or your receiving email
      subject: `New contact form submission from ${sanitizedName}`,
      text: `
        Name: ${sanitizedName}
        Email: ${sanitizedEmail}
        Message: ${sanitizedContext}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedContext.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Set CORS headers for successful response
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
}
