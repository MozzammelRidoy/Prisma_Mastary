import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // single update.
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 7,
  //     },
  //     data: {
  //       title: "This is title 7",
  //       content: "This is content 7",
  //     },
  //   });

  // update many.
  const updateMany = await prisma.post.updateMany({
    where: {
      title: "This is title 5",
    },
    data: {
      published: true,
    },
  });

  console.log(updateMany);
};
main();
