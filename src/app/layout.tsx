import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});
import Head from "next/head";
export const metadata: Metadata = {
  title: "Virender Chauhan",
  description: "Full Stack Developer",
  icons: {
    icon: { type: "image/svg+xml", url: "/logo.svg", rel: "icon" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans",
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
