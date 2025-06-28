"use client";

import type React from "react";

import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { FormField } from "./FormField";
import Joi from "joi";
import { register, resendVerificationEmail } from "@/services/auth";

interface SignupFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignupErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  general?: string;
}

const signupSchema = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    "string.min": "Name must be at least 2 characters",
    "string.max": "Name must not exceed 50 characters",
    "string.empty": "Name is required",
    "any.required": "Name is required",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "Please enter a valid email address",
      "string.empty": "Email is required",
      "any.required": "Email is required",
    }),
  password: Joi.string()
    .min(6)
    .pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .required()
    .messages({
      "string.min": "Password must be at least 6 characters",
      "string.pattern.base":
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      "string.empty": "Password is required",
      "any.required": "Password is required",
    }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "any.only": "Passwords do not match",
    "string.empty": "Please confirm your password",
    "any.required": "Please confirm your password",
  }),
});

interface SignupFormProps {
  onToggleMode: () => void;
}

export function SignupForm({ onToggleMode }: SignupFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState<SignupFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<SignupErrors>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const { error } = signupSchema.validate(formData, { abortEarly: false });

    if (error) {
      const newErrors: SignupErrors = {};
      error.details.forEach((detail) => {
        const field = detail.path[0] as keyof SignupErrors;
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
      await register(formData.name, formData.email, formData.password);
      setIsSuccess(true);
      setIsLoading(false);
    } catch (error) {
      setErrors({
        general: error instanceof Error ? error.message : "An error occurred",
      });
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof SignupErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleResendVerification = async () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});

    await resendVerificationEmail(formData.email);
  };

  return isSuccess ? (
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
          We&#39;ve sent a verification link to{" "}
          <span className="font-medium text-gray-900">{formData.email}</span>
        </p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={handleResendVerification}
          className="w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-gray-300 rounded-xl shadow-sm  font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
        >
          <Mail className="w-4 h-4" />
          Resend verification email
        </button>

        <button
          onClick={onToggleMode}
          className="w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-transparent rounded-xl shadow-sm  font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
        >
          <CheckCircle className="w-4 h-4" />
          Continue to sign in
        </button>
      </div>

      {/* Help Text */}
      <div className="text-center">
        <p className="text-xs text-gray-500">
          Didn&#39;t receive the email? Check your spam folder or try a
          different email address.
        </p>
      </div>
    </div>
  ) : (
    <>
      {/* Error General */}
      {errors.general && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
          <p className="text-red-700 ">{errors.general}</p>
        </div>
      )}

      {/* Signup Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <FormField
          label="Full name"
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="John Doe"
          error={errors.name}
          icon={User}
        />

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

        {/* Password Field */}
        <FormField
          label="Password"
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

        {/* Confirm Password Field */}
        <FormField
          label="Confirm password"
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
              Creating account...
            </>
          ) : (
            <>
              <CheckCircle className="w-4 h-4" />
              Create account
            </>
          )}
        </button>
      </form>

      {/* Toggle Sign In */}
      <div className="text-center mt-6">
        <p className=" text-gray-600">
          Already have an account?{" "}
          <button
            onClick={onToggleMode}
            className="font-medium text-primary hover:text-primary/80 transition-colors duration-200"
          >
            Sign in
          </button>
        </p>
      </div>
    </>
  );
}
