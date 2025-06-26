import { Category } from "@/types/models";
import { FilterOperator, FilterValue } from "@/types/filters";

const baseUrl = process.env.NEXT_PUBLIC_API_URL!;

export interface CategoryResponse {
  docs: Category[];
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

type FilterKeys = keyof Category;
type Filters = Partial<
  Record<FilterKeys, FilterValue | { value: FilterValue; op: FilterOperator }>
>;

type SelectFields = Partial<Record<keyof Category, boolean>>;

interface QueryParams {
  where?: Filters;
  select?: SelectFields;
  limit?: number;
  depth?: number;
  page?: number;
  locale?: string;
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
    if (include) {
      url.searchParams.append(`select[${field}]`, "true");
    }
  }
}

export async function getCategories({
  where,
  select,
  limit,
  depth,
  page = 1,
  locale = "en",
}: QueryParams = {}): Promise<CategoryResponse> {
  const url = new URL(`${baseUrl}/categories`);

  appendWhereParams(url, where);
  appendSelectParams(url, select);
  if (limit) url.searchParams.append("limit", limit.toString());
  if (depth) url.searchParams.append("depth", depth.toString());
  if (page) url.searchParams.append("page", page.toString());
  url.searchParams.append("locale", locale);

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error fetching categories");
  }

  const data: CategoryResponse = await res.json();
  return data;
}
