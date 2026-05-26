export default function StatsSection() {
  return (
    <div className="bg-gray-100 py-16 px-4">

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {/* CARD 1 */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
          
          <div className="h-14 flex items-center justify-center mb-4">
            <img
              src="/assets/StatsSection/Layer_1.svg"
              alt="teams"
              className="max-h-full object-contain"
            />
          </div>

          <h3 className="text-3xl font-bold text-green-600">147</h3>
          <p className="text-sm text-green-700 mt-1">Teams Deployed</p>
        </div>

        {/* CARD 2 */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
          
          <div className="h-14 flex items-center justify-center mb-4">
            <img
              src="/assets/StatsSection/Flat.svg"
              alt="rating"
              className="max-h-full object-contain"
            />
          </div>

          <h3 className="text-2xl font-bold text-gray-900">4.9/5</h3>
          <p className="text-sm text-gray-600 mt-1">Client Rating</p>
        </div>

        {/* CARD 3 */}
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-8 text-center">
          
          <div className="h-14 flex items-center justify-center mb-4">
            <img
              src="/assets/StatsSection/Frame.svg"
              alt="weeks"
              className="max-h-full object-contain"
            />
          </div>

          <h3 className="text-3xl font-bold text-gray-900">1.2</h3>
          <p className="text-sm text-gray-600 mt-1">Avg Weeks Start</p>
        </div>

        {/* CARD 4 */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
          
          <div className="h-14 flex items-center justify-center mb-4">
            <img
              src="/assets/StatsSection/Layer_1 copy.svg"
              alt="slots"
              className="max-h-full object-contain"
            />
          </div>

          <h3 className="text-3xl font-bold text-gray-900">5</h3>
          <p className="text-sm text-gray-600 mt-1">Slots Left</p>
        </div>

      </div>

    </div>
  );
}