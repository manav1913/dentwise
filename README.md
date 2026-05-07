# DentiQ 🦷

AI-powered dental appointment management platform built with Next.js, Prisma, Clerk authentication, and Supabase.
# Live Demo

[https://denti-q.vercel.app/](https://denti-q.vercel.app/)
## Overview

DentiQ is a modern dental management application that allows patients to book appointments, interact with an AI voice assistant, and manage their dental visits through a clean dashboard experience. It also includes an admin panel for managing doctors and appointments.

## Features

### Patient Features

* AI voice assistant experience
* Secure authentication with Clerk
* Book dental appointments
* View upcoming appointments
* Appointment history tracking
* Dental health overview dashboard
* Responsive modern UI

### Admin Features

* Manage doctors
* View all appointments
* Update appointment statuses
* Doctor availability management
* Admin analytics dashboard

## Tech Stack

### Frontend

* Next.js 15
* React 19
* TypeScript
* Tailwind CSS
* shadcn/ui

### Backend

* Prisma ORM
* Supabase PostgreSQL
* Clerk Authentication
* Server Actions

### Other Integrations

* Vapi AI
* Resend Email API

---

# Screenshots

Add your screenshots here.

```md
![Dashboard](./public/dashboard.png)
```

---

# Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/your-username/dentiq.git
cd dentiq
```

## 2. Install dependencies

```bash
npm install
```

## 3. Setup environment variables

Create a `.env` file in the root directory.

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
DATABASE_URL=
NEXT_PUBLIC_VAPI_API_KEY=
NEXT_PUBLIC_VAPI_ASSISTANT_ID=
RESEND_API_KEY=
```

---

# Database Setup

## Prisma

Generate Prisma client:

```bash
npx prisma generate
```

Push schema to database:

```bash
npx prisma db push
```

---

# Running Locally

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

# Production Build

```bash
npm run build
```

---

# Deployment

The project is optimized for deployment on Vercel.

## Vercel Setup

1. Import GitHub repository into Vercel
2. Add environment variables
3. Deploy

## Important

For Supabase on Vercel, use the Transaction Pooler connection string:

```env
DATABASE_URL=postgresql://...pooler.supabase.com:6543/postgres?pgbouncer=true
```

---

# Project Structure

```txt
src/
 ├── app/
 ├── components/
 ├── hooks/
 ├── lib/
 │    ├── actions/
 │    ├── prisma.ts
 │    └── utils.ts
 └── middleware.ts
```

---

# Authentication

Authentication is handled using Clerk.

Protected routes:

* Dashboard
* Appointments
* Admin Panel
* Voice Assistant

---

# AI Voice Assistant

DentiQ integrates Vapi AI for conversational dental assistance.

Capabilities include:

* Appointment assistance
* Basic dental guidance
* Voice interaction experience

---

# Future Improvements


* SMS reminders
* Video consultations
* Multi-clinic support
* Appointment calendar sync
* AI-powered dental reports

---



---

# Author

Built by Manav.
