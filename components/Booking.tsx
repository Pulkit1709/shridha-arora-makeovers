"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { MapPin, Phone, Clock, Instagram } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { createClient } from "@/lib/supabase/client"

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\-\s]+$/, "Invalid phone number format"),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a date"),
  notes: z.string().optional(),
})

type BookingFormData = z.infer<typeof bookingSchema>

const services = [
  "Bridal Makeup",
  "Party Glam",
  "Editorial Shoots",
  "Skincare Treatments",
  "Hair Styling",
  "Masterclasses",
]

const contactInfo = [
  {
    icon: MapPin,
    title: "Studio Address",
    content: "Govindpuri, Haridwar, Uttarakhand",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "9634737180 / 8057214252",
  },
  {
    icon: Instagram,
    title: "Instagram",
    content: "@shridha_arora_makeovers",
    link: "https://instagram.com/shridha_arora_makeovers",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Mon-Sat 9AM-7PM",
  },
]

export default function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  })

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    try {
      const supabase = createClient()
      const { error } = await supabase.from("bookings").insert({
        name: data.name,
        phone: data.phone,
        service: data.service,
        date: data.date,
        notes: data.notes || null,
      })

      if (error) throw error

      toast.success("Booking submitted successfully!", {
        description: "We will contact you shortly to confirm your appointment.",
      })
      reset()
    } catch {
      toast.error("Failed to submit booking", {
        description: "Please try again or contact us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="booking" className="bg-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Get In Touch
            </span>
            <h2 className="mt-4 font-serif text-3xl font-medium text-cream sm:text-4xl lg:text-5xl">
              Book Your <span className="italic text-gold">Session</span>
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-cream/70">
              Ready to reveal your true beauty? Book an appointment or visit our
              studio in Govindpuri, Haridwar.
            </p>

            <div className="mt-10 space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/30">
                    <info.icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider text-cream/50">
                      {info.title}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 font-sans text-base text-cream transition-colors hover:text-gold"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="mt-1 font-sans text-base text-cream">
                        {info.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-cream/10 bg-dark/50 p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  {...register("name")}
                  className="border-cream/20 bg-transparent text-cream placeholder:text-cream/40 focus:border-gold"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-rose">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Input
                  placeholder="Phone Number"
                  {...register("phone")}
                  className="border-cream/20 bg-transparent text-cream placeholder:text-cream/40 focus:border-gold"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-rose">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <Select onValueChange={(value) => setValue("service", value)}>
                  <SelectTrigger className="border-cream/20 bg-transparent text-cream focus:border-gold [&>span]:text-cream/40 [&[data-state=open]>span]:text-cream">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent className="border-cream/20 bg-dark">
                    {services.map((service) => (
                      <SelectItem
                        key={service}
                        value={service}
                        className="text-cream focus:bg-gold/20 focus:text-cream"
                      >
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="mt-1 text-xs text-rose">{errors.service.message}</p>
                )}
              </div>

              <div>
                <Input
                  type="date"
                  {...register("date")}
                  className="border-cream/20 bg-transparent text-cream focus:border-gold [&::-webkit-calendar-picker-indicator]:invert"
                />
                {errors.date && (
                  <p className="mt-1 text-xs text-rose">{errors.date.message}</p>
                )}
              </div>

              <div>
                <Textarea
                  placeholder="Additional Notes (Optional)"
                  rows={4}
                  {...register("notes")}
                  className="border-cream/20 bg-transparent text-cream placeholder:text-cream/40 focus:border-gold"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold py-6 font-sans text-sm font-medium text-dark hover:bg-gold/90 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Booking"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
