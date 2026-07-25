import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png";

function Home() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4">
        <img src={heroImg} alt="KisanAI logo" className="w-16 h-16" />
        <h1 className="text-4xl font-bold text-green-700">Welcome to KisanAI</h1>
      </div>
      <p className="mt-4 text-gray-600 text-lg">
        AI-powered agriculture assistant helping farmers make better decisions.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="bg-green-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold">🌦️ Weather Alerts</h2>
          <p className="mt-2 text-gray-600">Get real-time weather forecasts and alerts.</p>
          <Link to="/weather" className="mt-3 inline-block text-green-700 font-medium">
            Check Weather →
          </Link>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold">🌱 Crop Advisory</h2>
          <p className="mt-2 text-gray-600">Get crop-specific sowing and care recommendations.</p>
          <Link to="/advisory" className="mt-3 inline-block text-green-700 font-medium">
            Get Advice →
          </Link>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold">📅 Crop Calendar</h2>
          <p className="mt-2 text-gray-600">See seasonal planting and harvesting schedules.</p>
          <Link to="/crop-calendar" className="mt-3 inline-block text-green-700 font-medium">
            View Calendar →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;