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
        <div className="flex items-center justify-between lg:justify-between h-20 relative">
          {/* Mobile Menu Toggle - Left-aligned on mobile */}
          <button
            className="lg:hidden p-2 text-gray-900 hover:text-blue-600 transition-colors z-20"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={32} /> : <FiMenu size={32} />}
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* ... rest of the nav remains the same ... */}
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

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <div className="space-y-2">
                <p className="font-bold text-gray-900 px-2 py-1 uppercase text-sm tracking-wider">What we do?</p>
                {whatWeDoLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="h-px bg-gray-100 my-2"></div>
              
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-2 py-2 font-medium text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="pt-4 pb-2">
                <button 
                  onClick={() => { closeMenu(); openProposalModal(); }}
                  className="w-full bg-black text-white px-6 py-3 font-bold hover:bg-gray-800 transition-colors shadow-md"
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
