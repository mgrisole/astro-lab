import {Astronaut, PrismaClient} from '@astro-lab/prisma-client'

const prisma = new PrismaClient()

const create = async (astronaut: AstronautBuilder) => {
  await prisma.astronaut.create({data: astronaut})
}


export const createAstronaut = (astronaut: AstronautBuilder) => create(astronaut)
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

type AstronautBuilder = Omit<Astronaut, 'id'>;
