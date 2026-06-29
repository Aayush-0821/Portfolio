import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AudioProvider from "../components/AudioProvider";
import BootLoader from "../components/BootLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aayush Vats | Portfolio",
  description: "Full Stack Developer Portfolio",

  openGraph: {
    title: "Aayush Vats | Portfolio",
    description: "Full Stack Developer Portfolio",
    images: ["/og-image2.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aayush Vats | Portfolio",
    description: "Full Stack Developer Portfolio",
    images: ["/og-image2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AudioProvider />
        {children}
      </body>
    </html>
  );
}
