import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
})

export const metadata: Metadata = {
  title: 'Shridha Arora Beauty Salon & Makeup Studio | Haridwar',
  description: 'Indulge in luxurious beauty at Shridha Arora Beauty Salon & Makeup Studio. Premium bridal makeup, skincare, and hair styling services by Nav Nidhi Bhatia in Govindpuri, Haridwar.',
  keywords: ['beauty salon', 'makeup studio', 'bridal makeup', 'haridwar', 'skincare', 'hair styling'],
  authors: [{ name: 'Nav Nidhi Bhatia' }],
  openGraph: {
    title: 'Shridha Arora Beauty Salon & Makeup Studio',
    description: 'Where science meets artistry. Premium beauty services in Haridwar.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0D0A0B',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} bg-cream`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        <Toaster />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
