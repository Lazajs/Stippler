import './globals.css'
import { Space_Mono } from 'next/font/google'

const smono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'Stippler | Divide your bill',
  description: 'Divide your bill with ease',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${smono.className} bg-cyan-100`}>{children}</body>
    </html>
  )
}
