"use server";

import { Geist, Geist_Mono } from "next/font/google";
import Session from "@/components/Session";
import GoogleOAuthProvider from "@/components/GoogleOAuthProvider";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "katex/dist/katex.min.css";
import "highlight.js/styles/github-dark.css";
import "../globals.css";
import AuthRequired from "@/components/AuthRequired";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  readonly params: Promise<{
    lang: string;
  }>;
}>) {
  const lang = (await params).lang || "en";
  const language = lang.toLowerCase();

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
