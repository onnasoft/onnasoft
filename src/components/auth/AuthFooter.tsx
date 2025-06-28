import Link from "next/link";

export function AuthFooter() {
  return (
    <div className="mt-4 text-center">
      <p className="text-xs text-gray-500">
        By continuing, you agree to our{" "}
        <Link
          href="/en/company/privacy-policy-we-protect-your-data-responsibly-and-transparently"
          className="text-primary hover:text-primary/80"
        >
          terms of service
        </Link>{" "}
        and{" "}
        <Link
          href="/en/company/terms-of-service-clear-conditions-for-a-trusted-relationship"
          className="text-primary hover:text-primary/80"
        >
          privacy policy
        </Link>
      </p>
    </div>
  );
}
