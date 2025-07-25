import { create } from 'zustand'
import type { Vehicle } from '../types/vehicle'


interface VehicleStore {
  vehicles: Vehicle[]
  setVehicles: (vehicles: Vehicle[]) => void
}

export const useVehicleStore = create<VehicleStore>((set) => ({
  vehicles: [],
  setVehicles: (vehicles) => set({ vehicles }),
}))
