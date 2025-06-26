import { Post } from "@/types/models";

const baseUrl = process.env.NEXT_PUBLIC_API_URL!;

export interface SearchResponse {
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

interface QueryParams {
  limit?: number;
  page?: number;
  search?: string;
  locale?: string;
}

export async function search({
  limit,
  page = 1,
  search,
  locale = "en",
}: QueryParams = {}): Promise<SearchResponse> {
  const url = new URL(`${baseUrl}/posts/search`);

  if (search) url.searchParams.append("q", search);
  if (limit) url.searchParams.append("limit", limit.toString());
  url.searchParams.append("page", page.toString());
  url.searchParams.append("locale", locale);

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error fetching posts");
  }

  const data: SearchResponse = await res.json();

  return data;
}
