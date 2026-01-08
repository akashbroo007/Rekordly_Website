import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const { pathname } = url;

  if (!pathname.endsWith(".html")) {
    return NextResponse.next();
  }

  let nextPath = pathname.slice(0, -".html".length);
  if (nextPath === "/index") nextPath = "/";

  url.pathname = nextPath;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/|api/|favicon\.ico).*)"],
};
