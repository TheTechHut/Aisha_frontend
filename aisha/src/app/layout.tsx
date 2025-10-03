import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aisha",
  description: "Your 24/7 WhatsApp sales assistant",icons: {
    icon: "https://aisha-frontend-psi.vercel.app/image-aisha.png",
  },
  openGraph: {
    title: "Aisha",
    description: "Your 24/7 WhatsApp sales assistant",
    url: "https://aisha.thetechhut.co",
    siteName: "Aisha",
    images: [
      {
        url: "https://aisha-frontend-psi.vercel.app/image-aisha.png",
        width: 1200,
        height: 630,
        alt: "Aisha Assistant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aisha",
    description: "Your 24/7 WhatsApp sales assistant",
    images: ["https://aisha.kimosop.dev/og-image.png"],
    creator: "@kimosop_",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
