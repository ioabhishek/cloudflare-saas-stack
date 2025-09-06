import { auth } from "../lib/auth"
import { createMiddleware } from "hono/factory"

export const isAuthenticated = createMiddleware(async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers })

  if (!session) {
    return c.json({ message: "Not authenticated" }, 401)
  }

  c.set("session", session)
  await next()
})
