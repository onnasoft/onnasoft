import { Post, CoverImage } from "@/types/models";
import { getAuthToken } from "./auth";

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
type FilterOperator = "equals" | "not_equals" | "like" | "in" | "not_in";
type FilterValue = string | number;

type Filters = Partial<
  Record<FilterKeys, FilterValue | { value: FilterValue; op: FilterOperator }>
>;

type SelectFields = Partial<Record<keyof Post, boolean>>;

interface QueryParams {
  where?: Filters;
  select?: SelectFields;
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
    if (include) {
      url.searchParams.append(`select[${field}]`, "true");
    }
  }
}

function mapPostUrls(post: Post): Post {
  const updateImageUrls = (image: CoverImage | null) => {
    if (!image) return image;
    let url = image.url || "";
    let thumbnailURL = image.thumbnailURL || "";
    if (url.startsWith("/")) url = `${baseUrl}${url}`;
    if (thumbnailURL && thumbnailURL.startsWith("/"))
      thumbnailURL = `${baseUrl}${thumbnailURL}`;
    return { ...image, url, thumbnailURL };
  };

  if (post.coverImage) post.coverImage = updateImageUrls(post.coverImage);
  if (post.coverThumbnail)
    post.coverThumbnail = updateImageUrls(post.coverThumbnail);

  if (post.author?.photo?.url?.startsWith("/")) {
    post.author.photo.url = `${baseUrl}${post.author.photo.url}`;
  }

  return post;
}

export async function getPosts({
  where,
  select,
  limit,
  depth,
  page = 1,
}: QueryParams = {}): Promise<PostResponse> {
  const token = await getAuthToken(PAYLOAD_USERNAME, PAYLOAD_PASSWORD);
  const url = new URL(`${baseUrl}/api/posts`);

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
    console.error("Failed to fetch posts:", res.statusText);
    throw new Error("Error fetching posts");
  }

  const data: PostResponse = await res.json();

  return {
    ...data,
    docs: data.docs.map((post) => mapPostUrls(post)),
  };
}
