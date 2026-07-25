const crops = [
  { name: "Wheat", season: "Rabi", sowMonth: "Nov-Dec", harvestMonth: "Mar-Apr" },
  { name: "Rice", season: "Kharif", sowMonth: "Jun-Jul", harvestMonth: "Oct-Nov" },
  { name: "Cotton", season: "Kharif", sowMonth: "Apr-May", harvestMonth: "Oct-Dec" },
  { name: "Maize", season: "Kharif", sowMonth: "Jun-Jul", harvestMonth: "Sep-Oct" },
];

function CropCalendar() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-green-700">Crop Calendar</h1>
      <p className="mt-2 text-gray-600">Seasonal planting and harvesting guide</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {crops.map((crop) => (
          <div key={crop.name} className="border rounded-lg p-4 shadow-sm">
            <h2 className="font-semibold text-lg">{crop.name}</h2>
            <p className="text-sm text-gray-500">Season: {crop.season}</p>
            <p className="text-sm">Sow: {crop.sowMonth}</p>
            <p className="text-sm">Harvest: {crop.harvestMonth}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CropCalendar;