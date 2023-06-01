import './globals.css'
import { Nunito } from 'next/font/google'

const inter = Nunito({ subsets: ['cyrillic'] })

export const metadata = {
  title: 'Ogogo System - Платформа с продуктами Ogogo Academy',
  description: 'Ogogo Academy, курсы программирования, магазин электроники, курсы английского языка',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
