"use client";

export default function SlotsSection() {
  const slots = Array.from({ length: 40 }, (_, i) => i + 11);

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">

        {/* STATUS */}
        <p className="text-sm text-gray-500 mb-8">
          <span className="text-green-600 font-medium">● Available: 90</span>
          <span className="mx-3 text-gray-400">•</span>
          <span className="text-gray-600">Booked: 10</span>
        </p>

        {/* GRID */}
        <div className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-5 
          lg:grid-cols-7 
          gap-4 md:gap-6
        ">
          {slots.map((num, i) => (
            <div
              key={i}
              className="border border-green-500 rounded-xl p-4 md:p-5 text-center hover:shadow-md transition cursor-pointer"
            >
              <p className="text-sm md:text-base font-medium text-gray-800">
                {num <= 28 ? `Team - ${num}` : `Slot - ${num}`}
              </p>

              <p className="text-green-600 text-sm mt-1 font-medium">
                Book
              </p>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">

          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-sm md:text-base">
            Secure My Dream Team Slot Now →
          </button>

          <button className="border border-green-500 text-green-600 px-6 py-3 rounded-xl text-sm md:text-base hover:bg-green-50">
            Show More (Available Slot)
          </button>

        </div>

        {/* FOOTER */}
        <p className="text-gray-400 text-xs mt-6">
          Limited slots available • First-come, first-served
        </p>

      </div>
    </section>
  );
}