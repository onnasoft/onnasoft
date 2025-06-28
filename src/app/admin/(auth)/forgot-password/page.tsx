"use client";

import { AuthFooter } from "@/components/auth/AuthFooter";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";
import { ForgotPasswordHero } from "@/components/auth/ForgotPasswordHero";
import { KeyRound } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const handleBackToLogin = () => {
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Column - Hero Panel */}
      <ForgotPasswordHero />

      {/* Right Column - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="inline-flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                  <KeyRound className="w-4 h-4 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">
                  Forgot Password
                </h1>
              </div>
              <p className="text-gray-600">
                Enter your email address and we&#39;ll send you a link to reset your
                password
              </p>
            </div>

            {/* Form Content */}
            <ForgotPasswordForm onBackToLogin={handleBackToLogin} />
          </div>

          {/* Footer */}
          <AuthFooter />
        </div>
      </div>
    </div>
  );
}
