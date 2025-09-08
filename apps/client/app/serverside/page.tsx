import { authClientServer } from "@/lib/auth-client-server"
import { headers } from "next/headers"
import React from "react"

const page = async () => {
  const session = await authClientServer.getSession({
    fetchOptions: {
      headers: await headers(),
    },
  })

  if (!session) {
    return <div>Not logged in</div>
  }

  return <div>{session?.user?.name}</div>
}

export default page
