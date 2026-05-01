"use client"

import { motion } from "framer-motion"

const skills = [
  "Certified Artist",
  "Biotechnologist",
  "Bridal Expert",
  "Skin Science",
  "5+ Years",
]

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden lg:max-w-none">
              <img
                src="/images/about-portrait.jpg"
                alt="Nav Nidhi Bhatia at work"
                className="h-full w-full object-cover"
              />
              {/* Gold Frame Border */}
              <div className="pointer-events-none absolute inset-4 border-2 border-gold/50" />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
              About Us
            </span>

            <blockquote className="mt-8 border-l-2 border-gold pl-6">
              <p className="font-serif text-2xl italic leading-relaxed text-dark sm:text-3xl">
                &ldquo;Beauty is not transformation — it&apos;s revelation.&rdquo;
              </p>
            </blockquote>

            <div className="mt-8 space-y-4 font-sans text-base leading-relaxed text-muted-foreground">
              <p>
                Nav Nidhi Bhatia, the visionary behind Shridha Arora Beauty Salon,
                brings a unique blend of science and artistry to the beauty
                industry. With a background in biotechnology, she understands
                skin at its deepest level.
              </p>
              <p>
                Founded in the heart of Haridwar, SA Beauty Salon has become a
                sanctuary for those seeking authentic beauty enhancement. Every
                look is crafted to honour your natural features, not mask them.
              </p>
            </div>

            {/* Skill Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-dark/20 px-4 py-2 font-sans text-xs uppercase tracking-wider text-dark"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
