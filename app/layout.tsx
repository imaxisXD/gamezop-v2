import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideNav from '@/components/layout/navbar/sidenav'
import { Toaster } from 'sonner'
import Footer from '@/components/layout/footer'
import SearchBar from '@/components/layout/searchbar'
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
      <body className='bg-background overflow-y-scroll text-fontcolor bg-page-gradient'>
        <Toaster richColors />
        <SideNav />
        <div className="lg:pl-72">
          <div className="mx-auto max-w-4xl space-y-8 px-2 pt-32 xs:pt-32 md:pt-32 lg:pt-16 lg:px-8">
            <SearchBar />
            <div className='p-3.5 lg:p-6'>
              {children}
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
