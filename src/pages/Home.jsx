function Home() {
  return (
    <div className="p-10">

      <h1 className="text-5xl font-bold text-green-700">
        🌾 Welcome to KisanAI
      </h1>

      <p className="mt-5 text-lg text-gray-600">
        AI-powered agriculture assistant helping farmers make better decisions.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-green-100 rounded-xl p-6 shadow">
          <h2 className="text-2xl font-bold">
            🌦 Weather Alerts
          </h2>

          <p className="mt-3">
            Get real-time weather forecasts and alerts.
          </p>
        </div>

        <div className="bg-yellow-100 rounded-xl p-6 shadow">
          <h2 className="text-2xl font-bold">
            🌱 Crop Advisory
          </h2>

          <p className="mt-3">
            Receive AI-based crop recommendations.
          </p>
        </div>

        <div className="bg-blue-100 rounded-xl p-6 shadow">
          <h2 className="text-2xl font-bold">
            📅 Crop Calendar
          </h2>

          <p className="mt-3">
            Know the best sowing and harvesting dates.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Home;