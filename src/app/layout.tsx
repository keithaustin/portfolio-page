import './globals.css'
import { Inter } from 'next/font/google'
import firebase_app from '../../firebase.config'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio - Keith Austin',
  description: 'Portfolio page for Keith Austin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
