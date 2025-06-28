"use client";

import { useAuthStore } from "@/hooks/useAuthStore";
import LoginPage from "@/screens/login";
import type React from "react";

export default function Admin() {
  const auth = useAuthStore();

  if (!auth.isAuthenticated) {
    return <LoginPage />;
  }

  if (auth.isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">You are already logged in.</h1>
      </div>
    );
  }
}
