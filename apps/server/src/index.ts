import { Hono } from "hono"
import { auth } from "./lib/auth"
import { cors } from "hono/cors"
import authenticate from "./routes/auth.route"

const app = new Hono().basePath("/api")

app.use(
  "*",
  cors({
    origin: ["*"],
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

// Routes
app.get("/", async (c) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers })

  if (!session) {
    return c.json({ message: "Not authenticated" }, 401)
  } else {
    return c.json({ message: "Hello, authenticated user!", session })
  }
})
app.route("/user", authenticate)

export type AppType = typeof router
export default app
