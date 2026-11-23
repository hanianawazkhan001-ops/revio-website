-- Revio: create the cars table and load the 12 sample listings
-- Run this once in the Supabase SQL Editor (Dashboard -> SQL Editor -> New query -> Run)

create table if not exists cars (
  slug text primary key,
  make text not null,
  model text not null,
  body_type text not null,
  year int not null,
  mileage int not null,
  gearbox text not null,
  fuel text not null,
  cash_price int not null,
  monthly_price int not null,
  dealer_name text not null,
  dealer_slug text not null,
  dealer_location text not null,
  tone int not null,
  badge_label text not null,
  badge_kind text not null,
  details jsonb,
  created_at timestamptz not null default now()
);

-- Public car listings should be readable by anyone visiting the site,
-- but never writable except through a trusted server (no policy = no writes via the public key).
alter table cars enable row level security;

create policy "Public read access" on cars
  for select
  using (true);

insert into cars (
  slug, make, model, body_type, year, mileage, gearbox, fuel,
  cash_price, monthly_price, dealer_name, dealer_slug, dealer_location,
  tone, badge_label, badge_kind, details
) values
(
  'bmw-3-series', 'BMW', '3 Series 320d M Sport', 'Saloon', 2021, 31200, 'Automatic', 'Diesel',
  22995, 349, 'Bilston Motors', 'bilston-motors', 'Bilston, West Midlands',
  1, 'REVIO PICK', 'yellow',
  '{
    "derivative": "320d M Sport",
    "registration": "YN21 BMT",
    "bodyType": "Saloon",
    "engineSize": "1,995 cc",
    "colour": "Black",
    "doors": 4,
    "power": "190 bhp",
    "co2": "Approx. 127 g/km",
    "driveType": "Rear Wheel Drive",
    "seats": 5,
    "description": "Bilston Motors are pleased to offer this BMW 320d M Sport finished in Black. This example combines M Sport styling with the practicality of the 3 Series, automatic transmission and a strong level of specification. The car is presented in excellent condition throughout and offers a refined, comfortable drive with the equipment expected from a premium executive saloon. Please review the photographs and specification below for full details of this vehicle.",
    "features": ["M Sport Package", "BMW Live Cockpit Professional", "Satellite Navigation", "Apple CarPlay", "Android Auto", "Front & Rear Parking Sensors", "Cruise Control", "Dual-Zone Climate Control", "LED Headlights", "Bluetooth Connectivity", "18” M Sport Alloy Wheels", "Driving Modes"]
  }'::jsonb
),
(
  'mercedes-a-class', 'Mercedes-Benz', 'A-Class A200 AMG Line', 'Hatchback', 2022, 18450, 'Automatic', 'Petrol',
  24495, 369, 'Bilston Motors', 'bilston-motors', 'Bilston, West Midlands',
  2, 'JUST ADDED', 'grey', null
),
(
  'audi-q3', 'Audi', 'Q3 35 TFSI S Line', 'SUV', 2021, 27800, 'Automatic', 'Petrol',
  25995, 389, 'Bilston Motors', 'bilston-motors', 'Bilston, West Midlands',
  3, 'AVAILABLE NOW', 'grey', null
),
(
  'vw-golf', 'Volkswagen', 'Golf 1.5 TSI R-Line', 'Hatchback', 2023, 11900, 'Automatic', 'Petrol',
  23750, 355, 'Bilston Motors', 'bilston-motors', 'Bilston, West Midlands',
  4, 'AVAILABLE NOW', 'grey', null
),
(
  'range-rover-evoque', 'Land Rover', 'Range Rover Evoque D200 R-Dynamic', 'SUV', 2021, 34100, 'Automatic', 'Diesel',
  29995, 449, 'Bilston Motors', 'bilston-motors', 'Bilston, West Midlands',
  5, 'REVIO PICK', 'yellow', null
),
(
  'tesla-model-3', 'Tesla', 'Model 3 Long Range AWD', 'Saloon', 2022, 22300, 'Automatic', 'Electric',
  26995, 405, 'Bilston Motors', 'bilston-motors', 'Bilston, West Midlands',
  6, 'AVAILABLE NOW', 'grey', null
),
(
  'bmw-x3', 'BMW', 'X3 xDrive20d M Sport', 'SUV', 2020, 42600, 'Automatic', 'Diesel',
  27495, 415, 'Bilston Motors', 'bilston-motors', 'Bilston, West Midlands',
  7, 'JUST ADDED', 'grey', null
),
(
  'mercedes-c-class', 'Mercedes-Benz', 'C-Class C220d AMG Line', 'Saloon', 2021, 29700, 'Automatic', 'Diesel',
  25750, 389, 'Northside Cars', 'northside-cars', 'Manchester',
  8, 'AVAILABLE NOW', 'grey', null
),
(
  'audi-a5', 'Audi', 'A5 Sportback 40 TFSI S Line', 'Coupe', 2022, 19600, 'Automatic', 'Petrol',
  28995, 439, 'City Auto Group', 'city-auto-group', 'Birmingham',
  9, 'JUST ADDED', 'grey', null
),
(
  'bmw-5-series', 'BMW', '5 Series 520d M Sport', 'Saloon', 2020, 38900, 'Automatic', 'Diesel',
  24995, 375, 'Premier Vehicles', 'premier-vehicles', 'Leicester',
  10, 'AVAILABLE NOW', 'grey', null
),
(
  'tesla-model-y', 'Tesla', 'Model Y Long Range AWD', 'SUV', 2023, 13400, 'Automatic', 'Electric',
  34995, 519, 'Elite Motor House', 'elite-motor-house', 'London',
  11, 'REVIO PICK', 'yellow', null
),
(
  'vw-tiguan', 'Volkswagen', 'Tiguan 1.5 TSI R-Line', 'SUV', 2022, 21100, 'Automatic', 'Petrol',
  27250, 409, 'Oakfield Motors', 'oakfield-motors', 'Nottingham',
  12, 'AVAILABLE NOW', 'grey', null
)
on conflict (slug) do nothing;
