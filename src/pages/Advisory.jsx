import { useState } from "react";

function Advisory() {
  const [crop, setCrop] = useState("");
  const [advice, setAdvice] = useState(null);

  const adviceData = {
    wheat: "Sow between Nov-Dec. Ensure soil moisture is adequate before sowing. Watch for aphid infestation in Feb.",
    rice: "Sow between Jun-Jul with monsoon onset. Maintain standing water of 2-5cm during vegetative stage.",
    cotton: "Sow between Apr-May. Monitor for bollworm attacks starting July. Avoid over-irrigation.",
  };

  const handleCheck = () => {
    const key = crop.trim().toLowerCase();
    setAdvice(adviceData[key] || "No specific advisory available for this crop yet.");
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-green-700">Advisory</h1>
      <p className="mt-2 text-gray-600">
        Get crop-specific recommendations based on season and best practices.
      </p>

      <div className="mt-6 flex gap-3">
        <input
          type="text"
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
          placeholder="Enter crop name (e.g. wheat, rice, cotton)"
          className="border rounded-lg px-4 py-2 w-72"
        />
        <button
          onClick={handleCheck}
          className="bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Get Advice
        </button>
      </div>

      {advice && (
        <div className="mt-6 border rounded-lg p-4 shadow-sm bg-green-50">
          <p>{advice}</p>
        </div>
      )}
    </div>
  );
}

export default Advisory;