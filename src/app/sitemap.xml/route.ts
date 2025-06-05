import { NextResponse } from "next/server";

export async function GET() {
  const WEBSITE_URL = process.env.WEBSITE_URL || "https://onnasoft.us";
  const urls = [
    { loc: WEBSITE_URL, lastmod: "2025-06-05" },
    { loc: `${WEBSITE_URL}/es`, lastmod: "2025-06-05" },
    { loc: `${WEBSITE_URL}/ja`, lastmod: "2025-06-05" },
    { loc: `${WEBSITE_URL}/fr`, lastmod: "2025-06-05" },
    { loc: `${WEBSITE_URL}/zh`, lastmod: "2025-06-05" },
    { loc: `${WEBSITE_URL}/sitemap.xml`, lastmod: "2025-06-05" },
    { loc: `${WEBSITE_URL}/robots.txt`, lastmod: "2025-06-05" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        ({ loc, lastmod }) => `
      <url>
        <loc>${loc}</loc>
        <lastmod>${lastmod}</lastmod>
      </url>`
      )
      .join("")}
    </urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
