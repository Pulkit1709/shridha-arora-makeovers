import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Marquee from "@/components/Marquee"
import Services from "@/components/Services"
import Gallery from "@/components/Gallery"
import About from "@/components/About"
import Testimonials from "@/components/Testimonials"
import Booking from "@/components/Booking"
import Footer from "@/components/Footer"
import WhatsappFloat from "@/components/WhatsappFloat"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Gallery />
      <About />
      <Testimonials />
      <Booking />
      <Footer />
      <WhatsappFloat />
    </main>
  )
}
