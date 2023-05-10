import { PrismaClient } from "acorn/";


const prisma = new PrismaClient()


async function main() {
    // queries go here
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