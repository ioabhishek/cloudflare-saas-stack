"use client"

import { signIn, signOut } from "@/lib/auth-client"
import { useAuth } from "@/lib/auth-context"

import { useRouter } from "next/navigation"
import React from "react"
import { Card } from "@repo/ui/components/card"
import { Button } from "@repo/ui/components/button"

const page = () => {
  const { user } = useAuth()
  const router = useRouter()

  // if (user?.name) {
  //   router.push("/")
  // }

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
          <Button onClick={handleGoogleSignIn}>Login with Google</Button>
        </div>
      )}
    </div>
  )
}

export default page
