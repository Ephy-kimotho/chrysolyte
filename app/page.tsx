import { Navbar } from "@/components/navbar"
import { Home } from "@/components/sections/home"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Process } from "@/components/sections/process"
import { Services } from "@/components/sections/services"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Home />
        <About />
        <Projects />
        <Process />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
