import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // create a new post.
  //   const newPost = await prisma.post.create({
  //     data: {
  //       title: "This is a title 2",
  //       content: "This is a content 2",
  //       authorName: "Mozzammel Ridoy",
  //     },
  //   });

  //   console.log(newPost);

  // find all posts.
  const getAllFromDB = await prisma.post.findMany();
  console.log(getAllFromDB);
};

main();
