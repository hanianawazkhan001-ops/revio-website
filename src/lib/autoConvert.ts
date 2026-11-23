import "server-only";

export type FinanceApplicationForAutoConvert = {
  fullName: string;
  dateOfBirth: string;
  email: string;
  mobile: string;
  addressLine: string;
  city: string;
  postcode: string;
  employmentStatus: string;
  annualIncome: number;
  residentialStatus: string;
  vehicleLabel: string | null;
  vehiclePrice: number | null;
  desiredBudget: number | null;
  depositAmount: number | null;
  termMonths: string;
};

/**
 * Single hand-off point to AutoConvert, the finance/CRM platform Revio's
 * sales team already works from. Not wired up yet — Alex needs to confirm
 * with AutoConvert how they want leads delivered (API/webhook credentials,
 * or a lead-inbox email address) before this can do anything real.
 *
 * Every application is saved to Supabase (`finance_applications`) before
 * this is ever called, so nothing is lost while this remains a no-op.
 */
export async function sendToAutoConvert(
  application: FinanceApplicationForAutoConvert
): Promise<void> {
  void application;
  // TODO(AutoConvert integration): once Alex confirms the delivery method,
  // implement it here — e.g. POST to their webhook/API, or send a
  // formatted lead email to their intake address.
}
