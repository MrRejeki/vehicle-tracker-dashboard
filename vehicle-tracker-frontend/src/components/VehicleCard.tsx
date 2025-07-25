import React from "react"
import { Link } from "react-router-dom"
import { CarFront } from "lucide-react"
import StatusBadge from "./StatusBadge"
import type { Vehicle } from "../types/vehicle"


interface Props {
  vehicle: Vehicle
}

const VehicleCard: React.FC<Props> = ({ vehicle }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
          <CarFront size={28} />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{vehicle.name}</h2>
          <StatusBadge status={vehicle.status} />
        </div>
      </div>

      <div className="text-sm text-gray-600 mb-4">
        <p><strong>Speed:</strong> {vehicle.speed} km/h</p>
        <p><strong>Fuel:</strong> {vehicle.fuel_level}%</p>
        <p><strong>Odometer:</strong> {vehicle.odometer} km</p>
      </div>

      <Link
        to={`/vehicles/${vehicle.id}`}
        className="inline-block text-sm px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
      >
        Lihat Detail
      </Link>
    </div>
  )
}

export default VehicleCard
