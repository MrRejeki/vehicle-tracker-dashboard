import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  await prisma.vehicle.createMany({
    data: [
      {
        name: "Truck Alpha",
        status: "ACTIVE",
        fuel_level: 80.5,
        odometer: 12500,
        latitude: -7.78165,
        longitude: 110.4311,
        speed: 60,
        updated_at: new Date()
      },
      {
        name: "Bus Beta",
        status: "INACTIVE",
        fuel_level: 30.2,
        odometer: 20050,
        latitude: -7.7892,
        longitude: 110.4025,
        speed: 0,
        updated_at: new Date()
      },
      {
        name: "Van Charlie",
        status: "ACTIVE",
        fuel_level: 60.0,
        odometer: 15000,
        latitude: -7.7859,
        longitude: 110.4058,
        speed: 40,
        updated_at: new Date()
      }
    ]
  })

  console.log("✅ Dummy vehicle data inserted.")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
