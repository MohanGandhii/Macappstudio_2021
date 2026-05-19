"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import clsx from "clsx";

import { useModal } from "@/context/ModalContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { openProposalModal } = useModal();

  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  const navLinks = [
    { name: "How we do it?", href: "/how_we_do_it" },
    { name: "Success Stories", href: "/success_stories" },
    { name: "Who we are?", href: "/who_we_are" },
  ];

  const whatWeDoLinks = [
    { name: "App Development", href: "/appdevelopment" },
    { name: "Technology Consulting", href: "/technology_consulting" },
    { name: "Research and Development", href: "/R_D" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          
          {/* Mobile Menu Hamburger Button - Left-aligned on mobile */}
          <button
            className="lg:hidden p-2 text-gray-900 hover:text-black transition-colors z-20"
            onClick={() => setIsOpen(true)}
            aria-label="Toggle menu"
          >
            <FiMenu size={32} />
          </button>

          {/* Logo - Centered on mobile, Left-aligned on desktop */}
          <Link 
            href="/" 
            className="flex-shrink-0 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 z-10" 
            onClick={closeMenu}
          >
            <Image
              src="/assets/images/logo.png"
              alt="MacAppStudio"
              width={160}
              height={45}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-600 transition-colors py-2">
                What we do? <FiChevronDown className={clsx("transition-transform", isDropdownOpen && "rotate-180")} />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden py-2"
                  >
                    {whatWeDoLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={clsx(
                          "block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors",
                          pathname === link.href && "bg-blue-50 text-blue-600 font-medium"
                        )}
                        onClick={closeMenu}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "font-medium text-gray-700 hover:text-blue-600 transition-colors",
                  pathname === link.href && "text-blue-600"
                )}
              >
                {link.name}
              </Link>
            ))}

            <button 
              onClick={openProposalModal}
              className="bg-black text-white px-6 py-2.5 font-bold hover:bg-gray-800 transition-colors shadow-md active:scale-95"
            >
              Get a Proposal
            </button>
          </nav>

          {/* Spacer for mobile layout balance */}
          <div className="lg:hidden w-10" />
        </div>
      </div>

      {/* High-Fidelity Mobile Navigation Drawer Overlay (Replicating user's mockup image exactly) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-50 overflow-y-auto lg:hidden flex flex-col"
          >
            {/* Header section (X Button on left, Logo in center) */}
            <div className="flex items-center justify-between px-6 h-20 border-b border-gray-100 flex-shrink-0 relative">
              {/* Close Button ("X") */}
              <button 
                onClick={closeMenu}
                className="text-[#2B2B2B] hover:scale-105 active:scale-95 transition-all p-2 z-10"
                aria-label="Close menu"
              >
                <FiX size={32} />
              </button>

              {/* Centered Logo */}
              <div className="absolute left-1/2 -translate-x-1/2">
                <Image
                  src="/assets/images/logo.png"
                  alt="MacAppStudio"
                  width={160}
                  height={45}
                  className="object-contain"
                />
              </div>

              {/* Balance element */}
              <div className="w-12" />
            </div>

            {/* Scrollable Mobile Menu Links Container */}
            <div className="flex-1 px-8 py-8 flex flex-col gap-6 font-sans">
              
              {/* Category 1: What we do? heading and sublinks */}
              <div className="flex flex-col gap-3">
                <span className="font-bold text-[18px] text-[#2B2B2B]">What we do?</span>
                <div className="flex flex-col gap-3 pl-0">
                  <Link 
                    href="/appdevelopment" 
                    onClick={closeMenu}
                    className="text-[17px] text-[#444] font-medium hover:text-black transition-colors"
                  >
                    App Development
                  </Link>
                  <Link 
                    href="/technology_consulting" 
                    onClick={closeMenu}
                    className="text-[17px] text-[#444] font-medium hover:text-black transition-colors"
                  >
                    Technology Consulting
                  </Link>
                  <Link 
                    href="/R_D" 
                    onClick={closeMenu}
                    className="text-[17px] text-[#444] font-medium hover:text-black transition-colors"
                  >
                    Research and Development
                  </Link>
                </div>
              </div>

              {/* Category 2: General bold root links */}
              <div className="flex flex-col gap-4 mt-2">
                <Link 
                  href="/how_we_do_it" 
                  onClick={closeMenu}
                  className="font-bold text-[18px] text-[#2B2B2B] hover:text-black transition-colors"
                >
                  How we do it?
                </Link>
                <Link 
                  href="/success_stories" 
                  onClick={closeMenu}
                  className="font-bold text-[18px] text-[#2B2B2B] hover:text-black transition-colors"
                >
                  Success Stories
                </Link>
                <Link 
                  href="/who_we_are" 
                  onClick={closeMenu}
                  className="font-bold text-[18px] text-[#2B2B2B] hover:text-black transition-colors"
                >
                  Who we are?
                </Link>
                <Link 
                  href="/contactus" 
                  onClick={closeMenu}
                  className="font-bold text-[18px] text-[#2B2B2B] hover:text-black transition-colors"
                >
                  Contact Us
                </Link>
                <Link 
                  href="/careers" 
                  onClick={closeMenu}
                  className="font-bold text-[18px] text-[#2B2B2B] hover:text-black transition-colors"
                >
                  Careers
                </Link>
              </div>

              {/* FOLLOW US & Social icons row */}
              <div className="flex flex-col gap-3 mt-4">
                <span className="font-bold text-[14px] uppercase tracking-wider text-[#2B2B2B]">FOLLOW US</span>
                <div className="flex items-center gap-5">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-[#2B2B2B] hover:scale-110 active:scale-95 transition-all"
                  >
                    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-[#2B2B2B] hover:scale-110 active:scale-95 transition-all"
                  >
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                      <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09v1.66c0 .6-.03 1.29-.1 2.09-.06.8-.15 1.43-.28 1.9a2.38 2.38 0 0 1-1.68 1.68c-.47.13-1.12.22-1.95.28-.83.07-1.53.1-2.1.1H8.37c-.57 0-1.27-.03-2.1-.1-.83-.06-1.48-.15-1.95-.28a2.38 2.38 0 0 1-1.68-1.68c-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09v-1.66c0-.6.03-1.29.1-2.09.06-.8.15-1.43.28-1.9a2.38 2.38 0 0 1 1.68-1.68c.47-.13 1.12-.22 1.95-.28.83-.07 1.53-.1 2.1-.1h7.46c.57 0 1.27.03 2.1.1.83.06 1.48.15 1.95.28a2.38 2.38 0 0 1 1.68 1.68z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Get a Proposal button at the bottom-left area */}
              <div className="mt-auto pt-8">
                <button 
                  onClick={() => { closeMenu(); openProposalModal(); }}
                  className="bg-black text-white px-8 py-3.5 font-bold hover:bg-gray-800 active:scale-95 transition-all text-[18px] tracking-wide text-left flex items-center justify-center min-w-[220px]"
                >
                  Get a Proposal
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
