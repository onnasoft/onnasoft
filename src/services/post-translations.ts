import { PostTranslation } from "@/types/models";
import { getAuthToken } from "./auth";

const baseUrl = process.env.NEXT_PUBLIC_API_URL!;
const PAYLOAD_USERNAME = process.env.PAYLOAD_USERNAME!;
const PAYLOAD_PASSWORD = process.env.PAYLOAD_PASSWORD!;

export interface PostTranslationResponse {
  docs: PostTranslation[];
}

type FilterKeys = keyof Omit<PostTranslation, "post"> | "post";
type Filters = Partial<Record<FilterKeys, string>>;

export async function getPostTranslations(
  filters: Filters
): Promise<PostTranslation[]> {
  const token = await getAuthToken(PAYLOAD_USERNAME, PAYLOAD_PASSWORD);
  const url = new URL(`${baseUrl}/api/post-translations`);

  for (const [key, value] of Object.entries(filters)) {
    if (value != null) {
      url.searchParams.append(`where[${key}][equals]`, value);
    }
  }
  url.searchParams.append("depth", "3");

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
      if (url && url.startsWith("/")) {
        url = `${baseUrl}${url}`;
      }
      if (thumbnailURL && thumbnailURL.startsWith("/")) {
        thumbnailURL = `${baseUrl}${thumbnailURL}`;
      }

      doc.post.coverImage = {
        ...coverImage,
        url: url,
        thumbnailURL: thumbnailURL,
      };
    }
    if (doc.post.author) {
      const authorPhoto = doc.post.author.photo;
      if (authorPhoto) {
        let url = authorPhoto.url || "";
        if (url && url.startsWith("/")) {
          url = `${baseUrl}${url}`;
        }
        doc.post.author.photo = {
          ...authorPhoto,
          url: url,
          thumbnailURL: authorPhoto.thumbnailURL || null,
        };
      }
    }
    return doc;
  });
}
