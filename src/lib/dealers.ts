import { supabase } from "@/lib/supabaseClient";

export type Dealer = {
  id: string;
  slug: string;
  name: string;
  location: string;
  description: string | null;
  contactName: string | null;
  phone: string | null;
  email: string | null;
};

type DealerRow = {
  id: string;
  slug: string;
  name: string;
  location: string;
  description: string | null;
  contact_name: string | null;
  phone: string | null;
  email: string | null;
};

function mapRow(row: DealerRow): Dealer {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    location: row.location,
    description: row.description,
    contactName: row.contact_name,
    phone: row.phone,
    email: row.email,
  };
}

export async function getDealers(): Promise<Dealer[]> {
  const { data, error } = await supabase
    .from("dealers")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    console.error("Failed to load dealers from Supabase:", error.message);
    return [];
  }
  return (data as DealerRow[]).map(mapRow);
}

export async function getDealer(slug: string): Promise<Dealer | undefined> {
  const { data, error } = await supabase
    .from("dealers")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error || !data) return undefined;
  return mapRow(data as DealerRow);
}
