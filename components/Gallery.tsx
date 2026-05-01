"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const galleryItems = [
  { category: "Bridal", image: "/images/gallery-bridal.jpg", tall: true },
  { category: "Party Glam", image: "/images/gallery-party.jpg", tall: false },
  { category: "Editorial", image: "/images/gallery-editorial.jpg", tall: false },
  { category: "Skincare Glow", image: "/images/gallery-skincare.jpg", tall: false },
  { category: "Hair Updo", image: "/images/gallery-hair.jpg", tall: false },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-dark py-20 sm:py-28">
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
            Our Work
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium text-cream sm:text-4xl lg:text-5xl">
            Portfolio
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Tall Image - Bridal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative aspect-[3/4] overflow-hidden sm:row-span-2"
          >
            <img
              src={galleryItems[0].image}
              alt={galleryItems[0].category}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 font-sans text-xs uppercase tracking-wider text-gold">
              {galleryItems[0].category}
            </span>
          </motion.div>

          {/* Remaining Images */}
          {galleryItems.slice(1).map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              className="group relative aspect-square overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.category}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 font-sans text-xs uppercase tracking-wider text-gold">
                {item.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* View Full Portfolio Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://instagram.com/shridha_arora_makeovers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-gold transition-colors hover:text-gold/80"
          >
            View Full Portfolio
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
