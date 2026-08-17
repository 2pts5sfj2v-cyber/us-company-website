import type { CategorySlug, Service, ServiceCategory } from "../types";
import { categories } from "./categories";
import { services } from "./services";

export * from "./categories";
export * from "./services";
export * from "./company";

export function getCategory(slug: CategorySlug): ServiceCategory {
  return categories.find((c) => c.slug === slug) as ServiceCategory;
}

export function getServicesByCategory(slug: CategorySlug): Service[] {
  return services.filter((s) => s.category === slug);
}
