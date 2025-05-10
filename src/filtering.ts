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

  //   console.log(startWith);

  // ends with.
  const endsWith = await prisma.user.findMany({
    where: {
      email: {
        endsWith: "mail.com",
      },
    },
  });
  //   console.log(endsWith);

  // exact filtering.
  const equaltFiltering = await prisma.user.findMany({
    where: {
      email: {
        equals: "user1@mail.com",
      },
    },
  });

  //   console.log(equaltFiltering);

  // array filtering.
  const userNameArray = ["user1", "user2", "user3"];

  const arrayFiltering = await prisma.user.findMany({
    where: {
      username: {
        in: userNameArray,
      },
    },
  });

  //   console.log(arrayFiltering);

  // depth filtering.
  const inDepthData = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      post: {
        include: {
          postCategory: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });
  console.dir(inDepthData, { depth: Infinity });
};

main();
