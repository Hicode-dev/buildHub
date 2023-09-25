import './globals.css'
import {Poppins} from 'next/font/google'
import Navbar from './Components/Navbar/Navbar'


const figtree = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={figtree.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
