"use client";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-14">

      <div className="max-w-7xl mx-auto">

        {/* 3 COLUMN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

          {/* LEFT (LOGO + WHAT WE DO) */}
          <div>
            {/* LOGO */}
            <img
              src="/Assets/MaccappName.svg"
              alt="MacAppStudio"
              className="h-12 object-contain mb-6"
            />

            {/* WHAT WE DO */}
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              What we do?
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-black cursor-pointer">App Development</li>
              <li className="hover:text-black cursor-pointer">Technology Consulting</li>
              <li className="hover:text-black cursor-pointer">Research and Development</li>
            </ul>
          </div>

          {/* MIDDLE */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              How we do it?
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>Success Stories</li>
              <li>For Enterprises</li>
              <li>Who we are?</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Accelerator</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              FOLLOW US
            </h3>

            <div className="flex gap-4">
              <img
                src="/Assets/Footer/Link.svg"
                alt="linkedin"
                className="w-5 h-5 cursor-pointer"
              />
              <img
                src="/Assets/Footer/youtube.svg"
                alt="youtube"
                className="w-5 h-5 cursor-pointer"
              />
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500">
          MacAppStudio © Copyright 2025 &nbsp; | &nbsp; All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}