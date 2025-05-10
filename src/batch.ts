import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // create post.
  const createUser = prisma.user.create({
    data: {
      username: "user6",
      email: "user6@mail.com",
    },
  });

  // update user.
  const updateUser = prisma.user.update({
    where: {
      id: 4,
    },
    data: {
      age: 40,
    },
  });

  const [newUser, updateUserData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);

  console.log(newUser, updateUserData);
};
main();
