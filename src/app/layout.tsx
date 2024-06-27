import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";

// Styles
import "@/assets/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  manifest : "/manifest.json",
  title: 'Gamezop | Chinmay',
  description: 'This is a website inspired from Gamezop.com'
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
