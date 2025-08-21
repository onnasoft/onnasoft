
import { Geist, Geist_Mono } from "next/font/google";
import Session from "@/components/Session";
import GoogleOAuthProvider from "@/components/GoogleOAuthProvider";
import AuthRequired from "@/components/AuthRequired";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "katex/dist/katex.min.css";
import "highlight.js/styles/github-dark.css";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  const language = "en";

  return (
    <html lang={language}>
      <head>
        <title>Onnasoft | Smart Digital Solutions</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GoogleOAuthProvider>
          <AuthRequired>{children}</AuthRequired>
        </GoogleOAuthProvider>
        <Session />
      </body>
    </html>
  );
}
