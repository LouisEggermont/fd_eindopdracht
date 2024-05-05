import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "./components/MainLayout";

const inter = Inter({ subsets: ["latin"] });

import localFont from '@next/font/local'

const helvetica = localFont({
  src: [
    {
      path: './assets/fonts/HelveticaNeue-Thin.ttf',
      weight: '100'
    },
    {
      path: './assets/fonts/HelveticaNeue.ttf',
      weight: '400'
    },
    {
      path: './assets/fonts/HelveticaNeue-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-helvetica'
})



export const metadata: Metadata = {
  title: "Louis Eggermont",
  description: "Portfolio project of Louis Eggermont",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helvetica.variable} bg-gray-50 font-helvetica text-[#121212]`}><MainLayout>
      {children}</MainLayout></body>
    </html>
  );
}
