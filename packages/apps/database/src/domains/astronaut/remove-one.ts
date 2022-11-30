import {PrismaClient} from "../../../generated/client";

const prisma = new PrismaClient()

const remove = async (id: string) => {
  await prisma.astronaut.delete({where: {id}})
}


export const removeAstronaut = (id: string) => remove(id)
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
