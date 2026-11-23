import { MIN_CAR_PHOTOS, type Car } from "@/lib/cars";

export type CarIssue = {
  slug: string;
  make: string;
  model: string;
  message: string;
};

// Centralised so the count shown on the dashboard, the issues list page,
// and any future check all agree on what counts as a problem. Extend this
// as more requirements get added (e.g. a missing description).
export function getCarIssues(cars: Car[]): CarIssue[] {
  const issues: CarIssue[] = [];

  for (const car of cars) {
    if (car.images.length < MIN_CAR_PHOTOS) {
      issues.push({
        slug: car.slug,
        make: car.make,
        model: car.model,
        message: `Only ${car.images.length} of the required ${MIN_CAR_PHOTOS} photos uploaded.`,
      });
    }
  }

  return issues;
}
