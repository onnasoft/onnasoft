import { AuthUser } from "@/types/models";

const baseUrl = process.env.NEXT_PUBLIC_API_URL!;

export interface AuthResponse {
  message: string;
  exp: number;
  token: string;
  user: AuthUser;
}

const tokenCache: Record<string, { token: string; exp: number }> = {};

export async function getAuthToken(
  email: string,
  password: string
): Promise<string> {
  const cached = tokenCache[email];
  const now = Math.floor(Date.now() / 1000);

  if (cached && cached.exp > now) {
    return cached.token;
  }

  if (email && password) {
    return "token"
  }

  const res = await fetch(`${baseUrl}/api/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }

  const data: AuthResponse = await res.json();

  tokenCache[email] = {
    token: data.token,
    exp: data.exp,
  };

  return data.token;
}
