import { NextResponse } from "next/server";
import { lookupVehicle } from "@/lib/vehicleLookup";

const ERROR_MESSAGES: Record<string, string> = {
  not_found: "We couldn't find a vehicle with that registration. Double-check it and try again.",
  invalid: "That doesn't look like a valid registration number.",
  unavailable: "Vehicle lookup is temporarily unavailable.",
};

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const registration = typeof body.registration === "string" ? body.registration : "";

  if (!registration.trim()) {
    return NextResponse.json({ error: "Enter a registration number." }, { status: 400 });
  }

  const result = await lookupVehicle(registration);

  if ("error" in result) {
    return NextResponse.json(
      { error: ERROR_MESSAGES[result.error] },
      { status: result.error === "not_found" ? 404 : 400 }
    );
  }

  return NextResponse.json({ ok: true, vehicle: result });
}
