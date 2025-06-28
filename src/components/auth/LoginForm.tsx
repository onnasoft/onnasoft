"use client";

import type React from "react";

import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { FormField } from "./FormField";
import Joi from "joi";
import Link from "next/link";
import { getAuthToken, login } from "@/services/auth";
import { useAuthStore } from "@/hooks/useAuthStore";

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginErrors {
  email?: string;
  password?: string;
  general?: string;
}

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "Please enter a valid email address",
      "string.empty": "Email is required",
      "any.required": "Email is required",
    }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters",
    "string.empty": "Password is required",
    "any.required": "Password is required",
  }),
});

interface LoginFormProps {
  readonly onToggleMode: () => void;
}

export function LoginForm({ onToggleMode }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<LoginErrors>({});
  const auth = useAuthStore();

  // Google OAuth
  const googleLogin = useGoogleLogin({
    onSuccess: ({ access_token }) => {
      getAuthToken(access_token)
        .then((token) => {
          auth.setSession(token.user);
          auth.setToken(token.access_token);
          auth.setRefreshToken(token.refresh_token);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Login Error:", error);
          setIsLoading(false);
        });
    },
    onError: () => {
      console.log("Google login failed");
      setErrors({ general: "Error signing in with Google" });
      setIsLoading(false);
    },
  });

  const handleGoogleLogin = () => {
    setIsLoading(true);
    setErrors({});
    googleLogin();
  };

  const validateForm = (): boolean => {
    const { error } = loginSchema.validate(formData, { abortEarly: false });

    if (error) {
      const newErrors: LoginErrors = {};
      error.details.forEach((detail) => {
        const field = detail.path[0] as keyof LoginErrors;
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
      const response = await login(formData.email, formData.password);
      auth.setSession(response.user);
      auth.setToken(response.access_token);
      auth.setRefreshToken(response.refresh_token);
      console.log("Login attempt:", formData);
      setIsLoading(false);
    } catch {
      setErrors({
        general: "Error signing in. Please check your credentials.",
      });
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof LoginErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      {/* Error General */}
      {errors.general && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
          <p className="text-red-700 ">{errors.general}</p>
        </div>
      )}

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
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

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block  text-gray-700">
              Remember me
            </label>
          </div>
          <Link
            href="/admin/forgot-password"
            className=" text-primary hover:text-primary/80"
          >
            Forgot your password?
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-transparent rounded-xl shadow-sm  font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              Signing in...
            </>
          ) : (
            <>
              <CheckCircle className="w-4 h-4" />
              Sign in
            </>
          )}
        </button>
      </form>

      {/* Google Login */}
      <>
        {/* Divider */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center ">
            <span className="px-4 bg-white text-gray-500">
              or continue with Google
            </span>
          </div>
        </div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-3 px-6 py-2.5 border border-gray-300 rounded-xl bg-white text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed mb-4"
        >
          {isLoading ? (
            <div className="w-5 h-5 animate-spin rounded-full border-2 border-gray-300 border-t-primary"></div>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          )}
          Continue with Google
        </button>
      </>

      {/* Toggle Sign Up */}
      <div className="text-center mt-6">
        <p className=" text-gray-600">
          Don&#39;t have an account?{" "}
          <button
            onClick={onToggleMode}
            className="font-medium text-primary hover:text-primary/80 transition-colors duration-200"
          >
            Sign up
          </button>
        </p>
      </div>
    </>
  );
}
