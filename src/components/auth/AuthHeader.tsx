import { User } from "lucide-react";

interface AuthHeaderProps {
  readonly isSignUp: boolean;
}

export function AuthHeader({ isSignUp }: AuthHeaderProps) {
  return (
    <div className="text-center mb-6">
      <div className="flex items-center justify-center gap-3 mb-2">
        <div className="inline-flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
          <User className="w-4 h-4 text-white" />
        </div>
        <h1 className="text-xl font-bold text-gray-900">
          {isSignUp ? "Create Account" : "Welcome"}
        </h1>
      </div>
      <p className="text-gray-600 ">
        {isSignUp
          ? "Create your account to get started"
          : "Sign in to your account"}
      </p>
    </div>
  );
}
