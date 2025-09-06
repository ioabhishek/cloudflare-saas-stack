import { db } from "../db/db"
import { user } from "../db/schema"
import { eq } from "drizzle-orm"

export const userDetails = async (c: any) => {
  const session = c.get("session")
  if (!session?.user?.id) {
    return c.json({ user: null })
  }

  const userDetails = await db
    .select()
    .from(user)
    .where(eq(user.id, session.user.id))

  return c.json({ user: userDetails[0] || null })
}
