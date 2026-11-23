import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(request: Request) {
  const body = await request.json();
  const { dealershipName, contactName, mobile, email, postcode, stockCount } = body;

  if (!dealershipName || !contactName || !mobile || !email || !postcode || !stockCount) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const { error } = await supabaseAdmin.from("partner_applications").insert({
    dealership_name: dealershipName,
    contact_name: contactName,
    mobile,
    email,
    postcode,
    stock_count: stockCount,
  });

  if (error) {
    console.error("Failed to store partner application:", error.message);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
