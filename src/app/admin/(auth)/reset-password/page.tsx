"use client";
import { useEffect, useState } from "react";
import { RotateCcw } from "lucide-react";
import { ResetPasswordHero } from "@/components/auth/ResetPasswordHero";
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";
import { AuthFooter } from "@/components/auth/AuthFooter";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // In a real app, you would get the token from URL params
    // For demo purposes, we'll simulate different scenarios
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token") || "valid-token-123";
    setToken(tokenFromUrl);
  }, []);

  const handleBackToLogin = () => {
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Column - Hero Panel */}
      <ResetPasswordHero />

      {/* Right Column - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="inline-flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                  <RotateCcw className="w-4 h-4 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">
                  Reset Password
                </h1>
              </div>
              <p className="text-gray-600 text-sm">
                Enter your new password below
              </p>
            </div>

            {/* Form Content */}
            <ResetPasswordForm
              token={token || undefined}
              onBackToLogin={handleBackToLogin}
            />
          </div>

          {/* Footer */}
          <AuthFooter />
        </div>
      </div>
    </div>
  );
}
