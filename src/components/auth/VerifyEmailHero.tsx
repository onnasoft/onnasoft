import { Shield, Mail, CheckCircle } from "lucide-react"

export function VerifyEmailHero() {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-primary opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center px-12 text-white">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold mb-6">Verify your email</h2>
          <p className="text-xl mb-8 text-primary-foreground/80">
            We&#39;re verifying your email address to ensure the security of your account and enable all platform features.
          </p>

          {/* Features */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <span>Account security</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <span>Email notifications</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-4 h-4" />
              </div>
              <span>Full platform access</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Image */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <pattern id="verify-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#verify-grid)" />
        </svg>
      </div>
    </div>
  )
}
