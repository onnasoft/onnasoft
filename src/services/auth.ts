import { User } from "@/types/models";

const baseUrl = process.env.NEXT_PUBLIC_API_URL!;

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  user: User;
}

export async function getAuthToken(token: string): Promise<AuthResponse> {
  const res = await fetch(`${baseUrl}/auth/oauth/login/google`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ token }),
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }

  const data: AuthResponse = await res.json();

  return data;
}

export async function refreshAuthToken(
  refreshToken: string
): Promise<AuthResponse> {
  const res = await fetch(`${baseUrl}/auth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ refresh_token: refreshToken }),
  });

  if (!res.ok) {
    throw new Error("Refresh token failed");
  }

  const data: AuthResponse = await res.json();

  return data;
}
