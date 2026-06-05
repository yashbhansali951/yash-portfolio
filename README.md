# Yash Bhansali - Portfolio & Automation Engine

A high-performance, automation-focused portfolio application built with React, Vite, and Express. Designed to showcase engineering projects, scalable systems, and data pipelines with a sleek, terminal-inspired aesthetic.

## 🚀 Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express, Nodemailer
- **Security:** Helmet, express-rate-limit, Input Sanitization

## 🛠️ Local Development

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd portfolio-main
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   Create a `.env` file in the root directory and configure your SMTP credentials for the contact form:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password
   CONTACT_RECEIVER_EMAIL=your_email@gmail.com
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   This will concurrently start both the Vite frontend and the Express backend.

## 🏗️ Architecture

- `server.ts`: The Express backend entry point. Handles API routes (e.g., `/api/contact`), rate limiting, security headers, and serves the Vite application in production.
- `src/components/`: Modular React components containing the UI, animations, and forms.
- `vite.config.ts`: Vite configuration optimized for React and CSS processing.

## 🛡️ Security Features

- **XSS Protection:** Backend HTML escaping for all user inputs.
- **DDoS Prevention:** Payload size limits (`10kb`) and rate limiting (`5 requests / 15 mins`).
- **HTTP Headers:** Hardened using Helmet.

## 📄 License
MIT License
