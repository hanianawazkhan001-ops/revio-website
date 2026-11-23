import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { sendToAutoConvert } from "@/lib/autoConvert";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    fullName,
    dateOfBirth,
    email,
    mobile,
    addressLine,
    city,
    postcode,
    employmentStatus,
    annualIncome,
    residentialStatus,
    termMonths,
  } = body;

  if (
    !fullName ||
    !dateOfBirth ||
    !email ||
    !mobile ||
    !addressLine ||
    !city ||
    !postcode ||
    !employmentStatus ||
    !annualIncome ||
    !residentialStatus ||
    !termMonths
  ) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 }
    );
  }

  const { error } = await supabaseAdmin.from("finance_applications").insert({
    vehicle_slug: body.vehicleSlug ?? null,
    vehicle_label: body.vehicleLabel ?? null,
    vehicle_price: body.vehiclePrice ?? null,
    desired_budget: body.desiredBudget ?? null,
    deposit_amount: body.depositAmount ?? null,
    term_months: termMonths,
    full_name: fullName,
    date_of_birth: dateOfBirth,
    email,
    mobile,
    address_line: addressLine,
    city,
    postcode,
    employment_status: employmentStatus,
    annual_income: annualIncome,
    residential_status: residentialStatus,
    marketing_consent: Boolean(body.marketingConsent),
  });

  if (error) {
    console.error("Failed to store finance application:", error.message);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }

  try {
    await sendToAutoConvert({
      fullName,
      dateOfBirth,
      email,
      mobile,
      addressLine,
      city,
      postcode,
      employmentStatus,
      annualIncome,
      residentialStatus,
      vehicleLabel: body.vehicleLabel ?? null,
      vehiclePrice: body.vehiclePrice ?? null,
      desiredBudget: body.desiredBudget ?? null,
      depositAmount: body.depositAmount ?? null,
      termMonths,
    });
  } catch (err) {
    // The AutoConvert hand-off isn't wired up yet, and even once it is, a
    // failure there should never fail the customer's submission — the
    // application is already safely stored above.
    console.error("AutoConvert hand-off failed:", err);
  }

  return NextResponse.json({ ok: true });
}
