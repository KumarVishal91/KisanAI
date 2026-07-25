function About() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-green-700">About KisanAI</h1>
      <p className="mt-4 text-gray-600 max-w-2xl">
        KisanAI is an AI-powered agriculture assistant built to help farmers make
        smarter, data-driven decisions. From weather forecasts to crop-specific
        advisories and seasonal planting calendars, KisanAI brings essential
        farming knowledge into one simple platform.
      </p>
      <p className="mt-4 text-gray-600 max-w-2xl">
        Our mission is to bridge the gap between modern technology and traditional
        farming practices — making reliable agricultural guidance accessible to
        every farmer, regardless of location or resources.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="border rounded-lg p-4 text-center">
          <h3 className="font-semibold text-green-700">🌾 Simple</h3>
          <p className="text-sm text-gray-600 mt-1">Easy to use, no technical knowledge needed.</p>
        </div>
        <div className="border rounded-lg p-4 text-center">
          <h3 className="font-semibold text-green-700">📊 Data-driven</h3>
          <p className="text-sm text-gray-600 mt-1">Recommendations based on real agricultural data.</p>
        </div>
        <div className="border rounded-lg p-4 text-center">
          <h3 className="font-semibold text-green-700">🤝 Farmer-first</h3>
          <p className="text-sm text-gray-600 mt-1">Built with farmers' real needs in mind.</p>
        </div>
      </div>
    </div>
  );
}

export default About;