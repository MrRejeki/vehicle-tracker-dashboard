// src/pages/VehicleList.tsx
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CarFront, Loader2 } from "lucide-react"

type Vehicle = {
  id: number
  name: string
  status: "ACTIVE" | "INACTIVE"
}

const VehicleList = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/vehicles`)
      .then((res) => res.json())
      .then((data) => setVehicles(data))
      .catch((err) => console.error("Error fetching vehicles:", err))
      .finally(() => setLoading(false))
  }, [])

  const filteredVehicles = vehicles.filter((v) =>
    v.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 py-10 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-blue-700 drop-shadow">
          🚗 Vehicle Dashboard
        </h1>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search vehicle..."
          className="w-full p-3 mb-6 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Loading spinner */}
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Loader2 className="animate-spin w-10 h-10 text-blue-500" />
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {filteredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex justify-between items-center"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
                    <CarFront size={28} />
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-gray-800">{vehicle.name}</p>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      Status:{" "}
                      <span
                        className={`ml-1 px-2 py-0.5 text-xs font-medium rounded-full ${
                          vehicle.status === "ACTIVE"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {vehicle.status}
                      </span>
                    </p>
                  </div>
                </div>
                <Link
                  to={`/vehicles/${vehicle.id}`}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg shadow"
                >
                  View
                </Link>
              </div>
            ))}
            {filteredVehicles.length === 0 && (
              <p className="text-center text-gray-500 col-span-full">No vehicles found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default VehicleList
