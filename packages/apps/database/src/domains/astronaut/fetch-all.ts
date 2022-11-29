import {Astronaut, PrismaClient} from '@astro-lab/prisma-client'

const prisma = new PrismaClient()

const fetch = async (): Promise<Astronaut[]> => {
  return prisma.astronaut.findMany();
}

export const fetchAllAstronauts = () => fetch()
  .then(async (astronauts) => {
    await prisma.$disconnect()
    return astronauts;
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

