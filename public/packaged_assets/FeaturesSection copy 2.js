"use client";

import { Check, Users, Smartphone, Code, Database, Settings } from "lucide-react";

export default function FeaturesSection() {
  return (
    <div className="bg-[#f3f4f6] py-16">

      {/* CONTAINER */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 px-4">

        {/* LEFT CARD */}
        <div className="rounded-2xl p-8 bg-gradient-to-br from-green-50 to-gray-100 border border-green-100 shadow-sm">

          {/* HEADER */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-500 text-white flex items-center justify-center rounded-lg">
              <Check size={18} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Key Features
            </h3>
          </div>

          {/* LIST */}
          <ul className="space-y-4 text-sm text-gray-700">
            {[
              "Live Video Classes",
              "Course Management System",
              "Student Progress Dashboard",
              "Interactive Assessments",
              "Content Library & Resources",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check size={16} className="text-green-500" />
                {item}
              </li>
            ))}
          </ul>

          {/* PLATFORMS */}
          <div className="mt-8">
            <p className="text-sm flex items-center gap-2 text-gray-600 mb-3">
              🌐 Platforms Covered
            </p>

            <div className="flex flex-wrap gap-2">
              {["iOS", "Android", "Web", "Teacher Portal"].map((p, i) => (
                <span
                  key={i}
                  className="bg-white border border-gray-200 px-3 py-1.5 rounded-md text-xs text-gray-600 shadow-sm"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="rounded-2xl p-8 bg-white border border-gray-200 shadow-sm">

          {/* HEADER */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-500 text-white flex items-center justify-center rounded-lg">
              <Users size={18} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Team Structure
            </h3>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            Dedicated experts assigned to your fintech project
          </p>

          {/* TEAM GRID */}
          <div className="grid grid-cols-2 gap-4">
            {[
              ["Product Designer", "x1", <Code size={16} />],
              ["iOS Developer", "x2", <Smartphone size={16} />],
              ["Android Developer", "x2", <Smartphone size={16} />],
              ["Backend Developer", "x2", <Database size={16} />],
              ["QA Engineer", "x2", <Check size={16} />],
              ["DevOps Engineer", "x1", <Settings size={16} />],
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-lg"
              >
                <div className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-md">
                  {item[2]}
                </div>

                <div className="flex-1 text-sm text-gray-700">
                  {item[0]}
                </div>

                <div className="text-sm text-gray-500">
                  {item[1]}
                </div>
              </div>
            ))}
          </div>

          {/* TOTAL */}
          <div className="mt-6 bg-blue-50 border border-blue-200 text-blue-600 px-4 py-3 rounded-lg text-sm">
            Total Team Size: <span className="font-semibold">10 experts</span>
          </div>
        </div>

      </div>

      {/* BUTTON */}
      <div className="flex justify-center mt-12">
        <button className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-400 text-white px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition">
          ✉ Request Quote for FinTech
        </button>
      </div>

    </div>
  );
}