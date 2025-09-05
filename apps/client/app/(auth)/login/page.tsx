"use client"

import { signIn, signOut } from "@/lib/auth-client"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import React from "react"

const page = () => {
  const { user } = useAuth()
  const router = useRouter()

  if (user?.name) {
    router.push("/")
  }

  const handleGoogleSignIn = async () => {
    try {
      await signIn.social({
        provider: "google",
        callbackURL: window.location.origin + "/",
      })
      // router.push("/")
    } catch (err) {
      window.alert("Google sign-in failed")
      console.error("Google sign-in failed:", err)
    }
  }

  return (
    <div className="">
      {user?.name ? (
        <div className=" flex flex-col items-center justify-center gap-4 ">
          <h1>Welcome, {user?.name}!</h1>
          <p>Email: {user?.email}</p>
          <button className="" onClick={() => signOut()}>
            Logout
          </button>
        </div>
      ) : (
        <div className=" flex flex-col items-center justify-center gap-4 ">
          <button
            className=" border p-4 rounded-lg cursor-pointer"
            onClick={handleGoogleSignIn}>
            Login with Google
          </button>
        </div>
      )}
    </div>
  )
}

export default page
