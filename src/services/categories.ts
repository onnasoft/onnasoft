import { Category } from "@/types/models";
import { getAuthToken } from "./auth";

const baseUrl = process.env.NEXT_PUBLIC_API_URL!;
const PAYLOAD_USERNAME = process.env.PAYLOAD_USERNAME!;
const PAYLOAD_PASSWORD = process.env.PAYLOAD_PASSWORD!;

export interface CategoryResponse {
  docs: Category[];
}

type FilterKeys = keyof Category;
type Filters = Partial<Record<FilterKeys, string>>;

export async function getCategories(
  filters: Filters = {}
): Promise<Category[]> {
  const token = await getAuthToken(PAYLOAD_USERNAME, PAYLOAD_PASSWORD);
  const url = new URL(`${baseUrl}/api/categories`);

  for (const [key, value] of Object.entries(filters)) {
    if (value != null) {
      url.searchParams.append(`where[${key}][equals]`, value);
    }
  }

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed to fetch categories:", res.statusText);
    throw new Error("Error fetching categories");
  }

  const data: CategoryResponse = await res.json();
  return data.docs;
}
