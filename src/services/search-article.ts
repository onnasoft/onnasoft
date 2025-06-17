import { CoverImage, PostTranslation } from "@/types/models";
import { getAuthToken } from "./auth";

const baseUrl = process.env.NEXT_PUBLIC_API_URL!;
const PAYLOAD_USERNAME = process.env.PAYLOAD_USERNAME!;
const PAYLOAD_PASSWORD = process.env.PAYLOAD_PASSWORD!;

export interface SearchResponse {
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

interface QueryParams {
  limit?: number;
  page?: number;
  search?: string;
}

function mapPostUrls(article: PostTranslation): PostTranslation {
  const updateImageUrls = (image: CoverImage | null) => {
    if (!image) return image;
    let url = image.url || "";
    let thumbnailURL = image.thumbnailURL || "";
    if (url.startsWith("/")) url = `${baseUrl}${url}`;
    if (thumbnailURL && thumbnailURL.startsWith("/"))
      thumbnailURL = `${baseUrl}${thumbnailURL}`;
    return { ...image, url, thumbnailURL };
  };

  if (article.post.coverImage) {
    article.post.coverImage = updateImageUrls(article.post.coverImage);
  }
  if (article.post.coverThumbnail) {
    article.post.coverThumbnail = updateImageUrls(article.post.coverThumbnail);
  }
  if (article.post.author?.photo) {
    article.post.author.photo = updateImageUrls(article.post.author.photo);
  }

  return article;
}

export async function search({
  limit,
  page = 1,
  search,
}: QueryParams = {}): Promise<SearchResponse> {
  const token = await getAuthToken(PAYLOAD_USERNAME, PAYLOAD_PASSWORD);
  const url = new URL(`${baseUrl}/api/search`);

  if (search) url.searchParams.append("q", search);
  if (limit) url.searchParams.append("limit", limit.toString());
  url.searchParams.append("page", page.toString());

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

  const data: SearchResponse = await res.json();

  return {
    ...data,
    docs: data.docs.map(mapPostUrls),
  };
}
