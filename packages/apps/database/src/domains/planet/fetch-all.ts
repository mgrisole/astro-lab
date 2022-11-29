import {Planet, PrismaClient} from "../../../generated/client";

const prisma = new PrismaClient()

const fetch = async (): Promise<Planet[]> => {
  return prisma.planet.findMany();
}

export const fetchAllPlanets = () => fetch()
  .then(async (planets) => {
    await prisma.$disconnect()
    return planets;
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

