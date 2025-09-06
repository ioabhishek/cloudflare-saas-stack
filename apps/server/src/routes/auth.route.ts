import { Hono } from "hono"
import { isAuthenticated } from "../middleware/auth.middleware"
import { userDetails } from "../controllers/auth.controller"

const authenticate = new Hono()

authenticate.get("/", isAuthenticated, userDetails)

export default authenticate
