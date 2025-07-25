import { Request, Response } from "express"
import prisma from "../prisma/client"

export const getAllVehicles = async (req: Request, res: Response) => {
  const vehicles = await prisma.vehicle.findMany()
  res.json(vehicles)
}

export const getVehicleById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const vehicle = await prisma.vehicle.findUnique({ where: { id } })
  if (!vehicle) return res.status(404).json({ error: "Not found" })
  res.json(vehicle)
}
