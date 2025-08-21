"use server";

import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { headers } from "next/headers";
import Session from "@/components/Session";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "katex/dist/katex.min.css";
import "highlight.js/styles/github-dark.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GOOGLE_TAG_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;

type RootLayoutProps = {
  readonly children: React.ReactNode;
};

export default async function RootLayout(props: RootLayoutProps) {
  const h = await headers();
  const lang = h.get("x-lang") || "en";

  return (
    <html lang={lang}>
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
        ) : null}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {props.children}
        <Session />
      </body>
    </html>
  );
}
