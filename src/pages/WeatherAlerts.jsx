function WeatherAlerts() {
  const forecast = [
    { day: "Today", temp: "32°C", condition: "Sunny", alert: null },
    { day: "Tomorrow", temp: "28°C", condition: "Rain expected", alert: "Heavy rainfall warning" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-green-700">Weather</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {forecast.map((f) => (
          <div key={f.day} className="border rounded-lg p-4 shadow-sm">
            <h2 className="font-semibold">{f.day}</h2>
            <p>{f.temp} · {f.condition}</p>
            {f.alert && <p className="text-red-600 text-sm mt-1">⚠️ {f.alert}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherAlerts;