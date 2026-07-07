# Vithusha Pathmanathan — Portfolio

Modern MERN portfolio with AI chat assistant, contact form, and Vercel deployment.

## Live Demo

Deploy to [Vercel](https://vercel.com) — see [Deploy to Vercel](#deploy-to-vercel) below.

## Features

- Premium responsive UI with light/dark mode
- Hero with particle network animation
- Intern projects with live demo links
- AI portfolio assistant
- Contact form → emails **vithusha014@gmail.com**

## Local Development

```bash
npm run install:all
cp .env.example server/.env
# Edit server/.env with Gmail App Password for contact emails
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Contact Email Setup

Messages are sent to **vithusha014@gmail.com**.

1. Enable 2FA on your Google account
2. Create an [App Password](https://myaccount.google.com/apppasswords)
3. Add to Vercel Environment Variables (or `server/.env` locally):

| Variable | Value |
|----------|-------|
| `CONTACT_TO_EMAIL` | `vithusha014@gmail.com` |
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | `vithusha014@gmail.com` |
| `SMTP_PASS` | your Gmail app password |

## Deploy to Vercel

### Option 1 — Vercel Dashboard

1. Push this project to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. **Root Directory:** leave as `.` (project root)
5. Vercel reads `vercel.json` automatically
6. Add environment variables (SMTP settings above)
7. Click **Deploy**

### Option 2 — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

Add env vars in the Vercel dashboard under **Settings → Environment Variables**.

### What gets deployed

| Path | Purpose |
|------|---------|
| `client/` | React frontend (static) |
| `api/contact.js` | Contact form serverless function |
| `api/ai/chat.js` | AI chat serverless function |

## Customize

Edit `client/src/data/portfolioData.js` for your content.

Profile photo: `client/public/profile.png`

Resume: add `client/public/resume.pdf` for Download CV button.

## Tech Stack

React · Vite · Tailwind CSS · Framer Motion · Express · Vercel Serverless · Nodemailer
