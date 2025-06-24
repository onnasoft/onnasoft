"use server";

import { Geist, Geist_Mono } from "next/font/google";
import { suportedLanguages } from "@/types/languages";
import { redirect } from "next/navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "katex/dist/katex.min.css";
import "highlight.js/styles/github-dark.css";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GOOGLE_TAG_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;

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
        {GOOGLE_TAG_ID ? (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`}
            ></Script>
            <Script
              id="google-analytics-inline"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GOOGLE_TAG_ID}');
                `,
              }}
            ></Script>
          </>
        ): null}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
