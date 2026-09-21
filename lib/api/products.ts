import type { Product } from "@/types/products";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://your-api.com";

/**
 * Fetch all products from the API.
 * Replace the URL below with your real endpoint once it's ready.
 */
export async function getAllProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL}/products`, {
    // "no-store" = always fresh (good while building/testing).
    // Switch to { next: { revalidate: 60 } } later for caching.
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status}`);
  }

  return res.json();
}

/**
 * Fetch a single product by id.
 * Returns null if not found (404), so pages can call notFound().
 */
export async function getProductById(id: string): Promise<Product | null> {
  const res = await fetch(`${API_BASE_URL}/products/${id}`, {
    cache: "no-store",
  });

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch product ${id}: ${res.status}`);
  }

  return res.json();
}