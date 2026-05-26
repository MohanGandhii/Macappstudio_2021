export default function ClientsSection() {
  return (
    <div className="bg-gray-100 py-20 text-center">

      {/* TITLE */}
      <h2 className="text-4xl font-bold text-gray-900">
        When have team of 100 People
      </h2>

      {/* SUBTITLE */}
      <p className="text-gray-500 mt-3">
        We have limited team, Kindly book your slot
      </p>

      {/* LOGOS */}
      <div className="max-w-6xl mx-auto mt-14 px-6 flex justify-between items-center">

        {/* TANEIRA (slightly increase) */}
        <div className="w-[160px] h-[60px] flex items-center justify-center">
          <img
            src="/Assets/ClientSelection/image 1858.svg"
            alt="taneira"
            className="h-12 object-contain"
          />
        </div>

        {/* JIO (reduce slightly) */}
        <div className="w-[160px] h-[60px] flex items-center justify-center">
          <img
            src="/Assets/ClientSelection/image 1859.svg"
            alt="jio"
            className="h-12 object-contain scale-100"
          />
        </div>

        {/* POWER SOAPS (balanced boost) */}
        <div className="w-[160px] h-[60px] flex items-center justify-center">
          <img
            src="/Assets/ClientSelection/image 1860.svg"
            alt="power"
            className="h-14 object-contain scale-110"
          />
        </div>

        {/* MEDYOGA (keep stable) */}
        <div className="w-[160px] h-[60px] flex items-center justify-center">
          <img
            src="/Assets/ClientSelection/image 1861.svg"
            alt="medyoga"
            className="h-12 object-contain"
          />
        </div>

      </div>

    </div>
  );
}