import Login from "@/components/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";

const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";

interface LoginPageProps {
  readonly language: string;
}

export function LoginPage({ language }: LoginPageProps) {
  if (!googleClientId) {
    throw new Error("Google Client ID is not set in environment variables.");
  }

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <Login language={language} />
    </GoogleOAuthProvider>
  );
}
