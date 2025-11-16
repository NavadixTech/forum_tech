import { Navbar } from "@/components/navbar"
import { Workshops } from "@/components/workshops"
import { Footer } from "@/components/footer"

export default function AteliersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Workshops />
      </div>
      <Footer />
    </main>
  )
}
