// src/pages/VehicleDetail.tsx
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { CarFront, Loader2 } from "lucide-react"

type Vehicle = {
  id: number
  name: string
  status: "ACTIVE" | "INACTIVE"
  fuel_level: number
  odometer: number
  latitude: number
  longitude: number
  speed: number
  updated_at: string
}

const VehicleDetail = () => {
  const { id } = useParams()
  const [vehicle, setVehicle] = useState<Vehicle | null>(null)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/vehicles/${id}`)
      .then((res) => res.json())
      .then((data) => setVehicle(data))
      .catch((err) => console.error("Error fetching vehicle:", err))
  }, [id])

  if (!vehicle)
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
      </div>
    )

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 font-sans">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
            <CarFront size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{vehicle.name}</h1>
            <span
              className={`mt-1 inline-block px-3 py-1 text-sm rounded-full font-medium ${
                vehicle.status === "ACTIVE"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {vehicle.status}
            </span>
          </div>
        </div>

        <div className="grid gap-4 text-gray-700 text-sm">
          <p>
            <span className="font-semibold">Fuel Level:</span> {vehicle.fuel_level}%
          </p>
          <p>
            <span className="font-semibold">Odometer:</span> {vehicle.odometer} km
          </p>
          <p>
            <span className="font-semibold">Speed:</span> {vehicle.speed} km/h
          </p>
          <p>
            <span className="font-semibold">Location:</span> {vehicle.latitude}, {vehicle.longitude}
          </p>
          <p>
            <span className="font-semibold">Last Updated:</span>{" "}
            {new Date(vehicle.updated_at).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default VehicleDetail
