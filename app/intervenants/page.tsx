import type React from "react"
import { Navbar } from "@/components/navbar"
import { Speakers } from "@/components/speakers"

export default function IntervenantsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Speakers showAll={true} />
      </main>
    </>
  )
}
