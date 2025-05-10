import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient({
  log: [{ emit: "event", level: "query" }],
});

prisma.$on("query", (e) => {
  console.log("Query", e.query);
  console.log("duration", e.duration), console.log("timestamp", e.timestamp);
});

const main = async () => {
  const allPost = await prisma.post.findMany();
  //   console.log("loggin");
};
main();
