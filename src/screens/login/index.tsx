"use client";

import { AuthFooter } from "@/components/auth/AuthFooter";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { HeroPanel } from "@/components/auth/HeroPanel";
import { LoginForm } from "@/components/auth/LoginForm";
import { SignupForm } from "@/components/auth/SignupForm";
import { useState } from "react";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Column - Hero Panel */}
      <HeroPanel isSignUp={isSignUp} />

      {/* Right Column - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5">
            {/* Header */}
            <AuthHeader isSignUp={isSignUp} />

            {/* Form Content */}
            {isSignUp ? (
              <SignupForm onToggleMode={toggleMode} />
            ) : (
              <LoginForm onToggleMode={toggleMode} />
            )}
          </div>

          {/* Footer */}
          <AuthFooter />
        </div>
      </div>
    </div>
  );
}
