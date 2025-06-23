import { PostTranslation } from "@/types/models";
import { getAuthToken } from "./auth";
import { FilterOperator, FilterValue } from "@/types/filters";

const baseUrl = process.env.NEXT_PUBLIC_API_URL!;
const PAYLOAD_USERNAME = process.env.PAYLOAD_USERNAME!;
const PAYLOAD_PASSWORD = process.env.PAYLOAD_PASSWORD!;

export interface PostTranslationResponse {
  docs: PostTranslation[];
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

type FilterKeys = keyof Omit<PostTranslation, "post"> | "post";
type Filters = Partial<
  Record<FilterKeys, FilterValue | { value: FilterValue; op: FilterOperator }>
>;

type SelectFields = Partial<Record<keyof PostTranslation, boolean>>;

export interface QueryParams {
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

function buildQueryParams(
  url: URL,
  where?: Filters,
  select?: SelectFields,
  limit?: number,
  depth?: number,
  page: number = 1
) {
  appendWhereParams(url, where);
  if (limit) url.searchParams.append("limit", limit.toString());
  if (depth) url.searchParams.append("depth", depth.toString());
  appendSelectParams(url, select);

  if (page) {
    url.searchParams.append("page", page.toString());
  }
}

export async function getPostTranslations({
  select,
  where,
  depth,
  limit,
  page = 1,
}: QueryParams): Promise<PostTranslationResponse> {
  const token = await getAuthToken(PAYLOAD_USERNAME, PAYLOAD_PASSWORD);
  const url = new URL(`${baseUrl}/post-translations`);

  buildQueryParams(url, where, select, limit, depth, page);

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Error fetching post translations");

  const data: PostTranslationResponse = await res.json();

  return {
    ...data,
    docs: data.docs,
  };
}
