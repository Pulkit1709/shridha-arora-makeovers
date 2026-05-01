"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "500+", label: "Clients" },
  { value: "5+", label: "Years" },
  { value: "100%", label: "Bridal Satisfaction" },
]

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-dark pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-8 py-12 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <h1 className="font-serif text-4xl font-medium leading-tight text-cream sm:text-5xl lg:text-6xl xl:text-7xl">
              Indulge In{" "}
              <span className="italic text-gold">Luxurious</span>
              <br />
              Beauty
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-lg font-sans text-base leading-relaxed text-cream/70 sm:text-lg"
            >
              Where science meets artistry. Nav Nidhi Bhatia — certified makeup
              artist and biotechnologist — crafts looks that honour your true
              beauty.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button
                onClick={() => scrollToSection("booking")}
                className="bg-gold px-8 py-6 font-sans text-sm font-medium text-dark hover:bg-gold/90"
              >
                Book Appointment
              </Button>
              <Button
                onClick={() => scrollToSection("gallery")}
                variant="outline"
                className="border-cream/30 bg-transparent px-8 py-6 font-sans text-sm font-medium text-cream hover:border-gold hover:bg-transparent hover:text-gold"
              >
                View Portfolio
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-8 border-t border-cream/10 pt-8 sm:gap-12"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="font-serif text-2xl font-semibold text-gold sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 font-sans text-xs uppercase tracking-wider text-cream/50">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden border-2 border-gold/30 lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-transparent to-dark/60" />
              <img
                src="/images/hero-portrait.jpg"
                alt="Nav Nidhi Bhatia - Founder and Artist at Shridha Arora Beauty Salon"
                className="h-full w-full object-cover"
              />
              {/* Name Badge */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark via-dark/90 to-transparent p-6">
                <p className="font-serif text-lg text-cream">Nav Nidhi Bhatia</p>
                <p className="mt-1 font-sans text-xs uppercase tracking-wider text-gold">
                  Founder & Artist
                </p>
              </div>
            </div>
            {/* Decorative gold corner */}
            <div className="absolute -right-4 -top-4 h-24 w-24 border-r-2 border-t-2 border-gold/50" />
            <div className="absolute -bottom-4 -left-4 h-24 w-24 border-b-2 border-l-2 border-gold/50" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
