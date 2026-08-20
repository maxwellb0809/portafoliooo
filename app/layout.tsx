import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Fraunces } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', style: ['normal', 'italic'] })

export const metadata: Metadata = {
  title: 'Maxwell Pérez — Full-Stack Web Developer',
  description: 'Software engineering student and full-stack web developer building scalable web apps and cozy digital experiences.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080b19',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className={`${dmSans.variable} ${fraunces.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
