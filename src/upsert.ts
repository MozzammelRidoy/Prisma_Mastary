import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // upsert data.
  const upsertData = await prisma.post.upsert({
    where: {
      id: 11,
    },
    update: {
      authorName: "Mozzammel Ridoy",
    },
    create: {
      title: "New Title added",
      content: "content here",
    },
  });

  console.log(upsertData);
};
main();
