import { CoverImage, PostTranslation } from "@/types/models";
import { getAuthToken } from "./auth";

const baseUrl = process.env.NEXT_PUBLIC_API_URL!;
const PAYLOAD_USERNAME = process.env.PAYLOAD_USERNAME!;
const PAYLOAD_PASSWORD = process.env.PAYLOAD_PASSWORD!;

export interface PostTranslationResponse {
  docs: PostTranslation[];
}

type FilterKeys = keyof Omit<PostTranslation, "post"> | "post";
type FilterOperator = "equals" | "not_equals" | "like" | "in" | "not_in"; // puedes agregar más
type FilterValue = string | number;

type Filters = Partial<
  Record<FilterKeys, FilterValue | { value: FilterValue; op: FilterOperator }>
>;

type SelectFields = Partial<Record<keyof PostTranslation, boolean>> & {
  post?: Partial<Record<keyof PostTranslation["post"], boolean>>;
};

interface QueryParams {
  select?: SelectFields;
  where?: Filters;
  limit?: number;
  depth?: number;
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
  depth?: number
) {
  appendWhereParams(url, where);
  if (limit) url.searchParams.append("limit", limit.toString());
  if (depth) url.searchParams.append("depth", depth.toString());
  appendSelectParams(url, select);
}

function mapDocUrls(doc: PostTranslation, baseUrl: string): PostTranslation {
  const post = doc.post;

  const updateImageUrls = (image: CoverImage | null) => {
    if (!image) return image;
    let url = image.url || "";
    let thumbnailURL = image.thumbnailURL || "";
    if (url.startsWith("/")) url = `${baseUrl}${url}`;
    if (thumbnailURL && thumbnailURL.startsWith("/"))
      thumbnailURL = `${baseUrl}${thumbnailURL}`;
    return { ...image, url, thumbnailURL };
  };

  if (post.coverImage) {
    post.coverImage = updateImageUrls(post.coverImage);
  }

  if (post.coverThumbnail) {
    post.coverThumbnail = updateImageUrls(post.coverThumbnail);
  }

  if (post.author && post.author.photo) {
    let url = post.author.photo.url || "";
    if (url.startsWith("/")) url = `${baseUrl}${url}`;
    post.author.photo = {
      ...post.author.photo,
      url,
      thumbnailURL: post.author.photo.thumbnailURL || null,
    };
  }

  return doc;
}

export async function getPostTranslations({
  select,
  where,
  depth,
  limit,
}: QueryParams): Promise<PostTranslation[]> {
  const token = await getAuthToken(PAYLOAD_USERNAME, PAYLOAD_PASSWORD);
  const url = new URL(`${baseUrl}/api/post-translations`);

  buildQueryParams(url, where, select, limit, depth);

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

  return data.docs.map((doc) => mapDocUrls(doc, baseUrl));
}
