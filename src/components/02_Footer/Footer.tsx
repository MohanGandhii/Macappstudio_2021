"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer className="bg-white border-t border-b border-gray-200 shadow-sm py-10 lg:py-12">
      <div className="container mx-auto px-4 lg:px-8">
        {/* CTA Section - Hidden on who_we_are page */}
        {pathname !== "/who_we_are" && (
          <div className="bg-[#FAFAFA] py-20 md:py-28 px-4 flex flex-col items-center justify-center mb-16 max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
              Let’s Transform your business for a change that matters
            </h2>
            <Link href="/contactus" className="bg-black text-white px-8 py-3 text-sm md:text-base font-medium hover:bg-gray-800 transition-colors">
              Get a Proposal
            </Link>
          </div>
        )}

        {/* Logo Section */}
        <div className="flex flex-col items-start mb-8">
          <Link href="/" className="inline-block">
            <Image
              src="/assets/images/logo.png"
              alt="MacAppStudio"
              width={160}
              height={45}
              className="object-contain"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* What We Do */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4 text-base">What we do?</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/appdevelopment" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/technology_consulting" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">
                  Technology Consulting
                </Link>
              </li>
              <li>
                <Link href="/R_D" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">
                  Research and Development
                </Link>
              </li>
            </ul>
          </div>

          {/* How we do it & Who we are */}
          <div>
            <ul className="space-y-3">
              <li>
                <Link href="/how_we_do_it" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors text-base block">
                  How we do it?
                </Link>
              </li>
              <li>
                <Link href="/success_stories" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors text-base block">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/who_we_are" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors text-base block">
                  Who we are?
                </Link>
              </li>
              <li>
                <Link href="/contactus" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors text-base block">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors text-base block">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4 text-base uppercase">FOLLOW US</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://in.linkedin.com/company/macappstudioteam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={26} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCjAwopTaJUR5yXDzjg_8E_A"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-red-600 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-200 text-center flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-gray-600 font-medium">
          <p>
            MacAppStudio &copy; Copyright {currentYear}
          </p>
          <span className="hidden md:inline">|</span>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
