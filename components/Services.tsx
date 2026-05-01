"use client"

import { motion } from "framer-motion"

const services = [
  {
    number: "01",
    name: "Bridal Makeup",
    description:
      "Complete bridal transformation with HD & airbrush techniques for your perfect day.",
    price: "8000",
  },
  {
    number: "02",
    name: "Party Glam",
    description:
      "Stunning looks for cocktails, receptions, and special celebrations.",
    price: "2500",
  },
  {
    number: "03",
    name: "Editorial Shoots",
    description:
      "Camera-ready makeup artistry for photoshoots and fashion editorials.",
    price: "3500",
  },
  {
    number: "04",
    name: "Skincare Treatments",
    description:
      "Science-backed facials and skin therapies for lasting glow.",
    price: "1200",
  },
  {
    number: "05",
    name: "Hair Styling",
    description:
      "From elegant updos to contemporary cuts for every occasion.",
    price: "1500",
  },
  {
    number: "06",
    name: "Masterclasses",
    description:
      "Learn professional techniques in our exclusive beauty workshops.",
    price: "5000",
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
            What We Offer
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium text-dark sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Large Number */}
              <span className="absolute -right-2 -top-4 font-serif text-8xl font-bold text-rose/10">
                {service.number}
              </span>

              {/* Content */}
              <div className="relative">
                <h3 className="font-serif text-2xl font-medium text-dark">
                  {service.name}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <p className="mt-4 font-sans text-lg font-medium text-gold">
                  Starting from Rs.{service.price}
                </p>
              </div>

              {/* Bottom Gold Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />

              {/* Hover Border */}
              <div className="pointer-events-none absolute inset-0 border-2 border-transparent transition-colors duration-300 group-hover:border-gold/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
