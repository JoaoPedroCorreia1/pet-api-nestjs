import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.pet.upsert({
    where: { id: 1},
    update: {},
    create: {
      type: 'dog',
      description:
        "beagle"
    }
  });

  const post2 = await prisma.pet.upsert({
    where: { id: 2},
    update: {},
    create: {
      type: 'dog',
      description:
        "foxhound"
    }
  });

  console.log({ post1, post2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });