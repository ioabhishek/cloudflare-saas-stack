import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
  //you can pass client configuration here
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000",
  fetchOptions: {
    credentials: "include",
    throw: true,
  },
})

export const signIn = authClient.signIn
export const signOut = authClient.signOut
export const useSession = authClient.useSession
export const getSession = authClient.getSession
