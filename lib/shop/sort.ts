// Plain module (no "use client") so both the server page and the client select can import it
export const SORT_OPTIONS = [
  "default",
  "price-low",
  "price-high",
  "name",
  "rating",
] as const;

export type SortValue = (typeof SORT_OPTIONS)[number];