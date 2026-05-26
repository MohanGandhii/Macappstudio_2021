"use client";

export default function BatchProgress() {
  const data = [
    {
      title: "November Month Slots",
      filled: 100,
      badge: "Within 3 hours Filled",
      badgeColor: "bg-blue-500",
      button: "Slot not Available",
      disabled: true,
    },
    {
      title: "December Month Slots",
      filled: 100,
      badge: "Within 2 hours Filled",
      badgeColor: "bg-blue-500",
      button: "Slot not Available",
      disabled: true,
    },
    {
      title: "January Month Slots",
      filled: 63,
      badge: "Filling Fast",
      badgeColor: "bg-pink-500",
      button: "Book Your Slot",
    },
    {
      title: "February Month Slots",
      filled: 44,
      badge: "Filling Fast",
      badgeColor: "bg-orange-500",
      button: "Book Your Slot",
    },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Live Batch Progress
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Real-time updates • Last updated: Just now
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

          {data.map((item, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-7"
            >

              {/* BADGE */}
              <span
                className={`absolute -top-3 left-5 text-xs text-white px-3 py-1 rounded-md ${item.badgeColor}`}
              >
                {item.badge}
              </span>

              {/* TOP ROW */}
              <div className="flex justify-between items-center">
                <p className="text-base font-medium text-gray-700">
                  {item.title}
                </p>
                <p className="text-sm text-green-600 font-medium">
                  {item.filled}/100 filled
                </p>
              </div>

              {/* PROGRESS BAR */}
              <div className="w-full bg-gray-200 h-3 rounded-full mt-4">
                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{ width: `${item.filled}%` }}
                ></div>
              </div>

              {/* BUTTON */}
              <div className="flex justify-end mt-5">
                <button
                  className={`px-6 py-2.5 rounded-xl text-sm font-medium transition
                  ${
                    item.disabled
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                >
                  {item.button}
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}