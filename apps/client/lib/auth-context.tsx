"use client"

import { createContext, type ReactNode, useContext } from "react"
import { useSession } from "./auth-client"

type SessionData = NonNullable<ReturnType<typeof useSession>["data"]>

interface AuthContextType {
  session: SessionData["session"] | null
  user: SessionData["user"] | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const { data: session } = useSession()

  return (
    <AuthContext.Provider
      value={{
        session: session?.session ?? null,
        user: session?.user ?? null,
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
