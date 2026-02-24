import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";


export const metadata: Metadata = {
  title: "Turnhill International LLP | Business, Legal & Financial Advisory",
  description:
    "Turnhill International LLP empowers entrepreneurs and growing businesses with end-to-end legal, financial, compliance, and strategic advisory services across India and international markets.",
  keywords:
    "Business Advisory, Legal Compliance, Company Registration, GST Compliance, Financial Advisory, Tax Planning, Virtual CFO, Startup Advisory, International Expansion, Corporate Structuring",
  authors: [{ name: "Turnhill International LLP" }],
  creator: "Turnhill International LLP",

  openGraph: {
    title: "Turnhill International LLP | Structured Advisory for Sustainable Growth",
    description:
      "End-to-end advisory across business structuring, compliance, finance, governance, and international expansion. Built for startups, SMEs, and growth-stage enterprises.",
    url: "https://turnhill.in",
    siteName: "Turnhill International LLP",
    images: [
      {
        url: "https://turnhill.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Turnhill International LLP - Business, Legal & Financial Advisory",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
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
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <main className="site-content">
          {children}
          <Toaster />
        </main>

        <Analytics />
      </body>
    </html>
  );
}
