import { GoogleOAuthProvider as GGoogleOAuthProvider } from "@react-oauth/google";

const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";

interface GoogleOAuthProviderProps {
  readonly children: React.ReactNode;
}

export default function GoogleOAuthProvider({
  children,
}: GoogleOAuthProviderProps) {
  return (
    <GGoogleOAuthProvider clientId={googleClientId}>
      {children}
    </GGoogleOAuthProvider>
  );
}
