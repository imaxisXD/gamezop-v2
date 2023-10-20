import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideNav from '@/components/layout/sidenav'
import { Toaster } from 'sonner'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GameZop v2',
  description: 'Gamezop website redisigned and reimagined',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className='bg-background text-fontcolor flex'>
        <Toaster />
        <SideNav />
        {children}
      </body>
    </html>
  )
}
