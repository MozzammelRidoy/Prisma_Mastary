import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // fluent api.
  //   const result = await prisma.user
  //     .findUnique({
  //       where: {
  //         id: 1,
  //       },
  //     })
  //     .post();

  //   const result = await prisma.user
  //     .findUnique({
  //       where: {
  //         id: 1,
  //       },
  //     })
  //     .profile();

  // populate api.
  const result = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      post: true,
    },
  });
  console.log(result);
};
main();
