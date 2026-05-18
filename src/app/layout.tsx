import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ModalProvider } from "@/context/ModalContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MacAppStudio | World’s #1 App Development Company",
  description: "MacAppStudio is a million-dollar mobile app Development Company in Chennai, creating multi-million dollar apps for our customers.",
  keywords: "IOS development, iOS app development, iOS developer, app developer, app development, mobile app developer, mac app developers, web developers, android developers, mac OS X app development, ui/ux design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col pt-20 font-sans">
        <ModalProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
