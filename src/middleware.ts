import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const page = request.nextUrl.searchParams.get("page") || "1";
  const query = request.nextUrl.searchParams.get("q") || "";

  const response = NextResponse.next();
  response.headers.set("x-pathname", pathname);
  response.headers.set("x-page", page);
  response.headers.set("x-query", query);

  return response;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|assets|api).*)"],
};
