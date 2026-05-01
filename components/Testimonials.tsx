"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Nav Nidhi made me feel like the most beautiful bride. Her attention to detail and understanding of what I wanted was incredible.",
    name: "Priya Sharma",
    city: "Roorkee",
  },
  {
    quote:
      "The airbrush makeup lasted all day and night! Every photo came out perfect. Highly recommend for any special occasion.",
    name: "Ananya Gupta",
    city: "Haridwar",
  },
  {
    quote:
      "Finally found a makeup artist who understands skin science. The pre-bridal skincare treatment made such a difference!",
    name: "Ritika Verma",
    city: "Dehradun",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-20 sm:py-28">
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
            Client Love
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium text-dark sm:text-4xl lg:text-5xl">
            Testimonials
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-8 shadow-sm"
            >
              {/* Gold Line */}
              <div className="mb-6 h-px w-16 bg-gold" />

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-6 font-serif text-lg italic leading-relaxed text-dark">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Client Info */}
              <div className="mt-6">
                <p className="font-sans text-sm font-medium text-dark">
                  {testimonial.name}
                </p>
                <p className="mt-1 font-sans text-xs text-muted-foreground">
                  {testimonial.city}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
