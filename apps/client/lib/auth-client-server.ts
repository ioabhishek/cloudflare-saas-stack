import { createAuthClient } from "better-auth/client"

export const authClientServer = createAuthClient({
  //you can pass client configuration here
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000",
  fetchOptions: {
    credentials: "include",
    throw: true,
  },
})

export const signIn = authClientServer.signIn
export const signOut = authClientServer.signOut
export const useSession = authClientServer.useSession
export const getSession = authClientServer.getSession
