-- Revio: tables for Sell Your Car submissions and Partner enquiries
-- Run this once in the Supabase SQL Editor (Dashboard -> SQL Editor -> New query -> Run)

create table if not exists sell_submissions (
  id uuid primary key default gen_random_uuid(),
  registration text,
  mileage text,
  service_history text,
  keys text,
  outstanding_finance text,
  condition text,
  warning_lights jsonb,
  damage jsonb,
  notes text,
  full_name text not null,
  mobile text not null,
  email text not null,
  postcode text not null,
  created_at timestamptz not null default now()
);

create table if not exists partner_applications (
  id uuid primary key default gen_random_uuid(),
  dealership_name text not null,
  contact_name text not null,
  mobile text not null,
  email text not null,
  postcode text not null,
  stock_count text not null,
  created_at timestamptz not null default now()
);

-- These hold private customer/business leads, not public content like the cars table.
-- RLS is enabled with NO policies, so the public anon key cannot read or write here at all.
-- Only the service_role key (used exclusively by our server-side API routes, never the browser) can access them.
alter table sell_submissions enable row level security;
alter table partner_applications enable row level security;
