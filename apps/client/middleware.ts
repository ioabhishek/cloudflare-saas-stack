import { getSessionCookie } from "better-auth/cookies"
import { NextResponse } from "next/server"

export default async function middleware(request: Request) {
  const sessionCookie = getSessionCookie(request)
  console.log("sessionCookie", sessionCookie)

  if (!sessionCookie) {
    console.debug(
      "[MIDDLEWARE] No session cookie and not on public path, redirecting to /login"
    )
    return NextResponse.redirect(new URL("/login", request.url))
  }
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|images|icon.png|monitoring|opengraph-image.png|ingest|api|login|api/emails).*)",
  ],
}
