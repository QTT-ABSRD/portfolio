import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/views/Header'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Mon portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

