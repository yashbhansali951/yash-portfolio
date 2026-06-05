# Yash Bhansali - Portfolio & Automation Engine

A high-performance, automation-focused portfolio application built with React and Vite. Designed to showcase engineering projects, scalable systems, and data pipelines with a sleek, terminal-inspired aesthetic.

## 🚀 Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS, Framer Motion
- **Backend:** Vercel Serverless Functions (Node.js)
- **Email Delivery:** Nodemailer (via Gmail SMTP)

## 🛠️ Local Development

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- Vercel CLI (optional, for local serverless testing)

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
   Create a `.env` file in the root directory and configure your credentials for the contact form:
   ```env
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_16_digit_google_app_password
   ```
   *Note: Standard Gmail passwords will not work. You must generate an **App Password** from your Google Account Security settings.*

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   *To test the Serverless API locally, use the Vercel CLI:* `vercel dev`

## 🏗️ Architecture

- `api/contact.js`: Vercel Serverless Function entry point. Handles the contact form submission securely via Nodemailer and Validator.
- `vercel.json`: Handles deployment routing, directing `/api/contact` to the serverless function.
- `src/components/`: Modular React components containing the UI, animations, and forms.
- `vite.config.ts`: Vite configuration optimized for React and CSS processing.

## 🚀 Deployment (Vercel)

This project is optimized for deployment on the Vercel Hobby Tier:
1. Connect your GitHub repository to Vercel.
2. Under **Environment Variables**, add `EMAIL_USER` and `EMAIL_PASS`.
3. Deploy! Vercel will automatically build the React frontend and deploy `api/contact.js` as a Serverless Function.

## 📄 License
MIT License
