import { CategoryTranslation } from "@/types/models";
import { getAuthToken } from "./auth";
import { FilterOperator, FilterValue } from "@/types/filters";

const baseUrl = process.env.NEXT_PUBLIC_API_URL!;
const PAYLOAD_USERNAME = process.env.PAYLOAD_USERNAME!;
const PAYLOAD_PASSWORD = process.env.PAYLOAD_PASSWORD!;

export interface CategoryTranslationResponse {
  docs: CategoryTranslation[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number | null;
  page: number;
  pagingCounter: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
}

type FilterKeys = keyof Omit<CategoryTranslation, "category"> | "category";

type Filters = Partial<
  Record<FilterKeys, FilterValue | { value: FilterValue; op: FilterOperator }>
>;

type SelectFields = Partial<Record<keyof CategoryTranslation, boolean>> & {
  category?: Partial<Record<keyof CategoryTranslation["category"], boolean>>;
};

interface QueryParams {
  select?: SelectFields;
  where?: Filters;
  limit?: number;
  depth?: number;
  page?: number;
}

function appendWhereParams(url: URL, where?: Filters) {
  if (!where) return;
  for (const [key, rawValue] of Object.entries(where)) {
    if (rawValue == null || rawValue === "") continue;

    const { value, op } =
      typeof rawValue === "object" && "value" in rawValue
        ? rawValue
        : { value: rawValue, op: "equals" };

    url.searchParams.append(`where[${key}][${op}]`, String(value));
  }
}

function appendSelectParams(url: URL, select?: SelectFields) {
  if (!select) return;
  for (const [field, include] of Object.entries(select)) {
    if (!include) continue;
    if (typeof include === "object") {
      for (const [nestedField, nestedInclude] of Object.entries(include)) {
        if (nestedInclude) {
          url.searchParams.append(`select[${field}][${nestedField}]`, "true");
        }
      }
    } else {
      url.searchParams.append(`select[${field}]`, "true");
    }
  }
}

export async function getCategoryTranslations({
  where,
  select,
  limit,
  depth,
  page = 1,
}: QueryParams): Promise<CategoryTranslationResponse> {
  const token = await getAuthToken(PAYLOAD_USERNAME, PAYLOAD_PASSWORD);
  const url = new URL(`${baseUrl}/category-translations`);

  appendWhereParams(url, where);
  appendSelectParams(url, select);
  if (limit) url.searchParams.append("limit", limit.toString());
  if (depth) url.searchParams.append("depth", depth.toString());
  if (page) url.searchParams.append("page", page.toString());

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error fetching category translations");
  }

  const data: CategoryTranslationResponse = await res.json();
  return data;
}
