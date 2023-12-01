import { Inter } from 'next/font/google'
import './globals.css'

import Header from './ui/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learn Next.js',
  description: 'Created to teach Next.js in a fun way!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div 
          className="flex flex-col items-center p-4 bg-slate-200 h-screen">  
          {children}
        </div>
      </body>
    </html>
  )
}
