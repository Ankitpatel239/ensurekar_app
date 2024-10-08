import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/footer";
import ScrollTotop from "./components/Scroll-To-top";
import CTASection from "./components/Section/CTA-Section";
import { Suspense } from "react";
import CoolLoading from "./loading";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ensurekar |  Legal & Financial Services: Company Reg., GST, Startup Registration.",
  description: "Register your company with Ensurekar and get started on your business journey. Online legal services are designed to help startups and SMEs in India.",
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
        <Header />
<Suspense fallback={<CoolLoading/>}>
        {children}
        </Suspense>
        <CTASection/>
        <Footer />
        <ScrollTotop/>
      </body>
    </html>
  );
}
