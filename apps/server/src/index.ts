import { Hono } from "hono"
import { auth } from "./lib/auth"
import { cors } from "hono/cors"

const app = new Hono().basePath("/api")

app.use(
  "*",
  cors({
    origin: "https://waitlistz.ioabhishek.workers.dev",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS", "PUT", "DELETE", "PATCH"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  })
)

const router = app.on(["POST", "GET"], "/auth/**", (c) =>
  auth.handler(c.req.raw)
)

export type AppType = typeof router
export default app
