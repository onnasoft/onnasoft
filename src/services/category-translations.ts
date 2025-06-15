import { CategoryTranslation } from "@/types/models";
import { getAuthToken } from "./auth";

const baseUrl = process.env.NEXT_PUBLIC_API_URL!;
const PAYLOAD_USERNAME = process.env.PAYLOAD_USERNAME!;
const PAYLOAD_PASSWORD = process.env.PAYLOAD_PASSWORD!;

export interface CategoryTranslationResponse {
  docs: CategoryTranslation[];
}

type FilterKeys = keyof Omit<CategoryTranslation, "category"> | "category";
type Filters = Partial<Record<FilterKeys, string>>;

export async function getCategoryTranslations(
  filters: Filters
): Promise<CategoryTranslation[]> {
  const token = await getAuthToken(PAYLOAD_USERNAME, PAYLOAD_PASSWORD);
  const url = new URL(`${baseUrl}/api/category-translations`);

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
    console.error("Failed to fetch category translations:", res.statusText);
    throw new Error("Error fetching category translations");
  }

  const data: CategoryTranslationResponse = await res.json();
  return data.docs;
}
