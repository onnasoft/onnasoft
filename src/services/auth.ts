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

export async function forgotPassword(email: string): Promise<void> {
  const res = await fetch(`${baseUrl}/auth/forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    throw new Error("Failed to send reset password email");
  }
}

export async function resetPassword(
  token: string,
  password: string
): Promise<void> {
  const res = await fetch(`${baseUrl}/auth/reset-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, newPassword: password }),
  });

  if (!res.ok) {
    throw new Error("Failed to reset password");
  }
}

export async function login(
  email: string,
  password: string
): Promise<AuthResponse> {
  const res = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: email, password }),
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }

  const data: AuthResponse = await res.json();

  return data;
}

export async function register(
  name: string,
  email: string,
  password: string
): Promise<AuthResponse> {
  const res = await fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    if (errorData.message) {
      throw new Error(errorData.message);
    }
    throw new Error("Registration failed");
  }

  const data: AuthResponse = await res.json();

  return data;
}

export async function verifyEmail(token: string): Promise<void> {
  const res = await fetch(`${baseUrl}/auth/verify-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });

  if (!res.ok) {
    throw new Error("Email verification failed");
  }
}

export async function resendVerificationEmail(email: string): Promise<void> {
  const res = await fetch(`${baseUrl}/auth/resend-verification`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    throw new Error("Failed to resend verification email");
  }
}
