import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // find all.
  const getAllFromDB = await prisma.post.findMany();

  // findFirst -> find by id. find single.
  const findFirst = await prisma.post.findFirst({
    where: {
      id: 1,
    },
  });

  // findFirstOrThrow - find single.
  //   const findFirstOrThrow = await prisma.post.findFirstOrThrow({
  //     where: {
  //       id: 10,
  //     },
  //   });

  // findUnique - find by unique field. find single.
  const findUnique = await prisma.post.findUnique({
    where: {
      id: 1,
    },
  });

  // findUniqueOrThrow - find by unique field. find single.
  const findUniqueOrThrow = await prisma.post.findUniqueOrThrow({
    where: {
      id: 10,
    },
    select: {
      title: true,
      content: true,
      authorName: true,
    },
  });

  console.log(findUniqueOrThrow);
};

main();
