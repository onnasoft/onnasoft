// app/robots.txt/route.ts
import { NextResponse } from "next/server";

export function GET() {
  const WEBSITE_URL = process.env.WEBSITE_URL || "https://onnasoft.us";
  const content = `
    User-agent: *
    Allow: /

    Sitemap: ${WEBSITE_URL}/sitemap.xml
      `.trim();

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
