import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Program } from "@/components/program"
import { Speakers } from "@/components/speakers"
import { Location } from "@/components/location"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Program />
      <Speakers />
      <Location />
      <Contact />
      <Footer />
    </main>
  )
}
