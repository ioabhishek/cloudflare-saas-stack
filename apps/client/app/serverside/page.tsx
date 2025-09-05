import { authClient } from "@/lib/auth-client"
import { headers } from "next/headers"
import React from "react"

const page = async () => {
  const session = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
    },
  })

  return <div>{session?.user?.name}</div>
}

export default page
