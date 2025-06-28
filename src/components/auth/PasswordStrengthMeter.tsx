"use client";

import type React from "react";
import { Shield, AlertTriangle, CheckCircle } from "lucide-react";

interface PasswordStrengthMeterProps {
  readonly password: string;
}

interface PasswordStrength {
  score: number;
  label: string;
  color: string;
  bgColor: string;
  icon: React.ReactNode;
  requirements: {
    length: boolean;
    uppercase: boolean;
    lowercase: boolean;
    number: boolean;
    special: boolean;
  };
}

export function PasswordStrengthMeter({
  password,
}: PasswordStrengthMeterProps) {
  const getPasswordStrength = (password: string): PasswordStrength => {
    const requirements = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[^A-Za-z0-9]/.test(password),
    };

    const score = Object.values(requirements).filter(Boolean).length;

    if (score === 0) {
      return {
        score: 0,
        label: "Enter password",
        color: "text-gray-500",
        bgColor: "bg-gray-200",
        icon: <Shield className="w-4 h-4" />,
        requirements,
      };
    } else if (score <= 2) {
      return {
        score,
        label: "Weak",
        color: "text-red-600",
        bgColor: "bg-red-500",
        icon: <AlertTriangle className="w-4 h-4" />,
        requirements,
      };
    } else if (score <= 4) {
      return {
        score,
        label: "Good",
        color: "text-yellow-600",
        bgColor: "bg-yellow-500",
        icon: <Shield className="w-4 h-4" />,
        requirements,
      };
    } else {
      return {
        score,
        label: "Strong",
        color: "text-green-600",
        bgColor: "bg-green-500",
        icon: <CheckCircle className="w-4 h-4" />,
        requirements,
      };
    }
  };

  const strength = getPasswordStrength(password);

  if (!password) return null;

  return (
    <div className="mt-3 space-y-3">
      {/* Strength Indicator */}
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-gray-700">
              Password strength
            </span>
            <div className={`flex items-center gap-1 ${strength.color}`}>
              {strength.icon}
              <span className="text-xs font-medium">{strength.label}</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${strength.bgColor}`}
              style={{ width: `${(strength.score / 5) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Requirements Checklist */}
      <div className="bg-gray-50 rounded-lg p-3">
        <p className="text-xs font-medium text-gray-700 mb-2">
          Password requirements:
        </p>
        <div className="grid grid-cols-1 gap-1">
          <div
            className={`flex items-center gap-2 text-xs ${strength.requirements.length ? "text-green-600" : "text-gray-500"}`}
          >
            <div
              className={`w-3 h-3 rounded-full flex items-center justify-center ${strength.requirements.length ? "bg-green-100" : "bg-gray-200"}`}
            >
              {strength.requirements.length && (
                <CheckCircle className="w-2 h-2" />
              )}
            </div>
            At least 8 characters
          </div>
          <div
            className={`flex items-center gap-2 text-xs ${strength.requirements.uppercase ? "text-green-600" : "text-gray-500"}`}
          >
            <div
              className={`w-3 h-3 rounded-full flex items-center justify-center ${strength.requirements.uppercase ? "bg-green-100" : "bg-gray-200"}`}
            >
              {strength.requirements.uppercase && (
                <CheckCircle className="w-2 h-2" />
              )}
            </div>
            One uppercase letter
          </div>
          <div
            className={`flex items-center gap-2 text-xs ${strength.requirements.lowercase ? "text-green-600" : "text-gray-500"}`}
          >
            <div
              className={`w-3 h-3 rounded-full flex items-center justify-center ${strength.requirements.lowercase ? "bg-green-100" : "bg-gray-200"}`}
            >
              {strength.requirements.lowercase && (
                <CheckCircle className="w-2 h-2" />
              )}
            </div>
            One lowercase letter
          </div>
          <div
            className={`flex items-center gap-2 text-xs ${strength.requirements.number ? "text-green-600" : "text-gray-500"}`}
          >
            <div
              className={`w-3 h-3 rounded-full flex items-center justify-center ${strength.requirements.number ? "bg-green-100" : "bg-gray-200"}`}
            >
              {strength.requirements.number && (
                <CheckCircle className="w-2 h-2" />
              )}
            </div>
            One number
          </div>
          <div
            className={`flex items-center gap-2 text-xs ${strength.requirements.special ? "text-green-600" : "text-gray-500"}`}
          >
            <div
              className={`w-3 h-3 rounded-full flex items-center justify-center ${strength.requirements.special ? "bg-green-100" : "bg-gray-200"}`}
            >
              {strength.requirements.special && (
                <CheckCircle className="w-2 h-2" />
              )}
            </div>
            One special character
          </div>
        </div>
      </div>
    </div>
  );
}
