import Link from "next/link";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BrawlStarsLogo from "@/ui/BrawlStarsLogo";

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Brawlers",
  description: "All brawlers from BrawlStars",
  icons: {
    icon: '/brawlstarsLoading.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const styles = 'my-0 font-semibold text-white hover:text-[#ffe058]'
  const routes = [
    { name: 'Brawlers', path: '/'},
    { name: 'Maps', path: '/maps'},
    { name: 'Events', path: '/events'},
    { name: 'Game-Modes', path: '/game-modes'}
  ]

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="my-0 mx-auto max-w-screen-xl">
          <header>
            <nav className='my-8 mx-0 flex justify-between items-center'>
              <BrawlStarsLogo />
              <ul className="flex gap-x-3">
                {routes.map(route => <Link key={route.path} className={styles} href={route.path}>{route.name}</Link>)}
              </ul>
            </nav>
          </header>
          
          {children}

          <footer className="mb-5 pt-5 bg-top bg-repeat-x bg-[length:30px_2px] bg-gradient-to-r from-[#686868] from-50% to-[#ffffff00] to-0%">
            <nav className="flex flex-col gap-5 items-center mb-4">
              <BrawlStarsLogo />
              <ul className="flex gap-x-8">
                {routes.map(route => <Link key={route.path} className={styles} href={route.path}>{route.name}</Link>)}
              </ul>
            </nav>
            <div className="flex flex-col items-center">
              <p className="text-[#808080]">
                Design inspired by these pages
                <a className={`${styles} mx-1`} href="https://brawlify.com/" target="_blank">Brawlify</a>
                and
                <a className={`${styles} mx-1`} href="https://brawlstats.com/" target="_blank">Brawlstats</a>
              </p>
              <p className="text-[#808080]">
                Credit about Brawl Stars API to<a className={`${styles} mx-1`} href="https://brawlify.com/" target="_blank">Brawlify</a>
              </p>
              <p className="text-[#808080]">See documentation<a className={`${styles} mx-1`} href="https://brawlapi.com/" target="_blank">here</a></p>
              <p className="text-[#808080] max-w-[600px] text-center">
                This content is not affiliated with, endorsed, sponsored, or specifically approved by Supercell and Supercell is not responsible for this content.
                For more information, see the<a className={`${styles} mx-1`} href="https://supercell.com/en/fan-content-policy/" target="_blank">Fan Content Policy at Supercell Fan Content Policy.</a>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
