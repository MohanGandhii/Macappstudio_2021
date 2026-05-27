import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/01_Navbar/Navbar";
import Footer from "@/components/02_Footer/Footer";
import { ModalProvider } from "@/context/ModalContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
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
      className={`${outfit.variable} ${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
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
