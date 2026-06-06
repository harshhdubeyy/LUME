# LUME

### AI-Powered WhatsApp Business Automation Platform

LUME helps businesses automate customer conversations, order management, bookings, support, and lead generation directly on WhatsApp using intelligent workflows and AI-driven automation.

Built for restaurants, cafes, local businesses, and service providers looking to scale customer interactions without increasing operational overhead.

---

## Features

### Authentication

* Secure Google OAuth Login
* User Management with Supabase Auth
* Session Persistence

### WhatsApp Automation

* Automated Customer Conversations
* Order & Booking Workflows
* Smart Support Flows
* Lead Capture Automation

### Subscription Billing

* Razorpay Payment Gateway Integration
* Subscription Management
* Plan Upgrades
* Payment Tracking

### Business Growth Tools

* Lead Collection Forms
* Customer Inquiry Management
* Conversion-Focused Landing Pages
* Analytics-Ready Architecture

### Modern SaaS Experience

* Responsive Design
* Premium UI/UX
* Smooth Scrolling Navigation
* Interactive Pricing Section
* Mobile-First Experience

---

## Tech Stack

### Frontend

* Next.js 15
* TypeScript
* Tailwind CSS
* Framer Motion

### Backend

* Supabase
* PostgreSQL

### Authentication

* Google OAuth
* Supabase Auth

### Payments

* Razorpay

### Deployment

* Vercel

---

##  Project Structure

```bash
app/
├── api/
├── dashboard/
├── page.tsx

components/
├── Navbar
├── HeroSection
├── PricingSection
├── ContactSection
├── Footer

lib/
├── auth.ts
├── supabase.ts
├── user.ts
```

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/yourusername/lume.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_ANON_KEY=

NEXT_PUBLIC_RAZORPAY_KEY_ID=

RAZORPAY_KEY_SECRET=
```

---

## Deployment

LUME is designed for deployment on Vercel.

```bash
npm run build
```

```bash
vercel --prod
```

---

## Current Status

### MVP Completed

* [x] Landing Page
* [x] Google Authentication
* [x] Supabase Integration
* [x] Lead Capture System
* [x] Razorpay Payments
* [x] Pricing Plans
* [x] Contact Management
* [x] Responsive UI

### Upcoming Features

* [ ] WhatsApp Cloud API Integration
* [ ] AI Agent Builder
* [ ] Analytics Dashboard
* [ ] Broadcast Messaging
* [ ] Customer CRM
* [ ] Team Management

---

## Vision

LUME aims to become the operating system for WhatsApp-first businesses by enabling intelligent customer interactions, automated workflows, and scalable business growth through conversational AI.

---

## Author

**Hitakshi**

Building AI-powered products, automation systems, and scalable SaaS applications.

---

### Built using Next.js, Supabase, and Razorpay.
