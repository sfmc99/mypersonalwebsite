import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
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
  metadataBase: new URL("https://mypersonalwebsite-smoky.vercel.app"),
  title: "Ankit Bajpai | Marketing Technologist & Software Engineer",
  description:
    "Personal website of Ankit Bajpai — Marketing Technologist and Software Engineer specializing in CDPs, Marketing Automation, Analytics, and AI for Marketing.",
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
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        ) : null}
        {/* Site-wide Ticker */}
        <div className="sticky top-0 z-50 w-full bg-yellow-100 text-yellow-900 dark:bg-yellow-900/30 dark:text-yellow-50 border-b border-black/5 dark:border-white/10 h-10 overflow-hidden">
          <div className="h-full flex items-center">
            <div className="w-full overflow-hidden whitespace-nowrap">
              <div className="inline-block animate-marquee will-change-transform">
                <span className="mx-6">
                  This website is 100% AI generated as an experiment by Ankit Bajpai to showcase that AI can code. Platform used is Windsurf Agentic IDE and ChatGPT5
                </span>
                <span className="mx-6" aria-hidden="true">
                  • This website is 100% AI generated as an experiment by Ankit Bajpai to showcase that AI can code. Platform used is Windsurf Agentic IDE and ChatGPT5 •
                </span>
              </div>
            </div>
          </div>
        </div>

        {children}
        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
