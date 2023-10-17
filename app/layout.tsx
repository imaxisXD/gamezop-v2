import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/layout/navbar/navbar'
import SideNav from '@/components/layout/sidenav'
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
      <body className='bg-background text-fontcolor overflow-y-scroll'>
        <SideNav />
        <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
          <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
            <div className="rounded-lg bg-black">
              <NavBar />
            </div>
          </div>
          <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20"></div>
          {children}
        </div>
      </body>
    </html>
  )
}
