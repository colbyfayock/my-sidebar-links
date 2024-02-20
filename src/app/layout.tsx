import './globals.css';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { Clapperboard } from 'lucide-react';

import Container from '@/components/Container';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-rows-[auto_1fr_auto] h-screen">
          <nav className="py-8">
            <Container className="max-w-5xl flex justify-between items-center flex-col md:flex-row">
              <p className="text-center mb-4 md:mb-0">
                <Link href="/" className="flex items-center gap-2 text-3xl font-bold text-zinc-900 dark:text-white hover:text-zinc-900 dark:hover:text-gray-100 drop-shadow-[0_2px_0px_rgba(255,255,255,1)] dark:drop-shadow-[0_2px_0px_rgba(0,0,0,1)]">
                  <Clapperboard className="w-8 h-8" /> 2Reel
                </Link>
              </p>
              <ul className="flex text-lg m-0">
                <li className="mr-6">
                  <Link href="/watched">Watched</Link>
                </li>
              </ul>
            </Container>
          </nav>
          <main className="min-w-0">{ children }</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
