import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // offset pagination.
  const offsetData = await prisma.post.findMany({
    skip: 5,
    take: 2,
  });

  // cursor based pagination.
  const cursorData = await prisma.post.findMany({
    skip: 5,
    take: 2,
    cursor: {
      id: 20,
    },
  });

  // sorting.
  const sortData = await prisma.post.findMany({
    orderBy: {
      title: "desc",
    },
    where: {
      title: "New Title added",
    },
  });

  console.log(sortData);
};

main();
