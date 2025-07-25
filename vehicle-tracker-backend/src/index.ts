import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import vehicleRoutes from "./routes/vehicle.route"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use("/vehicles", vehicleRoutes)

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
