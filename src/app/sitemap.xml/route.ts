import { getPosts } from "@/services/posts";
import { suportedLanguages } from "@/types/languages";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await getPosts({
    limit: 1000 ** 2,
  });
  const WEBSITE_URL = process.env.WEBSITE_URL || "https://onnasoft.us";
  const urls = [
    { loc: WEBSITE_URL, lastmod: "2025-06-05" },
    { loc: `${WEBSITE_URL}/sitemap.xml`, lastmod: "2025-06-05" },
    { loc: `${WEBSITE_URL}/robots.txt`, lastmod: "2025-06-05" },
  ];

  urls.push(
    ...suportedLanguages.map((lang) => ({
      loc: `${WEBSITE_URL}/${lang}`,
      lastmod: "2025-06-05",
    }))
  );

  urls.push(
    ...posts.docs.flatMap((post) => {
      return suportedLanguages.map((lang) => ({
        loc: `${WEBSITE_URL}/${lang}/posts/${post.slug}`,
        lastmod: new Date(post.updated_at).toISOString().split("T")[0],
        lang,
      }));
    })
  );

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
