"use client";

import { useAuthStore } from "@/hooks/useAuthStore";
import LoginPage from "@/screens/login";
import type React from "react";
import AdminPage from "@/screens/admin";

export default function Admin() {
  const auth = useAuthStore();

  if (!auth.isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <AdminPage />
  );
}
