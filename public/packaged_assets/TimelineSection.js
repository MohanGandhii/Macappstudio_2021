export default function TimelineSection() {
  return (
    <div className="bg-gray-100 py-20 text-center">

      {/* TOP TEXT */}
      <p className="text-blue-600 text-xs font-medium tracking-wide">
        PROJECT ROADMAP
      </p>

      <h2 className="text-4xl font-bold mt-3 text-gray-900">
        Development Timeline
      </h2>

      <p className="text-gray-500 mt-3">
        Clear stages with predictable delivery milestones
      </p>

      {/* TIMELINE */}
      <div className="max-w-6xl mx-auto mt-14 px-6">

        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-6">

          {[
            { img: "/Assets/TimeLineSection/1.svg", step: "1", title: "Discovery", days: "15 days" },
            { img: "/Assets/TimeLineSection/2.svg", step: "2", title: "Design", days: "15 days" },
            { img: "/Assets/TimeLineSection/3.svg", step: "3", title: "Development", days: "20 days" },
            { img: "/Assets/TimeLineSection/4.svg", step: "4", title: "Testing", days: "15 days" },
            { img: "/Assets/TimeLineSection/5.svg", step: "5", title: "Launch", days: "5 days" },
          ].map((item, i, arr) => (
            <div key={i} className="relative flex items-center">

              {/* CARD */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col items-center min-w-[170px]">

                <img
                  src={item.img}
                  alt="step"
                  className="w-12 h-12 object-contain mb-4"
                />

                <p className="text-blue-600 font-semibold text-lg">
                  {item.step}
                </p>

                <h3 className="text-sm font-medium text-gray-800">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  {item.days}
                </p>
              </div>

              {/* CONNECTOR LINE */}
              {i !== arr.length - 1 && (
                <div className="hidden md:block absolute right-[-48px] top-1/2 -translate-y-1/2 w-12 h-[2px] bg-blue-400"></div>
              )}

            </div>
          ))}

        </div>

      </div>

      {/* BOTTOM BOX */}
      <div className="mt-12 flex justify-center">
        <div className="bg-blue-50 border border-blue-200 text-blue-600 px-6 py-3 rounded-xl text-sm">
          ⚡ <span className="font-semibold">Agile Delivery:</span> Progress updates every 15–20 days
        </div>
      </div>

    </div>
  );
}