import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // and filtering.
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });
  //   console.log(andFiltering);

  // or filtering.
  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  //   console.log(orFiltering);

  // not filtering.
  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: {
        title: {
          contains: "title",
        },
      },
    },
  });

  //   console.log(notFiltering);

  // start with
  const startWith = await prisma.user.findMany({
    where: {
      username: {
        startsWith: "user1",
      },
    },
  });

  console.log(startWith);
};

main();
