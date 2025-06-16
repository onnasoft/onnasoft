import { PostTranslation } from "@/types/models";
import { getAuthToken } from "./auth";

const baseUrl = process.env.NEXT_PUBLIC_API_URL!;
const PAYLOAD_USERNAME = process.env.PAYLOAD_USERNAME!;
const PAYLOAD_PASSWORD = process.env.PAYLOAD_PASSWORD!;

export interface PostTranslationResponse {
  docs: PostTranslation[];
}

type FilterKeys =
  | keyof Omit<PostTranslation, "post">
  | "post"
  | "limit"
  | "depth";
type FilterOperator = "equals" | "not_equals" | "like" | "in" | "not_in"; // puedes agregar más
type FilterValue = string | number;

type Filters = Partial<
  Record<FilterKeys, FilterValue | { value: FilterValue; op: FilterOperator }>
>;

export async function getPostTranslations(
  filters: Filters
): Promise<PostTranslation[]> {
  const token = await getAuthToken(PAYLOAD_USERNAME, PAYLOAD_PASSWORD);
  const url = new URL(`${baseUrl}/api/post-translations`);

  const excludedKeys = ["limit", "depth"];

  for (const [key, rawValue] of Object.entries(filters)) {
    if (rawValue == null || rawValue === "" || excludedKeys.includes(key))
      continue;

    const { value, op } =
      typeof rawValue === "object" && "value" in rawValue
        ? rawValue
        : { value: rawValue, op: "equals" };

    url.searchParams.append(`where[${key}][${op}]`, String(value));
  }

  if (filters.limit && typeof filters.limit === "number") {
    url.searchParams.append("limit", filters.limit.toString());
  }

  if (filters.depth && typeof filters.depth === "number") {
    url.searchParams.append("depth", filters.depth.toString());
  }

  console.log("Fetching post translations from:", decodeURIComponent(url.toString()));

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

  return data.docs.map((doc) => {
    const coverImage = doc.post.coverImage;
    if (coverImage) {
      let url = coverImage.url || "";
      let thumbnailURL = coverImage.thumbnailURL || "";
      if (url.startsWith("/")) url = `${baseUrl}${url}`;
      if (thumbnailURL.startsWith("/"))
        thumbnailURL = `${baseUrl}${thumbnailURL}`;
      doc.post.coverImage = { ...coverImage, url, thumbnailURL };
    }

    const coverThumbnail = doc.post.coverThumbnail;
    if (coverThumbnail) {
      let url = coverThumbnail.url || "";
      let thumbnailURL = coverThumbnail.thumbnailURL || "";
      if (url.startsWith("/")) url = `${baseUrl}${url}`;
      if (thumbnailURL.startsWith("/"))
        thumbnailURL = `${baseUrl}${thumbnailURL}`;
      doc.post.coverThumbnail = { ...coverThumbnail, url, thumbnailURL };
    }

    if (doc.post.author) {
      const authorPhoto = doc.post.author.photo;
      if (authorPhoto) {
        let url = authorPhoto.url || "";
        if (url.startsWith("/")) url = `${baseUrl}${url}`;
        doc.post.author.photo = {
          ...authorPhoto,
          url,
          thumbnailURL: authorPhoto.thumbnailURL || null,
        };
      }
    }

    return doc;
  });
}
