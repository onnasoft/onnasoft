"use client";

import { useState, useEffect } from "react";
import { CheckCircle, AlertCircle, ArrowLeft, Clock } from "lucide-react";
import { verifyEmail } from "@/services/auth";

interface VerifyEmailFormProps {
  readonly token: string | null;
  readonly onBackToLogin: () => void;
}

type VerificationState =
  | "loading"
  | "success"
  | "error"
  | "expired"
  | "already-verified";

export function VerifyEmailForm({
  token,
  onBackToLogin,
}: VerifyEmailFormProps) {
  const [verificationState, setVerificationState] =
    useState<VerificationState>("loading");

  useEffect(() => {
    const verify = async () => {
      if (token === null) return;
      if (token === "") {
        setVerificationState("error");
        return;
      }

      try {
        // Simulate API call to verify email
        await verifyEmail(token);

        // Simulate different scenarios based on token
        if (token === "expired") {
          setVerificationState("expired");
        } else if (token === "invalid") {
          setVerificationState("error");
        } else if (token === "already-verified") {
          setVerificationState("already-verified");
        } else {
          setVerificationState("success");
        }
      } catch {
        setVerificationState("error");
      }
    };

    verify();
  }, [token]);

  // Loading state
  if (verificationState === "loading") {
    return (
      <div className="text-center space-y-6">
        {/* Loading Icon */}
        <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"></div>
        </div>

        {/* Loading Message */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">
            Verifying your email
          </h3>
          <p className="text-gray-600 ">
            Please wait while we verify your email address...
          </p>
        </div>
      </div>
    );
  }

  // Success state
  if (verificationState === "success") {
    return (
      <div className="text-center space-y-6">
        {/* Success Icon */}
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>

        {/* Success Message */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">
            Email verified successfully!
          </h3>
          <p className="text-gray-600 ">
            Your email address has been verified. You can now sign in to your
            account.
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={onBackToLogin}
          className="w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-transparent rounded-xl shadow-sm  font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Continue to sign in
        </button>
      </div>
    );
  }

  // Already verified state
  if (verificationState === "already-verified") {
    return (
      <div className="text-center space-y-6">
        {/* Info Icon */}
        <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-blue-600" />
        </div>

        {/* Info Message */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">
            Email already verified
          </h3>
          <p className="text-gray-600 ">
            This email address has already been verified. You can sign in to
            your account.
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={onBackToLogin}
          className="w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-transparent rounded-xl shadow-sm  font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Continue to sign in
        </button>
      </div>
    );
  }

  // Expired state
  if (verificationState === "expired") {
    return (
      <div className="text-center space-y-6">
        {/* Warning Icon */}
        <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
          <Clock className="w-8 h-8 text-yellow-600" />
        </div>

        {/* Expired Message */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">
            Verification link expired
          </h3>
          <p className="text-gray-600 ">
            This verification link has expired. We can send you a new
            verification email.
          </p>
        </div>

        {/* Info Box */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <Clock className="w-3 h-3 text-yellow-600" />
            </div>
            <div className="text-left">
              <p className=" text-yellow-800 font-medium mb-1">
                Verification links expire after 24 hours
              </p>
              <p className=" text-yellow-700">
                This is for security reasons. Request a new link to continue
                with verification.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={onBackToLogin}
            className="w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-gray-300 rounded-xl shadow-sm  font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to sign in
          </button>
        </div>
      </div>
    );
  }

  // Error state
  return (
    <div className="text-center space-y-6">
      {/* Error Icon */}
      <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
        <AlertCircle className="w-8 h-8 text-red-600" />
      </div>

      {/* Error Message */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">
          Verification failed
        </h3>
        <p className="text-gray-600 ">
          We couldn&#39;t verify your email address. The link may be invalid or
          corrupted.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={onBackToLogin}
          className="w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-gray-300 rounded-xl shadow-sm  font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to sign in
        </button>
      </div>
    </div>
  );
}
