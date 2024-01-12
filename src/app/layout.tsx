import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calcmaster - ferramentas matemáticas',
  description: 'Todas as ferramentas matemáticas que você precisa, em um só lugar'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
