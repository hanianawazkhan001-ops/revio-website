import { supabase } from "@/lib/supabaseClient";

export type CarDetails = {
  derivative: string;
  registration: string;
  bodyType: string;
  engineSize: string;
  colour: string;
  doors: number;
  power: string;
  co2: string;
  driveType: string;
  seats: number;
  description: string;
  features: string[];
};

export type BodyType =
  | "Hatchback"
  | "Saloon"
  | "Estate"
  | "SUV"
  | "Coupe"
  | "Convertible"
  | "MPV";

export type FuelType =
  | "Petrol"
  | "Diesel"
  | "Electric"
  | "Hybrid"
  | "Plug-in Hybrid"
  | "Mild Hybrid Petrol"
  | "Mild Hybrid Diesel";

export const BODY_TYPES: BodyType[] = [
  "Hatchback",
  "Saloon",
  "Estate",
  "SUV",
  "Coupe",
  "Convertible",
  "MPV",
];

export const MIN_CAR_PHOTOS = 5;
export const RECOMMENDED_CAR_PHOTOS = 20;
export const MAX_CAR_PHOTOS = 50;

export const FUEL_TYPES: FuelType[] = [
  "Petrol",
  "Diesel",
  "Electric",
  "Hybrid",
  "Plug-in Hybrid",
  "Mild Hybrid Petrol",
  "Mild Hybrid Diesel",
];

export type Car = {
  slug: string;
  make: string;
  model: string;
  bodyType: BodyType;
  year: number;
  mileage: number;
  gearbox: "Automatic" | "Manual";
  fuel: FuelType;
  cashPrice: number;
  monthlyPrice: number;
  dealerName: string;
  dealerSlug: string;
  dealerLocation: string;
  tone: number;
  badge: { label: string; kind: "yellow" | "grey" };
  images: string[];
  createdAt: string;
  details?: CarDetails;
};

export const MAKE_MODELS: Record<string, string[]> = {
  Abarth: ["500", "595", "695"],
  "Alfa Romeo": ["Giulietta", "Giulia", "Stelvio", "Tonale"],
  Alpine: ["A110"],
  "Aston Martin": ["Vantage", "DB11", "DB12", "DBS", "DBX"],
  Audi: ["A1", "A3", "A4", "A5", "A6", "A7", "A8", "Q2", "Q3", "Q5", "Q7", "Q8", "TT", "R8", "e-tron GT"],
  Bentley: ["Continental GT", "Flying Spur", "Bentayga"],
  BMW: ["1 Series", "2 Series", "3 Series", "4 Series", "5 Series", "6 Series", "7 Series", "8 Series", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "Z4", "i4", "iX", "M3", "M4", "M5"],
  BYD: ["Atto 3", "Dolphin", "Seal"],
  Chevrolet: ["Camaro", "Corvette"],
  Citroën: ["C1", "C3", "C3 Aircross", "C4", "C5 Aircross", "Berlingo"],
  Cupra: ["Formentor", "Leon", "Born", "Ateca"],
  Dacia: ["Sandero", "Duster", "Jogger", "Spring"],
  "DS Automobiles": ["DS 3", "DS 4", "DS 7", "DS 9"],
  Ferrari: ["Roma", "Portofino", "296", "SF90", "812", "Purosangue"],
  Fiat: ["500", "500e", "Panda", "Tipo", "500X"],
  Ford: ["Fiesta", "Focus", "Puma", "Kuga", "Mondeo", "EcoSport", "Edge", "Mustang", "Mustang Mach-E", "Ranger", "Galaxy", "S-Max"],
  Genesis: ["G70", "G80", "G90", "GV60", "GV70", "GV80"],
  Honda: ["Jazz", "Civic", "CR-V", "HR-V", "e", "ZR-V"],
  Hyundai: ["i10", "i20", "i30", "Tucson", "Kona", "Santa Fe", "IONIQ 5", "IONIQ 6", "Bayon"],
  Isuzu: ["D-Max"],
  Jaguar: ["XE", "XF", "F-Type", "F-Pace", "E-Pace", "I-Pace"],
  Jeep: ["Renegade", "Compass", "Avenger", "Cherokee", "Wrangler", "Grand Cherokee"],
  Kia: ["Picanto", "Rio", "Ceed", "Stonic", "Sportage", "Sorento", "Niro", "EV6", "Soul", "XCeed"],
  Lamborghini: ["Huracán", "Urus", "Revuelto"],
  "Land Rover": ["Defender", "Discovery", "Discovery Sport", "Range Rover", "Range Rover Sport", "Range Rover Evoque", "Range Rover Velar"],
  Lexus: ["CT", "IS", "ES", "RX", "NX", "UX", "LS", "LC", "RZ"],
  Lotus: ["Emira", "Eletre", "Evija"],
  Maserati: ["Ghibli", "Levante", "Quattroporte", "MC20", "Grecale"],
  Mazda: ["2", "3", "6", "CX-3", "CX-5", "CX-30", "CX-60", "MX-5"],
  McLaren: ["GT", "Artura", "720S", "750S"],
  "Mercedes-Benz": ["A-Class", "B-Class", "C-Class", "CLA", "CLS", "E-Class", "S-Class", "GLA", "GLB", "GLC", "GLE", "GLS", "G-Class", "SL", "AMG GT", "EQA", "EQB", "EQC", "EQE", "EQS"],
  MG: ["MG3", "MG4", "MG5", "ZS", "HS"],
  MINI: ["Hatch", "Clubman", "Countryman", "Convertible", "Electric"],
  Mitsubishi: ["Space Star", "ASX", "Eclipse Cross", "Outlander", "L200"],
  Nissan: ["Micra", "Juke", "Qashqai", "X-Trail", "Leaf", "Ariya", "GT-R"],
  Peugeot: ["108", "208", "308", "408", "2008", "3008", "5008", "e-208", "Rifter"],
  Polestar: ["Polestar 2", "Polestar 3", "Polestar 4"],
  Porsche: ["911", "718 Cayman", "718 Boxster", "Panamera", "Macan", "Cayenne", "Taycan"],
  Renault: ["Clio", "Captur", "Megane", "Austral", "Zoe", "Scenic", "Kadjar"],
  "Rolls-Royce": ["Phantom", "Ghost", "Wraith", "Cullinan", "Spectre"],
  SEAT: ["Ibiza", "Leon", "Arona", "Ateca", "Tarraco"],
  Škoda: ["Fabia", "Scala", "Octavia", "Kamiq", "Karoq", "Kodiaq", "Superb", "Enyaq"],
  Smart: ["EQ fortwo", "#1", "#3"],
  "SsangYong": ["Torres", "Musso", "Rexton"],
  Subaru: ["Impreza", "XV", "Forester", "Outback", "BRZ"],
  Suzuki: ["Swift", "Ignis", "Vitara", "S-Cross", "Jimny"],
  Tesla: ["Model 3", "Model S", "Model X", "Model Y", "Cybertruck"],
  Toyota: ["Yaris", "Corolla", "C-HR", "RAV4", "Camry", "Prius", "Aygo X", "Highlander", "Land Cruiser", "GR Yaris", "GR86", "bZ4X"],
  Vauxhall: ["Corsa", "Astra", "Crossland", "Grandland", "Insignia", "Mokka", "Combo Life"],
  Volkswagen: ["Polo", "Golf", "ID.3", "ID.4", "ID.5", "ID.7", "Tiguan", "Touareg", "T-Roc", "T-Cross", "Passat", "Arteon", "Up"],
  Volvo: ["XC40", "XC60", "XC90", "S60", "S90", "V60", "V90", "EX30"],
};

