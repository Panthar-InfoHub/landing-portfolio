import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Link Lift - Digital Marketing Agency",
  description: "We grow brands with data-driven digital marketing strategies. SEO, Social Media, PPC, and more.",
  keywords: "digital marketing, SEO, social media marketing, PPC, branding",
  openGraph: {
    title: "Link Lift - Digital Marketing Agency",
    description: "We grow brands with data-driven digital marketing strategies.",
    url: "https://linklift.com",
    siteName: "Link Lift",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#c896f0" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
