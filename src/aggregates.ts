import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // find avarage.
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  // find sum of age.
  const sumAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });

  // find count.
  const countAge = await prisma.user.aggregate({
    _count: {
      age: true,
    },
  });

  // find count others fields with numaric.
  const countString = await prisma.post.aggregate({
    _count: {
      title: true,
    },
    where: {
      published: true,
    },
  });

  // find number of record..
  const countData = await prisma.user.count();

  // find max age.
  const maxAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });

  // find min age.
  const minAge = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });
  console.log(minAge);
};

main();
