import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // single delete.
  //   const singleDelete = await prisma.post.delete({
  //     where: {
  //       id: 1,
  //     },
  //   });

  // delete many.
  const deleteMany = await prisma.post.deleteMany({
    where: {
      //   published: true,
      title: "This is title 6",
    },
  });

  // delete all.
  const deleteAll = await prisma.post.deleteMany({});

  console.log(deleteAll);
};

main();
