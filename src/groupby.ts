import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // group by single filed.
  const groupPost = await prisma.post.groupBy({
    by: "published",
  });

  // group by multiple filed.
  const groupPostByMultipleFiled = await prisma.post.groupBy({
    // by: ["published", "authorId"],
    by: ["published"],
    _count: {
      title: true,
    },
    // where: {
    //   published: true,
    // },
    having: {
      authorId: {
        _sum: {
          gt: 2,
        },
      },
    },
  });

  console.log(groupPostByMultipleFiled);
};
main();
