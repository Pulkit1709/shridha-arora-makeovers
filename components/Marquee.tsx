"use client"

const items = [
  "Hair",
  "Skincare",
  "Makeup",
  "Bridal Expert",
  "Airbrush Makeup",
  "Biotechnology",
  "Govindpuri Haridwar",
]

export default function Marquee() {
  return (
    <section className="overflow-hidden bg-dark py-4">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span
            key={index}
            className="mx-4 flex items-center font-serif text-lg text-cream/80 sm:text-xl"
          >
            {item}
            <span className="ml-8 inline-block h-2 w-2 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </section>
  )
}
