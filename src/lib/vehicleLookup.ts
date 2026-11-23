const DVLA_VES_URL = "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles";

export type VehicleLookupResult = {
  registration: string;
  make: string;
  colour: string;
  fuelType: string;
  yearOfManufacture: number | null;
  taxStatus: string;
  motStatus: string;
};

export type VehicleLookupError = {
  error: "not_found" | "invalid" | "unavailable";
};

// Wraps the DVLA Vehicle Enquiry Service. Kept as the single place that
// knows about DVLA specifically, so a future paid provider (e.g. CAP HPI,
// for full make/model/derivative and a valuation) can be layered in here
// later without touching the Sell flow that calls this function.
export async function lookupVehicle(
  registration: string
): Promise<VehicleLookupResult | VehicleLookupError> {
  const apiKey = process.env.DVLA_VES_API_KEY;
  if (!apiKey) {
    console.error("DVLA_VES_API_KEY is not set — vehicle lookup is unavailable.");
    return { error: "unavailable" };
  }

  // DVLA VRNs are alphanumeric only — strip spaces and any other characters.
  const cleaned = registration.toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (!cleaned) {
    return { error: "invalid" };
  }

  let res: Response;
  try {
    res = await fetch(DVLA_VES_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify({ registrationNumber: cleaned }),
    });
  } catch (err) {
    console.error("DVLA VES request failed:", err);
    return { error: "unavailable" };
  }

  if (res.status === 404) {
    return { error: "not_found" };
  }
  if (!res.ok) {
    console.error("DVLA VES lookup failed:", res.status, await res.text().catch(() => ""));
    return { error: "unavailable" };
  }

  const data = await res.json();
  return {
    registration: data.registrationNumber ?? cleaned,
    make: data.make ?? "",
    colour: data.colour ?? "",
    fuelType: data.fuelType ?? "",
    yearOfManufacture: typeof data.yearOfManufacture === "number" ? data.yearOfManufacture : null,
    taxStatus: data.taxStatus ?? "",
    motStatus: data.motStatus ?? "",
  };
}
