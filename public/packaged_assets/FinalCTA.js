export default function FinalCTA() {
  return (
    <div className="bg-gray-100 py-24 text-center px-4">

      {/* ALERT */}
      <div className="inline-block bg-red-100 text-red-600 text-xs px-4 py-2 rounded-full mb-6">
        🔥 URGENT: Only 5 slots left this month!
      </div>

      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Secure Your <span className="text-blue-600">Dream Team</span> Now
      </h2>

      {/* SUBTEXT */}
      <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
        Join 1000+ companies who secured their development teams.{" "}
        <span className="font-semibold text-gray-700">
          Don't miss out – slots filling fast!
        </span>
      </p>

      {/* TIMER BOX */}
      <div className="mt-10 flex justify-center">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-6 rounded-2xl shadow-lg">

          <p className="text-sm mb-4">
            ⏱ Limited Time Offer Ends In:
          </p>

          {/* TIME */}
          <div className="flex items-center justify-center gap-6 text-2xl font-bold">

            <div className="text-center">
              <p>02</p>
              <span className="text-xs font-normal">Hours</span>
            </div>

            <span>:</span>

            <div className="text-center">
              <p>45</p>
              <span className="text-xs font-normal">Minutes</span>
            </div>

            <span>:</span>

            <div className="text-center">
              <p>15</p>
              <span className="text-xs font-normal">Seconds</span>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}