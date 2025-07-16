"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";
import { FormField } from "./FormField";
import { PasswordStrengthMeter } from "./PasswordStrengthMeter";
import Joi from "joi";
import { resetPassword } from "@/services/auth";

interface ResetPasswordFormData {
  password: string;
  confirmPassword: string;
}

interface ResetPasswordErrors {
  password?: string;
  confirmPassword?: string;
  general?: string;
}

const resetPasswordSchema = Joi.object({
  password: Joi.string()
    .min(8)
    .pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/)
    .required()
    .messages({
      "string.min": "Password must be at least 8 characters",
      "string.pattern.base":
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      "string.empty": "Password is required",
      "any.required": "Password is required",
    }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "any.only": "Passwords do not match",
    "string.empty": "Please confirm your password",
    "any.required": "Please confirm your password",
  }),
});

interface ResetPasswordFormProps {
  readonly token?: string;
  readonly onBackToLogin: () => void;
}

export function ResetPasswordForm({
  token,
  onBackToLogin,
}: ResetPasswordFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isValidToken, setIsValidToken] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState<ResetPasswordFormData>({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<ResetPasswordErrors>({});

  // Simulate token validation
  useEffect(() => {
    const validateToken = async () => {
      if (!token) {
        setIsValidToken(false);
        return;
      }

      // Simulate API call to validate token
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // For demo purposes, consider token valid if it's not "invalid"
        setIsValidToken(token !== "invalid");
      } catch {
        setIsValidToken(false);
      }
    };

    validateToken();
  }, [token]);

  const validateForm = (): boolean => {
    const { error } = resetPasswordSchema.validate(formData, {
      abortEarly: false,
    });

    if (error) {
      const newErrors: ResetPasswordErrors = {};
      error.details.forEach((detail) => {
        const field = detail.path[0] as keyof ResetPasswordErrors;
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
      // Simulate API call
      await resetPassword(token || "", formData.password);
      console.log("Password reset:", { token, password: formData.password });
      setIsSuccess(true);
      setIsLoading(false);
    } catch {
      setErrors({
        general: "Error resetting password. Please try again.",
      });
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ResetPasswordErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Invalid token state
  if (!isValidToken) {
    return (
      <div className="text-center space-y-6">
        {/* Error Icon */}
        <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
          <AlertCircle className="w-8 h-8 text-red-600" />
        </div>

        {/* Error Message */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">
            Invalid or expired link
          </h3>
          <p className="text-gray-600 ">
            This password reset link is invalid or has expired. Please request a
            new one.
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={onBackToLogin}
          className="w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-transparent rounded-xl shadow-sm  font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to sign in
        </button>
      </div>
    );
  }

  // Success state
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
            Password reset successful
          </h3>
          <p className="text-gray-600 ">
            Your password has been successfully reset. You can now sign in with
            your new password.
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

  return (
    <>
      {/* Back to Login */}
      <button
        onClick={onBackToLogin}
        className="flex items-center gap-2  text-gray-600 hover:text-gray-900 mb-6 transition-colors duration-200"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to sign in
      </button>

      {/* Error General */}
      {errors.general && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
          <p className="text-red-700 ">{errors.general}</p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Password Field */}
        <div>
          <FormField
            label="New password"
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleInputChange}
            placeholder="••••••••"
            error={errors.password}
            icon={Lock}
            rightElement={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            }
          />

          {/* Password Strength Meter */}
          <PasswordStrengthMeter password={formData.password} />
        </div>

        {/* Confirm Password Field */}
        <FormField
          label="Confirm new password"
          id="confirmPassword"
          name="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder="••••••••"
          error={errors.confirmPassword}
          icon={Lock}
          rightElement={
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              )}
            </button>
          }
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
              Resetting password...
            </>
          ) : (
            <>
              <CheckCircle className="w-4 h-4" />
              Reset password
            </>
          )}
        </button>
      </form>
    </>
  );
}
