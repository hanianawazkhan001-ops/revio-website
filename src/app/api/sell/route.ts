import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(request: Request) {
  const body = await request.json();
  const { fullName, mobile, email, postcode } = body;

  if (!fullName || !mobile || !email || !postcode) {
    return NextResponse.json(
      { error: "Full name, mobile, email and postcode are required." },
      { status: 400 }
    );
  }

  const { error } = await supabaseAdmin.from("sell_submissions").insert({
    registration: body.registration ?? null,
    mileage: body.mileage ?? null,
    service_history: body.serviceHistory ?? null,
    keys: body.keys ?? null,
    outstanding_finance: body.outstandingFinance ?? null,
    condition: body.condition ?? null,
    warning_lights: body.warningLights ?? [],
    damage: body.damage ?? [],
    notes: body.notes ?? null,
    dvla_make: body.dvlaMake ?? null,
    dvla_colour: body.dvlaColour ?? null,
    dvla_fuel_type: body.dvlaFuelType ?? null,
    dvla_year: body.dvlaYear ?? null,
    full_name: fullName,
    mobile,
    email,
    postcode,
  });

  if (error) {
    console.error("Failed to store sell submission:", error.message);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
