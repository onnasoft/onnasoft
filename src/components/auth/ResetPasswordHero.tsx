import { Shield, Lock, CheckCircle } from "lucide-react";

export function ResetPasswordHero() {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-primary opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center px-12 text-white">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold mb-6">Create new password</h2>
          <p className="text-xl mb-8 text-primary-foreground/80">
            Choose a strong password to keep your account secure. Make sure
            it&#39;s something you&#39;ll remember but others can&#39;t guess.
          </p>

          {/* Features */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <span>Strong encryption</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Lock className="w-4 h-4" />
              </div>
              <span>Secure password requirements</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-4 h-4" />
              </div>
              <span>Instant account access</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Image */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <pattern
              id="reset-grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#reset-grid)" />
        </svg>
      </div>
    </div>
  );
}
