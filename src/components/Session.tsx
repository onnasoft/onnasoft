"use client";

import { useAuthStore } from "@/hooks/useAuthStore";
import { useEffect, useRef } from "react";
import jwt from "jsonwebtoken";
import { refreshAuthToken } from "@/services/auth";

export default function Session() {
  const auth = useAuthStore();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function decode(token: string) {
      const decoded = jwt.decode(token);
      return typeof decoded === "object" && decoded ? decoded : null;
    }

    async function checkAndRefreshToken() {
      const token = auth.token;
      const refreshToken = auth.refreshToken;
      if (!token || !refreshToken) return;

      const decodedToken = decode(token);
      const decodedRefreshToken = decode(refreshToken);
      if (!decodedToken || !decodedRefreshToken) return;

      const now = Math.floor(Date.now() / 1000);

      if (decodedRefreshToken.exp && decodedRefreshToken.exp < now) {
        auth.reset();
        return;
      }

      const expiresIn = (decodedToken.exp ?? 0) - now;
      if (expiresIn > 60) return;

      try {
        const res = await refreshAuthToken(refreshToken);
        if (!res?.access_token || !res?.refresh_token) {
          auth.reset();
          return;
        }
        auth.setToken(res.access_token);
        auth.setRefreshToken(res.refresh_token);
        auth.setSession(res.user);
      } catch {
        auth.reset();
      }
    }

    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(checkAndRefreshToken, 30_000);
    checkAndRefreshToken();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [auth, auth.token, auth.refreshToken]);

  return null;
}
