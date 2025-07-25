import { Router } from "express"
import { getAllVehicles, getVehicleById } from "../controllers/vehicle.controller"

const router = Router()

router.get("/", getAllVehicles)
router.get("/:id", getVehicleById)

export default router
