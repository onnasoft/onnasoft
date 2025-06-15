import { Post } from "@/types/models";
import { getAuthToken } from "./auth";

const baseUrl = process.env.NEXT_PUBLIC_API_URL!;
const PAYLOAD_USERNAME = process.env.PAYLOAD_USERNAME!;
const PAYLOAD_PASSWORD = process.env.PAYLOAD_PASSWORD!;

export interface PostResponse {
  docs: Post[];
}

type FilterKeys = keyof Post;
type Filters = Partial<Record<FilterKeys, string | number>>;

export async function getPosts(filters: Filters = {}): Promise<Post[]> {
  const token = await getAuthToken(PAYLOAD_USERNAME, PAYLOAD_PASSWORD);
  const url = new URL(`${baseUrl}/api/posts`);

  for (const [key, value] of Object.entries(filters)) {
    if (value != null) {
      url.searchParams.append(`where[${key}][equals]`, String(value));
    }
  }

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
  return data.docs;
}
