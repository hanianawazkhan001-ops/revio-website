# Revio — Car Finance Website

A customer-facing website for **Revio**, a UK car finance platform. Visitors can browse cars from partner dealerships, apply for finance, value and sell their car, and get in touch, all in one place.

## Features

- **Car listings** with search and filtering, plus a detail page for each vehicle
- **Dealer pages** showing each partner dealership and its stock
- **Finance application form** that sends leads straight to the database
- **"Sell your car" wizard** with automatic vehicle lookup by registration number (DVLA Vehicle Enquiry Service)
- **Cash purchase option** alongside finance
- **Dealer partnership sign-up** for new dealerships
- **Complaints, contact and FAQ pages**
- **UK-compliant privacy, cookie and terms pages**, with a cookie consent banner and saved preferences
- Responsive layout with scroll animations

## Tech stack

- **Next.js** (App Router) and **TypeScript**
- **Supabase** (PostgreSQL) for car, dealer and lead data
- **Next.js API routes** for form submissions and vehicle lookup
- **DVLA VES API** for registration lookups
- CSS / PostCSS

## Project structure

```
src/
  app/(site)/     → public pages (home, cars, finance, sell, partner, policies…)
  app/api/        → API routes (finance, sell, partner, vehicle-lookup)
  components/     → reusable UI (CarCard, FinanceForm, SellWizard, CookieConsent…)
  lib/            → data access, Supabase clients, helpers
supabase/         → SQL for database tables
```

## Running locally

```bash
npm install
npm run dev
```

Create a `.env.local` file with your own keys:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
DVLA_VES_API_KEY=
```

Then open http://localhost:3000.

---

The companion admin dashboard is in [Revio-Admin-Dashboard](https://github.com/hanianawazkhan001-ops/Revio-Admin-Dashboard).

Built by **Hania**.
