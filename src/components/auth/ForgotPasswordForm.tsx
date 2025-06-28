"use client";

import type React from "react";
import { useState } from "react";
import { Mail, ArrowLeft, CheckCircle, AlertCircle, Send } from "lucide-react";
import { FormField } from "./FormField";
import Joi from "joi";
import { forgotPassword } from "@/services/auth";

interface ForgotPasswordFormData {
  email: string;
}

interface ForgotPasswordErrors {
  email?: string;
  general?: string;
}

const forgotPasswordSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "Please enter a valid email address",
      "string.empty": "Email is required",
      "any.required": "Email is required",
    }),
});

interface ForgotPasswordFormProps {
  readonly onBackToLogin: () => void;
}

export function ForgotPasswordForm({ onBackToLogin }: ForgotPasswordFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<ForgotPasswordFormData>({
    email: "",
  });
  const [errors, setErrors] = useState<ForgotPasswordErrors>({});

  const validateForm = (): boolean => {
    const { error } = forgotPasswordSchema.validate(formData, {
      abortEarly: false,
    });

    if (error) {
      const newErrors: ForgotPasswordErrors = {};
      error.details.forEach((detail) => {
        const field = detail.path[0] as keyof ForgotPasswordErrors;
        newErrors[field] = detail.message;
      });
      setErrors(newErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    try {
      await forgotPassword(formData.email);
      console.log("Password reset request:", formData);
      setIsSuccess(true);
      setIsLoading(false);
    } catch {
      setErrors({
        general: "Error sending reset email. Please try again.",
      });
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ForgotPasswordErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleTryAgain = () => {
    setIsSuccess(false);
    setFormData({ email: "" });
    setErrors({});
  };

  if (isSuccess) {
    return (
      <div className="text-center space-y-6">
        {/* Success Icon */}
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>

        {/* Success Message */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">
            Check your email
          </h3>
          <p className="text-gray-600 ">
            We&#39;ve sent a password reset link to{" "}
            <span className="font-medium text-gray-900">{formData.email}</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleTryAgain}
            className="w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-gray-300 rounded-xl shadow-sm  font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
          >
            <Send className="w-4 h-4" />
            Send another email
          </button>

          <button
            onClick={onBackToLogin}
            className="w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-transparent rounded-xl shadow-sm  font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to sign in
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Error General */}
      {errors.general && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
          <p className="text-red-700 ">{errors.general}</p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <FormField
          label="Email address"
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="you@email.com"
          error={errors.email}
          icon={Mail}
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-transparent rounded-xl shadow-sm  font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              Sending reset link...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send reset link
            </>
          )}
        </button>
      </form>

      {/* Help Text */}
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          Remember your password?{" "}
          <button
            onClick={onBackToLogin}
            className="font-medium text-primary hover:text-primary/80 transition-colors duration-200"
          >
            Sign in instead
          </button>
        </p>
      </div>
    </>
  );
}
