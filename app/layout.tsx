import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideNav from '@/components/layout/navbar/sidenav'
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
      <body className='bg-background overflow-y-scroll pb-36 text-fontcolor bg-page-gradient'>
        <Toaster richColors />
        <SideNav />
        <div className="lg:pl-72">
          <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
            <div className='p-3.5 lg:p-6'>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
