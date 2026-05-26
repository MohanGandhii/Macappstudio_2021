"use client";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Who we are?",
    "What we do?",
    "How we do it?",
    "Success Stories",
    "For Enterprises",
  ];

  return (
    <>
      <nav className="bg-gray-50 border-b">
        
        {/* CONTAINER (important) */}
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-3">
          
          {/* Logo */}
          <img
            src="/Assets/MaccappName.svg"
            alt="logo"
            className="h-8 md:h-8 w-auto"
          />
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            
            <div className="flex gap-8 text-sm text-gray-700">
              {menuItems.map((item, i) => (
                <span
                  key={i}
                  className="cursor-pointer hover:text-black transition"
                >
                  {item}
                </span>
              ))}
            </div>

            <button className="bg-black text-white px-5 py-2 rounded-md text-sm">
              Get a Proposal
            </button>
          </div>

          {/* Mobile Icon */}
          <button
            className="md:hidden text-2xl text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-6 space-y-5 shadow-md">
          <div className="flex flex-col gap-4 text-gray-700">
            {menuItems.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>

          <button className="bg-black text-white px-4 py-2 rounded-md w-full">
            Get a Proposal
          </button>
        </div>
      )}
    </>
  );
}