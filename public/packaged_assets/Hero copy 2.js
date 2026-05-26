export default function Hero() {
  return (
    <section className="bg-[#F3F4F6] text-center px-6 py-8 md:py-10">

  {/* IMAGE */}
  <div className="flex justify-center mb-4">
    <img
      src="/Assets/heroimg.png"
      alt="hero"
      className="w-64 md:w-80"
    />
  </div>

  {/* HEADING */}
  <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
    Build Your Dream with Our
  </h1>

  <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mt-1">
    Extended Tech Team
  </h2>

  {/* DESCRIPTION */}
  <p className="text-gray-600 mt-3 max-w-xl mx-auto">
    Get ready-to-go extended teams in just 1-2 weeks. Having built over 120+ apps on almost every platform, we bring scalable support and transparent collaboration.
  </p>

  {/* BUTTONS */}
  <div className="flex flex-col sm:flex-row justify-center gap-4 mt-5">
    
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
      Start Building Today →
    </button>

    <button className="flex items-center gap-2 border border-gray-300 bg-white text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-100">
  ▶ Watch Demo
</button>
  </div>

  {/* STATS */}
  <div className="flex justify-center gap-10 mt-8">
    
    <div>
      <h3 className="text-lg font-semibold text-gray-800">1-2</h3>
      <p className="text-sm text-gray-500">Weeks to Start</p>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-gray-800">100%</h3>
      <p className="text-sm text-gray-500">Managed</p>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-gray-800">30</h3>
      <p className="text-sm text-gray-500">Days Flexibility</p>
    </div>

  </div>

</section>
  );
}