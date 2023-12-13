import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Powerlines',
  description: 'Bringing Power to the Public'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.svg" sizes="any" />
      <body className="flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
