"use client";

import type React from "react";

import { AlertCircle, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface FormFieldProps {
  readonly label: string;
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly value: string;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly placeholder: string;
  readonly error?: string;
  readonly icon: LucideIcon;
  readonly rightElement?: ReactNode;
  readonly className?: string;
}

export function FormField({
  label,
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  error,
  icon: Icon,
  rightElement,
  className = "",
}: FormFieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block  font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className={`block w-full pl-10 ${rightElement ? "pr-12" : "pr-3"} py-2.5 border rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 ${
            error ? "border-red-300 bg-red-50" : "border-gray-300 bg-white"
          }`}
          placeholder={placeholder}
        />
        {rightElement && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {rightElement}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2  text-red-600 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
}
