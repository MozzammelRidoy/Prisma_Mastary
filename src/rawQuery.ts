import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  //   const posts = await prisma.$queryRaw`SELECT * FROM "posts"`;
  //   console.log(posts);

  // delete user table data.
  await prisma.$queryRaw`TRUNCATE TABLE "users" CASCADE`;
  await prisma.$queryRaw`TRUNCATE TABLE "categories" CASCADE`;
};
main();
