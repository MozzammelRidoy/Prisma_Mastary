import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // create single.
  //   const createSinglePost = await prisma.post.create({
  //     data: {
  //       title: "This is title 3",
  //       content: "This is content 3",
  //       authorName: "Mozzammel Ridoy",
  //     },
  //   });

  // create many.
  const createManyPost = await prisma.post.createMany({
    data: [
      {
        title: "This is title 4",
        content: "This is conten 4",
        authorName: "Mozzammel Ridoy",
      },
      {
        title: "This is title 5",
        content: "This is conten 5",
        authorName: "Mozzammel Ridoy",
      },
      {
        title: "This is title 6",
        content: "This is conten 6",
        authorName: "Mozzammel Ridoy",
      },
    ],
  });
  console.log(createManyPost);
};

main();