// Raw shape of a row exactly as it comes back from the `cars` table in
// Supabase, joined against its linked `dealers` row via `dealer_id`.
type CarRow = {
  slug: string;
  make: string;
  model: string;
  body_type: string;
  year: number;
  mileage: number;
  gearbox: string;
  fuel: string;
  cash_price: number;
  monthly_price: number;
  dealer_id: string;
  tone: number;
  badge_label: string;
  badge_kind: string;
  images: string[] | null;
  created_at: string;
  details: CarDetails | null;
  dealers: { name: string; slug: string; location: string } | null;
};

const CAR_SELECT = "*, dealers(name, slug, location)";

function mapRow(row: CarRow): Car {
  return {
    slug: row.slug,
    make: row.make,
    model: row.model,
    bodyType: row.body_type as BodyType,
    year: row.year,
    mileage: row.mileage,
    gearbox: row.gearbox as Car["gearbox"],
    fuel: row.fuel as Car["fuel"],
    cashPrice: row.cash_price,
    monthlyPrice: row.monthly_price,
    dealerName: row.dealers?.name ?? "",
    dealerSlug: row.dealers?.slug ?? "",
    dealerLocation: row.dealers?.location ?? "",
    tone: row.tone,
    badge: { label: row.badge_label, kind: row.badge_kind as "yellow" | "grey" },
    images: row.images ?? [],
    createdAt: row.created_at,
    details: row.details ?? undefined,
  };
}

export async function getCars(): Promise<Car[]> {
  const { data, error } = await supabase
    .from("cars")
    .select(CAR_SELECT)
    .order("tone", { ascending: true });

  if (error) {
    console.error("Failed to load cars from Supabase:", error.message);
    return [];
  }
  return (data as unknown as CarRow[]).map(mapRow);
}

export async function getCar(slug: string): Promise<Car | undefined> {
  const { data, error } = await supabase
    .from("cars")
    .select(CAR_SELECT)
    .eq("slug", slug)
    .maybeSingle();

  if (error || !data) return undefined;
  return mapRow(data as unknown as CarRow);
}

export async function getCarsByDealer(dealerSlug: string): Promise<Car[]> {
  const { data, error } = await supabase
    .from("cars")
    .select("*, dealers!inner(name, slug, location)")
    .eq("dealers.slug", dealerSlug)
    .order("tone", { ascending: true });

  if (error) {
    console.error("Failed to load dealer cars from Supabase:", error.message);
    return [];
  }
  return (data as unknown as CarRow[]).map(mapRow);
}
