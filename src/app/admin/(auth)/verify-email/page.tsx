"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { VerifyEmailHero } from "@/components/auth/VerifyEmailHero";
import { VerifyEmailForm } from "@/components/auth/VerifyEmailForm";
import { AuthFooter } from "@/components/auth/AuthFooter";
import { useRouter } from "next/navigation";

export default function VerifyEmailPage() {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");

    setToken(tokenFromUrl);
  }, []);

  const handleBackToLogin = () => {
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Column - Hero Panel */}
      <VerifyEmailHero />

      {/* Right Column - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="inline-flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">
                  Email Verification
                </h1>
              </div>
              <p className="text-gray-600 text-sm">
                Verifying your email address
              </p>
            </div>

            {/* Form Content */}
            <VerifyEmailForm
              token={token}
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
