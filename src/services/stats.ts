const baseUrl = process.env.NEXT_PUBLIC_API_URL!;

interface StatsResponse {
  totalUsers: number;
  totalPosts: number;
  totalComments: number;
  totalCategories: number;
}

export async function getStats(token: string): Promise<StatsResponse> {
  const url = new URL(`${baseUrl}/stats`);
  const res = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error fetching stats");
  }

  const data: StatsResponse = await res.json();

  return data;
}
