export default function AwardsSection() {
  return (
    <div className="bg-gray-100 py-16 text-center">

      {/* TITLE */}
      <h2 className="text-3xl font-semibold text-gray-900">
        Awards & Recognition
      </h2>

      {/* GRID */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 px-6">

        {/* ITEM */}
        {[
          {
            img: "/Assets/Award/award01.svg",
            text: "Intel BlackBelt for App Development",
          },
          {
            img: "/Assets/Award/award02.svg",
            text: "Most Valuable Developers Award",
          },
          {
            img: "/Assets/Award/award03.svg",
            text: "Intel Worldwide Top Innovator 2017",
          },
          {
            img: "/Assets/Award/award04.svg",
            text: "Winner of Intel Best App to Stay in Sync Contest",
          },
          {
            img: "/Assets/Award/award05.svg",
            text: "Best App Award From Google - 2023",
          },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">

            {/* IMAGE */}
            <img
              src={item.img}
              alt="award"
              className="h-28 object-contain"
            />

            {/* TEXT */}
            <p className="text-sm text-gray-600 mt-4 max-w-[140px]">
              {item.text}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}