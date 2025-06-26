import { Comment } from "@/types/models";
import { FilterOperator, FilterValue } from "@/types/filters";
import { JSONContent } from "@tiptap/react";

const baseUrl = process.env.NEXT_PUBLIC_API_URL!;

export interface CommentResponse {
  docs: Comment[];
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

type FilterKeys = keyof Comment;

type Filters = Partial<
  Record<FilterKeys, FilterValue | { value: FilterValue; op: FilterOperator }>
>;

type SelectFields = Partial<Record<keyof Comment, boolean>>;

interface QueryParams {
  where?: Filters;
  select?: SelectFields;
  limit?: number;
  page?: number;
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

export async function getComments({
  where,
  select,
  limit,
  relations,
  page = 1,
}: QueryParams = {}): Promise<CommentResponse> {
  const url = new URL(`${baseUrl}/comments`);

  appendWhereParams(url, where);
  appendSelectParams(url, select);
  if (limit) url.searchParams.append("limit", limit.toString());
  if (relations) url.searchParams.append("relations", relations.join(","));
  if (page) url.searchParams.append("page", page.toString());

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error fetching comments");
  }

  const data: CommentResponse = await res.json();
  return data;
}

interface CreateCommentParams {
  value: JSONContent;
  post_id: number;
}

export async function createComment(
  { post_id, value }: CreateCommentParams,
  token: string
): Promise<Comment> {
  const url = new URL(`${baseUrl}/comments`);

  const res = await fetch(url.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post_id,
      value,
    }),
  });

  if (!res.ok) {
    throw new Error("Error creating comment");
  }

  const updatedComment: Comment = await res.json();
  return updatedComment;
}
