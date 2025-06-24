import { Post, CoverImage } from "@/types/models";
import { getAuthToken } from "./auth";
import { FilterOperator, FilterValue } from "@/types/filters";

const baseUrl = process.env.NEXT_PUBLIC_API_URL!;
const PAYLOAD_USERNAME = process.env.PAYLOAD_USERNAME!;
const PAYLOAD_PASSWORD = process.env.PAYLOAD_PASSWORD!;

export interface PostResponse {
  docs: Post[];
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

type FilterKeys = keyof Post;

type Filters = Partial<
  Record<FilterKeys, FilterValue | { value: FilterValue; op: FilterOperator }>
>;

type SelectFields = Partial<Record<keyof Post, boolean>>;

interface QueryParams {
  where?: Filters;
  select?: SelectFields;
  limit?: number;
  page?: number;
  locale?: string;
  relations?: string[];
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

export async function getPosts({
  where,
  select,
  limit,
  relations,
  page = 1,
  locale,
}: QueryParams = {}): Promise<PostResponse> {
  const token = await getAuthToken(PAYLOAD_USERNAME, PAYLOAD_PASSWORD);
  const url = new URL(`${baseUrl}/posts`);

  appendWhereParams(url, where);
  appendSelectParams(url, select);
  if (limit) url.searchParams.append("limit", limit.toString());
  if (relations) url.searchParams.append("relations", relations.join(","));
  if (page) url.searchParams.append("page", page.toString());
  if (locale) url.searchParams.append("locale", locale);

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error fetching posts");
  }

  const data: PostResponse = await res.json();

  return data;
}

export async function updatePost(
  id: number,
  postData: Partial<Post>
): Promise<Post> {
  const token = await getAuthToken(PAYLOAD_USERNAME, PAYLOAD_PASSWORD);
  const url = new URL(`${baseUrl}/posts/${id}`);

  const res = await fetch(url.toString(), {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(postData),
  });

  if (!res.ok) {
    throw new Error("Error updating post");
  }

  const updatedPost: Post = await res.json();
  return updatedPost;
}
