import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideNav from '@/components/layout/navbar/sidenav'
import { Toaster } from 'sonner'
import { ParticleSection } from '@/components/ui/particle-section'
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
      <body className='bg-background text-fontcolor flex bg-page-gradient'>
        {/* <ParticleSection /> */}
        <Toaster />
        <SideNav />
        {children}
      </body>
    </html>
  )
}
