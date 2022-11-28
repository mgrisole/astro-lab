import { PrismaClient } from '.prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.planet.create({
    data: {
      name: 'Sunev',
      distance_from_eleven: 12
    }
  })

  const planets = await prisma.planet.findMany({
    include: {
      astronauts: true
    },
  })
  console.dir(planets, { depth: null })
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
