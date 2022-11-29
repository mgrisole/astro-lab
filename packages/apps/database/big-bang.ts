import {Planet, PrismaClient} from './src/generated/client'

const prisma = new PrismaClient()

async function main() {
  const planets: Pick<Planet, 'name' | 'distance_from_eleven'>[] = [
    {
      name: 'Eleven',
      distance_from_eleven: 0,
    },
    {
      name: 'Sunev',
      distance_from_eleven: 12
    },
    {
      name: 'Retipuj',
      distance_from_eleven: 24,
    },
    {
      name: 'Sunaru',
      distance_from_eleven: 32
    }
  ];

  // We can't use createMany with current connector (https://github.com/prisma/prisma/issues/10710)
  await Promise.all(
    planets.map(planet => prisma.planet.create({data: planet}))
  )
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
