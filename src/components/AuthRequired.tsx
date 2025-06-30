"use client";

import { useAuthStore } from "@/hooks/useAuthStore";
import LoginPage from "@/screens/login";

interface AuthRequiredProps {
  readonly children: React.ReactNode;
}

export default function AuthRequired({ children }: AuthRequiredProps) {
  const auth = useAuthStore();

  if (!auth.isAuthenticated) {
    return <LoginPage />;
  }

  return <>{children}</>;
}
