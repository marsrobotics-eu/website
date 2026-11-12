import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-inter' })

const description =
  "Makers And Robotics Society, Amsterdam. An open builder community for students, researchers, engineers, and makers building Amsterdam's robotics layer."

export const metadata: Metadata = {
  metadataBase: new URL('https://www.marsrobotics.eu'),
  title: 'MARS | Makers And Robotics Society, Amsterdam',
  description,
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
  openGraph: {
    title: 'MARS | Makers And Robotics Society, Amsterdam',
    description,
    url: '/',
    siteName: 'MARS',
    images: ['/assets/images/our_logo.jpeg'],
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
